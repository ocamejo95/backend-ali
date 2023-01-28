import { Request, Response, Router } from "express";
import multer from "multer";
import Container from "typedi";

import { FileController } from "../controllers/fileController";
import { valitor } from "../middlewares/validator-jwt";

const fileControllers = Container.get(FileController);

const router = Router();

const upload = multer({ dest: "uploads/" });
const multipleUploads = upload.fields([
  { name: "sherpa" },
  { name: "companyBOB" },
  { name: "companyComm" },
]);

router.post(
  "/sherpa/:name",
  valitor,
  multipleUploads,
  (req: Request, res: Response) => {
    fileControllers.filesReport(res, req);
  }
);

export default router;
