import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  createItem,
  deleteItem as deleteItemApi,
  getItems,
  updateItem as updateItemApi,
} from "../services/api/itemApi";

export const ItemContext =
  createContext();

export function ItemProvider({
  children,
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    try {
      const data = await getItems();

      setItems(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addItem(item) {
    try {
      const createdItem =
        await createItem(item);

      setItems((prev) => [
        ...prev,
        createdItem,
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteItem(id) {
    try {
      await deleteItemApi(id);

      setItems((prev) =>
        prev.filter(
          (item) => item.id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function togglePurchased(
    id
  ) {
    try {
      const targetItem = items.find(
        (item) => item.id === id
      );

      if (!targetItem) return;

      const updatedItem = {
        ...targetItem,
        purchased:
          !targetItem.purchased,
      };

      await updateItemApi(
        id,
        updatedItem
      );

      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? updatedItem
            : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function updateItem(
    id,
    updatedItem
  ) {
    try {
      const savedItem = await updateItemApi(
        id,
        updatedItem
      );

      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? savedItem
            : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  const purchasedItems =
    items.filter(
      (item) => item.purchased
    );

  const pendingItems = items.filter(
    (item) => !item.purchased
  );

  return (
    <ItemContext.Provider
      value={{
        items,
        purchasedItems,
        pendingItems,
        addItem,
        deleteItem,
        togglePurchased,
        updateItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}