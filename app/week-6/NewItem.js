"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  //handle submit//
  const handleSubmit = (e) => {
    e.preventDefault();


    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name, quantity, category,
    };

    //calling the prop//
    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="bg-white p-6 rounded-lg mb-6 text-black shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Item Name</label>
          <input
            type="text"
            placeholder="e.g., Milk, 4L 🥛"
            required
            className="w-full p-2 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block mb-1 font-semibold">Quantity</label>
            <input
              type="number"
              min="1"
              max="99"
              required
              className="w-full p-2 border rounded-md"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-semibold">Category</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
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