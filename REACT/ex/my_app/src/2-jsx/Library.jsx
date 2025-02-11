import React from "react";
import Book from "./Book";

function Library() {
  return (
    <div>
      <Book name="리액트 기초" price={3000} />
      <Book name="노드 기초" price={4000} />
      <Book name="AWS 기초" price={6000} />
    </div>
  );
}

export default Library;
