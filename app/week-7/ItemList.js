"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex items-center gap-2 mb-4 text-white">
        <span className="text-gray-400">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-1 rounded-sm border transition-colors ${sortBy === "name" ? "bg-white text-black font-bold border-white" : "bg-blue-600 text-white border-blue-600"
            }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-1 rounded-sm border transition-colors ${sortBy === "category" ? "bg-white text-black font-bold border-white" : "bg-blue-600 text-white border-blue-600"
            }`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}