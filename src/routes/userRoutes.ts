import { Router } from "express";
import Container from "typedi";

import UserController from "../controllers/userController";
import { valitor } from "../middlewares/validator-jwt";

const userController = Container.get(UserController);

const router = Router();

router.get("/all", valitor, (req, res) => {
  userController.getAllUsers(res);
});

router.get("/one/:id", (req, res) => {
  userController.getUser(req, res);
});

router.post("/create", (req, res) => {
  userController.createUser(req, res);
});

router.put("/update/:id", (req, res) => {
  userController.updateUser(req, res);
});

router.delete("/delete/:id", valitor, (req, res) => {
  userController.deleteUser(req, res);
});

router.post("/changePassword/:id", valitor, (req, res) => {
  userController.changePassword(req, res);
});

export default router;
