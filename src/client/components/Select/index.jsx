import "./Select.css";

import { languages } from "../../../server/core/languages.js";

function Select({ value, onChange, title }) {
  return (
    <select
      name="select"
      className="select"
      title={title}
      value={value}
      onChange={onChange}
    >
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
