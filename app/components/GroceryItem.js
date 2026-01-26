export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="bg-[#5B3E31] text-white p-2 mb-3 rounded-sm w-[35rem] border border-black">
      <div className="text-base"> {name}</div>
      <div className="text-base">Quantity: {quantity}</div>
      <div className="text-base">Category: {category}</div>
    </li>
  );
}
