"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-md shadow-md max-w-md w-full mx-auto flex flex-col gap-4 text-black"
    >
      {/*Name Field*/}
      <div className="flex flex-col">
        <label className="font-medium mb-1">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g., Milk, 4L 🥛"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
        />
      </div>

      {/*Quantity and Category Row*/}
      <div className="flex gap-4">

        {/*Quantity Field*/}
        <div className="flex flex-col flex-1">
          <label className="font-medium mb-1">Quantity (1-20)</label>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>

        {/*Category Field*/}
        <div className="flex flex-col flex-1">
          <label className="font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
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

      {/*Submit Button*/}
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md text-2xl mt-2"
      >
        +
      </button>
    </form>
  );
}