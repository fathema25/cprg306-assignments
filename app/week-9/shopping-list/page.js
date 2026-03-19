"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Checking if the user is logged in; if not, redirect to the landing page
  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .replace(/[^\w\s]/gi, '')
      .trim();

    setSelectedItemName(cleanedName);
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // If the user isn't logged in, show a redirecting message instead of the app
  if (!user) {
    return (
      <main className="min-h-screen bg-black p-4 flex items-center justify-center">
        <p className="text-white">Redirecting to login...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black p-4 flex flex-col md:flex-row gap-8 items-start justify-center">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white text-left">Shopping List</h1>
          <button
            onClick={handleLogout}
            className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition"
          >
            Logout
          </button>
        </div>

        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="w-full max-w-md">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}