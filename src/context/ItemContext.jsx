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
import {
  validateDependencies,
  isItemLocked,
} from "../utils/dependencyUtils";

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
      const dependentItems = items.filter(
        (item) =>
          item.dependencies?.includes(id)
      );

      if (dependentItems.length > 0) {
        console.error(
          "Cannot delete item because other items depend on it."
        );
        return;
      }

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

      if (
        !targetItem.purchased &&
        isItemLocked(targetItem, items)
      ) {
        console.error(
          "Cannot mark item as purchased while dependencies are not met."
        );
        return;
      }

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
      const existingItem = items.find(
        (item) => item.id === id
      );

      if (!existingItem) return;

      const mergedItem = {
        ...existingItem,
        ...updatedItem,
      };

      if (!validateDependencies(mergedItem, items)) {
        console.error(
          "Invalid dependency flow detected. Update aborted."
        );
        return;
      }

      const savedItem = await updateItemApi(
        id,
        mergedItem
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