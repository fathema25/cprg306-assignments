"use client";

import { useState } from "react";

const initialState = {
  name: "",
  quantity: 1,
  category: "produce",
};

// Programmatic category list
const categoryOptions = ["produce", "dairy", "bakery", "meat", "frozen", "canned goods", "dry goods", "beverages", "snacks", "household", "other"];

export default function NewItem({ onAddItem }) {
  const [item, setItem] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setItem((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 9);

    onAddItem({ ...item, id });
    setItem(initialState);
  };

  return (
    <div className="bg-white p-6 rounded-lg mb-6 text-black shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="item-name" className="block mb-1 font-semibold">
            Item Name
          </label>
          <input
            id="item-name"
            name="name"
            type="text"
            placeholder="e.g., Milk, 4L 🥛"
            required
            className="w-full p-2 border rounded-md"
            value={item.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="item-quantity" className="block mb-1 font-semibold">
              Quantity
            </label>
            <input
              id="item-quantity"
              name="quantity"
              type="number"
              min="1"
              max="99"
              required
              className="w-full p-2 border rounded-md"
              value={item.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="flex-1">
            <label htmlFor="item-category" className="block mb-1 font-semibold">
              Category
            </label>
            <select
              id="item-category"
              name="category"
              className="w-full p-2 border rounded-md bg-white capitalize"
              value={item.category}
              onChange={handleChange}
            >
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors"
        >
          +
        </button>
      </form>
    </div>
  );
}