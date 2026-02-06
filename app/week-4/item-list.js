import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  //Group items by category
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedItems).sort().map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-bold mb-2 capitalize">{category}</h2>
          <ul className="list-disc pl-5">
            {groupedItems[category].map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
