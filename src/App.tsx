import React from "react";
import { Widget } from "./components/Widget";

function App() {
  return (
    <>
      <header className="w-full h-16 bg-zinc-800"></header>
      <div className=" max-w-screen-xl mt-5  mx-auto p-5">
        <div className="p-5 w-full h-28 px-32 mb-5 flex items-center text-zinc-400 flex-grow-1 flex-shrink-1 flex-auto rounded-lg bg-zinc-800">
          <p>Experimente enviar um feedback de um bug na aplicação 🐛 </p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="w-80 h-80  flex-auto rounded-lg bg-zinc-800"></div>
          <div className="w-80 h-80  flex-auto rounded-lg bg-zinc-800"></div>
          <div className="w-80 h-80  flex-auto rounded-lg bg-zinc-800"></div>
          <div className="w-80 h-80  flex-auto rounded-lg bg-zinc-800"></div>
        </div>
      </div>
      <Widget />
    </>
  );
}

export default App;
