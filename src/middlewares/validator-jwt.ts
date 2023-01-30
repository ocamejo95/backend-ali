import jwt from "jsonwebtoken";

export const valitor = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Not exist a token in the request" });
  }

  try {
    const bearer = token.split(" ");

    const bearerToken = bearer[1];

    req.uid = jwt.verify(bearerToken, "PUTO");

    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is invalid" });
  }
};
