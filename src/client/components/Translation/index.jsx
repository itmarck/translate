import { useState } from "react";
import Button from "../Button";
import Card from "../Card";
import Input from "../Input";
import Select from "../Select";

import "./Translation.css";

async function translate(language, text) {
  const response = await fetch("/api/translate", {
    method: "POST",
    body: JSON.stringify({ language, text }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    return "Something went wrong";
  }

  const body = await response.json();
  return body && body.message;
}

function Translation() {
  const [language, setLanguage] = useState("Español");
  const [content, setContent] = useState("");
  const [translation, setTranslation] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    const message = await translate(language, content);
    setTranslation(message);
  }

  return (
    <form onSubmit={onSubmit}>
      <Select
        value={language}
        title="Languages list"
        onChange={({ target: { value } }) => setLanguage(value)}
      />

      <Card>
        <Input
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
          placeholder="Enter text to translate"
        />
      </Card>

      <div className="to-right">
        <Button type="submit" content="Translate" />
      </div>

      <p className="display">{translation}</p>
    </form>
  );
}

export default Translation;
