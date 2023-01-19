import jwt from "jsonwebtoken";

export const valitor = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({ message: "Not exist a token in the request" });
  }

  try {

    const id  = jwt.verify(token, "PUTO");
    req.uid = id;

    next();

  } catch (err) {
    return res.status(401).json({ message: "Token is invalid" });
  }
};
