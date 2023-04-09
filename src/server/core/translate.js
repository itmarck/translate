import openai from "../vendors/openai.js";
import { languages } from "./languages.js";

async function createChatCompletion(content) {
  const { status, data } = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content }],
  });

  if (status !== 200) {
    return "";
  }

  const answer = data.choices.at(0);
  const translation = answer && answer.message;

  return translation && translation.content;
}

/**
 * Translate given text into selected language.
 *
 * @param {string} content Text to be translated.
 * @param {object} options Translation options.
 * @param {string} options.language The target language.
 */
export async function translate(content, options = {}) {
  const defaultLanguage = languages.at(0);
  const language = options.language || defaultLanguage;

  if (!languages.includes(language)) {
    return "Language not supported";
  }

  const prompt = `Translate the following text into ${language}:\n${content}`;
  const translation = await createChatCompletion(prompt);

  return translation;
}
