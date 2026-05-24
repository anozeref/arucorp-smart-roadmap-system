import { useContext } from "react";

import { ItemContext } from "../context/ItemContext";

export default function useItems() {
  const context = useContext(ItemContext);

  if (!context) {
    throw new Error(
      "useItems must be used within ItemProvider"
    );
  }

  return context;
}