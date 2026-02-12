import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="bg-black min-h-screen p-6 flex justify-center">
      <div className="w-full max-w-md">

        <h1 className="text-2xl font-bold text-white mb-4">
          Week 5 — New Item
        </h1>

        <div className="w-full">
          <NewItem />
        </div>
      </div>
    </main>
  );
}