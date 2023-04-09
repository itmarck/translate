import Card from "../Card";
import Input from "../Input";

import "./App.css";

function App() {
  return (
    <main>
      <h1>
        To <span className="text-gradient">Translate</span>
      </h1>
      <Card>
        <Input placeholder="Enter text to translate" />
      </Card>
    </main>
  );
}

export default App;
