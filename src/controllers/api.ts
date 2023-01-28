import { Request, Response, Router } from "express";

import CoursesData from "../../data/courses.json";

const router = Router();

router.get("/info", (req: Request, res: Response) => {
  return res.status(200).send(CoursesData);
});

export default router;
