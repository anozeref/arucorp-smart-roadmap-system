import { useEffect, useRef, useState } from "react";
import "./items.css";

import { Package } from "lucide-react";
import ItemForm from "../../components/forms/ItemForm";
import ItemList from "../../components/items/ItemList";

import useItems from "../../hooks/useItems";

export default function Items() {
  const {
    items,
    addItem,
    deleteItem,
    togglePurchased,
    updateItem,
  } = useItems();

  const [selectedItem, setSelectedItem] = useState(null);
  const [isFloating, setIsFloating] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const [floatingStyle, setFloatingStyle] = useState({});
  const wrapperRef = useRef(null);

  function updateFloatingState() {
    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    setPlaceholderHeight(rect.height);

    const topHidden = rect.top < 24;
    const bottomHidden = rect.bottom > window.innerHeight - 24;
    const shouldFloat = topHidden || bottomHidden;

    setIsFloating(shouldFloat);

    if (shouldFloat) {
      setFloatingStyle({
        top: "24px",
        left: `${rect.left}px`,
        width: `${rect.width}px`,
      });
    } else {
      setFloatingStyle({});
    }
  }

  useEffect(() => {
    updateFloatingState();

    window.addEventListener("scroll", updateFloatingState, {
      passive: true,
    });
    window.addEventListener("resize", updateFloatingState);

    return () => {
      window.removeEventListener("scroll", updateFloatingState);
      window.removeEventListener("resize", updateFloatingState);
    };
  }, []);

  useEffect(() => {
    updateFloatingState();
  }, [selectedItem]);

  function handleEdit(item) {
    setSelectedItem(item);
  }

  function handleCancelEdit() {
    setSelectedItem(null);
  }

  async function handleUpdateItem(item) {
    await updateItem(item.id, item);
    setSelectedItem(null);
  }

  return (
    <div className="items-page">
      <section className="items-header">
        <div className="page-header-inner">
          <div className="page-header-icon">
            <Package size={24} />
          </div>
          <div>
            <h1>Item Pengadaan</h1>
            <p>
              Kelola target pengadaan, prioritas, dan harga item dengan jelas.
            </p>
          </div>
        </div>
      </section>

      <section className="items-content">
        <div
          className={`items-form-wrapper ${
            isFloating ? "floating" : ""
          }`}
          ref={wrapperRef}
          style={
            isFloating
              ? { minHeight: `${placeholderHeight}px` }
              : undefined
          }
        >
          <div
            className={`items-form-inner ${
              isFloating ? "floating" : ""
            }`}
            style={isFloating ? floatingStyle : undefined}
          >
            <ItemForm
              onAddItem={addItem}
              onUpdateItem={handleUpdateItem}
              initialItem={selectedItem}
              onCancelEdit={handleCancelEdit}
            />
          </div>
        </div>

        <div className="items-list-wrapper">
          <ItemList
            items={items}
            onDelete={deleteItem}
            onTogglePurchased={togglePurchased}
            onEdit={handleEdit}
            onUpdateItem={updateItem}
          />
        </div>
      </section>
    </div>
  );
}