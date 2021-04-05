import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React",
    content: "React is front end js framework",
  },
  {
    title: "Czy JP2 GMD?",
    content: "Jeszcze jak",
  },
  {
    title: "Papiezowa godzina?",
    content: "21;37",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },

  {
    label: "The Color Green",
    value: "green",
  },

  {
    label: "A shade of Blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
