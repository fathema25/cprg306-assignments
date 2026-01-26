import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#C6A68F] pt-3 px-6">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-3 text-black text-left w-[35rem]">
          Shopping List
        </h1>

        <GroceryItemList />
      </div>
    </main>
  );
}
