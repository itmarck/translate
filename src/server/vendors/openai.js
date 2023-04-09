import { Configuration, OpenAIApi } from "openai";
import { envs } from "../../shared/environment.js";

const {
  openai: { organization, apiKey },
} = envs();

const configuration = new Configuration({ organization, apiKey });
const openai = new OpenAIApi(configuration);

export default openai;
