import Button from "../Button";
import Card from "../Card";
import Input from "../Input";
import Select from "../Select";

import "./Translation.css";

function Translation() {
  return (
    <div>
      <Select title="Languages list" />
      <Card>
        <Input placeholder="Enter text to translate" />
      </Card>

      <div className="to-right">
        <Button content="Translate" />
      </div>
    </div>
  );
}

export default Translation;
