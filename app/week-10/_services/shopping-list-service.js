
import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

/**
 * Fetch all shopping list items for a specific user from Firestore
 * @param {string} userId - The UID of the logged-in user
 * @returns {Array} - Array of item objects with id, name, quantity, category
 */
export async function getItems(userId) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const snapshot = await getDocs(itemsRef);
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}

/**
 * Add a new item to a specific user's shopping list in Firestore
 * @param {string} userId - The UID of the logged-in user
 * @param {Object} item - The item object { name, quantity, category }
 * @returns {string} - The ID of the newly created Firestore document
 */
export async function addItem(userId, item) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
}