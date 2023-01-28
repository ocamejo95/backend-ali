import { Request, Response, Router } from "express";
import { check } from "express-validator";
import Container from "typedi";

import { AuthController } from "../controllers/authController";
import { valitor } from "../middlewares/validator-jwt";

const autController = Container.get(AuthController);

const router = Router();

router.post(
  "/login",
  check("password", "El password es obligatorio").not().isEmpty(),
  check("email", "El email es obligatorio").isEmail(),
  (req: Request, res: Response) => {
    autController.login(req, res);
  }
);

router.get("/renew", valitor, (req: Request, res: Response) => {
  autController.renewToken(req, res);
});

export default router;
