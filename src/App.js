import React, { useState, useEffect } from "react";

const App = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <div className="flex flex-col h-screen justify-end">
        <div className="container h-12 w-1/4 mx-auto bg-emerald-100 mb-16 rounded-full flex items-center justify-center self-start">
          <button
            className="h-10 w-20 rounded-3xl mx-1 bg-red-400"
            onClick={() => setColor("red")}
          >
            {"Red"}
          </button>
          <button
            className="h-10 w-20 rounded-3xl mx-1 bg-green-400"
            onClick={() => setColor("green")}
          >
            {"Green"}
          </button>
          <button
            className="h-10 w-20 rounded-3xl mx-1 bg-blue-400"
            onClick={() => setColor("blue")}
          >
            {"Blue"}
          </button>
          <button
            className="h-10 w-20 rounded-3xl mx-1 bg-yellow-400"
            onClick={() => setColor("yellow")}
          >
            {"Yellow"}
          </button>
          <button
            className="h-10 w-20 rounded-3xl mx-1 bg-purple-400"
            onClick={() => setColor("purple")}
          >
            {"Purple"}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;