import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = (value) => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    const categoriesAdd = [newCategory, ...categories];
    setCategories(categoriesAdd);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </>
  );
};
