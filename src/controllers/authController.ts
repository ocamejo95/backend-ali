import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Service } from "typedi";

import { generarJWT } from "../helpers/jwt";
import { userModel } from "../models/user";
import { authService } from "../services/authService";


   declare module "express-serve-static-core" {
       interface Request {
           uid: any;
       }
    }

@Service()
export class AuthController {
  constructor(private readonly authService: authService) {
  }

  async login(req: Request, res: Response) {
    const { password, email } = req.body;

    //Capturo los errores del check
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errors: errores.mapped() });
    }

        try {

    //Verificar emial
    const userDB = await userModel.findOne({ email });
    if (!userDB) {
      return res.status(404).json({ message: "User invalid!" });
    }

    //Verifiar password
    const validarPassword = bcrypt.compareSync(password, userDB.password);

    if (!validarPassword) {
      return res.status(404).json({ message: "User invalid!" });
    }

    //Generar Token - JWT
    const token = await generarJWT(userDB.id);

    res.json({ token });        

    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error inesperado... revisar logs'});
    }

  }

  async renewToken(req: Request, res: Response) {

    const uid = req.uid;

    //Generar token-jwt
    const token = await generarJWT(uid.uid);


    //Obtener usuario por uid
    const usuario = await userModel.findById(uid.uid);
 

    res.status(200).json({message: 'New token', usuario, token});
  }
}


