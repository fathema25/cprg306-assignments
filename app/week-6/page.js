"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-black p-4 flex flex-col items-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-left">Shopping List</h1>

        {/* The Form */}
        <NewItem onAddItem={handleAddItem} />

        {/* The List */}
        <ItemList items={items} />
      </div>
    </main>
  );
}