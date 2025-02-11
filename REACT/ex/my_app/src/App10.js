// App10.js
import React from "react";
import * as E from "./10-list/Ex";

function App() {
  return (
    <div>
      <E.TaskList />
      <E.ProductList />
      <E.DynamicList />
      <E.PostList />
      <E.PostsWithForm />
    </div>
  );
}

export default App;
