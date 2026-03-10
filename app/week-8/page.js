"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {

    const cleanedName = itemName
      .split(",")[0]
      .replace(/[^\w\s]/gi, '')
      .trim();

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-black p-4 flex flex-col md:flex-row gap-8 items-start justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-left">Shopping List + Meal Ideas</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="w-full max-w-md">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}