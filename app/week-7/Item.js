export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-white p-3 bg-black w-full">
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