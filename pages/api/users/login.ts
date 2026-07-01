import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import bcrypt from "bcryptjs";
import { client } from "../../../lib/client";
import { signToken } from "../../../utilities/auth";

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      {
        email: req.body.email,
      }
    );

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = signToken({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token,
      });
    } else {
      res.status(401).send({ message: "Invalid_email_or_password" });
    }
  } catch (err: any) {
    const message =
      err?.message || "Unable to sign in because the server is not configured.";
    res.status(500).send({ message });
  }
});

export default handler;
