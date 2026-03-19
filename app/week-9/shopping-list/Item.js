"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="border border-white p-3 bg-black w-full cursor-pointer hover:bg-gray-800 transition-colors m-2"
    >
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <div className="text-sm text-white">
        Quantity: {quantity}
      </div>
      <div className="text-sm text-white">
        Category: {category}
      </div>
    </li>
  );
}