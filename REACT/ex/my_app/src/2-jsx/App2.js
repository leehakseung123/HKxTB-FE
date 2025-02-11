import React from "react";
import { Hello, Sum, DrinkMachine, Greeting } from "./Ex";

function App() {
  return (
    <div>
      <Hello name="홍길동" />
      <Sum num1="10" num2="20" />
      <DrinkMachine price="2000" />
      <Greeting hour={16} />
    </div>
  );
}

export default App;