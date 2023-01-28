import { Router } from "express";
import Container from "typedi";

import UserController from "../controllers/userController";
import { valitor } from "../middlewares/validator-jwt";

const userController = Container.get(UserController);

const router = Router();

router.get("/user", valitor, (req, res) => {
  userController.getAllUsers(res);
});

router.get("/user/:id", (req, res) => {
  userController.getUser(req, res);
});

router.post("/user", (req, res) => {
  userController.createUser(req, res);
});

router.put("/user/:id", (req, res) => {
  userController.updateUser(req, res);
});

router.delete("/user/:id", valitor, (req, res) => {
  userController.deleteUser(req, res);
});

router.post("/user/changePassword/:id", valitor, (req, res) => {
  userController.changePassword(req, res);
});

export default router;
