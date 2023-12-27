import React from "react";
import Slider from "./Slider";

const App: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      imageUrl: "../sec1.png",
    },
    {
      id: 2,
      title: "Slide 2",
      imageUrl: "../sec2.png",
    },
    {
      id: 3,
      title: "Slide 3",
      imageUrl: "../sec3.png",
    },
  ];

  return (
    <div className="App">
      <Slider slides={slides} />
    </div>
  );
};

export default App;
