export default function Item({ name, quantity}) {
  return (
    <li className="mb-1">
      {name}{quantity != null && <span>(Quantity: {quantity})</span>}
    </li>
  );
}
