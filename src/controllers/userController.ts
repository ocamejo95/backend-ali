import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { Service } from "typedi";

import { userModel } from "../models/user";
import UserService from "../services/userService";

@Service()
class UserController {
  constructor(private readonly userService: UserService) {}

  async getAllUsers(res: Response) {
    const resultFind = await userModel.find().select("-password");
    return res.json({ Result: "Get User", resultFind });
  }

  async getUser(req: Request, res: Response) {
    const user = req.params.id;
    if (user.length == 24) {
      const resultGetUser = await this.userService.getUser(user);
      return res.json(resultGetUser);
    } else {
      return res.status(200).json({ Result: "Format Id Incorrecto" });
    }
  }

  async createUser(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const emailExiste = await userModel.findOne({ email });

      //Verifico que el user no exista ya
      if (emailExiste) {
        return res.status(400).json({ message: "The user already exists!" });
      }

      //Creo el usuario con el cuerpo de la peticion
      const user = new userModel(req.body);

      //Encriptar el password
      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(password, salt);

      //Guardar usuario en la BD
      await user.save();

      //Respuesta en un JSON
      res.json({ user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error inesperado... revisar logs" });
    }
  }

  async updateUser(req: Request, res: Response) {
    const uid = req.params.id;

    try {
      const usuarioDB = await userModel.findById(uid);
      if (!usuarioDB) {
        return res.status(404).json({ message: "No se encontro el usuario" });
      }

      const { password, username, email, name } = req.body;
      if (usuarioDB.email !== email) {
        const emailExiste = await userModel.findOne({ email });
        if (emailExiste) {
          return res
            .status(400)
            .json({ message: "Ya existe un usuario con ese email" });
        }
      }

      const userUpdate = await userModel.findByIdAndUpdate(uid, req.body, {
        new: true,
      });
      res.status(200).json({ message: "ok", userUpdate });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error inesperado... revisar logs" });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const user = req.params.id;
    if (user.length == 24) {
      const resultDelete = this.userService.deleteUser(req.params.id);
      return res.status(204).json({ Result: "Delete User" });
    } else {
      return res.json({ Result: "Format Id Incorrecto" });
    }
  }

  async changePassword(req: Request, res: Response) {
    const id = req.params.id;
    const { c_password, password, r_password } = req.body;

    try {
      const userDB = await userModel.findById(id);
      //Verificar que el usuario exista por el id
      if (!userDB) {
        return res.status(400).json({ message: "Usuario no existe" });
      }

      //Verificar la confirmacion del password
      if (password !== r_password) {
        return res.status(400).json({ message: "No son iguales los password" });
      }

      //Comparar Password
      const validarPassword = bcrypt.compareSync(c_password, userDB.password);
      if (!validarPassword) {
        return res
          .status(404)
          .json({ message: "La contraseña actual es incorrecta" });
      }

      //Encriptar el password
      const salt = bcrypt.genSaltSync(10);
      userDB.password = bcrypt.hashSync(password, salt);

      //Guardar el nuevo password en la BD
      await userDB.save();

      return res.json({ message: "Ok" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error inesperado... revisar logs" });
    }
  }
}

export default UserController;
