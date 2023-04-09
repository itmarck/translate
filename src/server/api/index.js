import { Router } from "express";
import { translate } from "../core/translate.js";

const router = Router();

router.post("/translate", async function (request, response) {
  const { body = {} } = request;
  const { language, text } = body;

  const message = await translate(text, { language });

  response.json({ message });
});

export default router;
