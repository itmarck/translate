import "./Select.css";

import { languages } from "../../../server/core/languages.js";

function Select({ title }) {
  return (
    <select name="select" className="select" title={title}>
      {languages.map((language) => {
        return (
          <option key={language} value={language}>
            {language}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
