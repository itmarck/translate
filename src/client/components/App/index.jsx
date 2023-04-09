import Button from "../Button";
import Card from "../Card";
import Input from "../Input";
import Select from "../Select";

import "./App.css";

function App() {
  return (
    <main>
      <h1>
        To <span className="text-gradient">Translate</span>
      </h1>
      <br />
      <Select title="Languages list" />
      <Card>
        <Input placeholder="Enter text to translate" />
      </Card>

      <Button content="Translate" />
    </main>
  );
}

export default App;
