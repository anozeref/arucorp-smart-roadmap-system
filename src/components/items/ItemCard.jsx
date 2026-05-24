import { useEffect, useMemo, useState } from "react";

import ItemStatusBadge from "./ItemStatusBadge";
import {
  getItemDependencies,
  getOutstandingDependencies,
  isItemLocked,
  validateDependencies,
} from "../../utils/dependencyUtils";

export default function ItemCard({
  item,
  allItems = [],
  onDelete,
  onTogglePurchased,
  onEdit,
  onUpdateItem,
}) {
  const [showDependencyEditor, setShowDependencyEditor] =
    useState(false);
  const [dependencies, setDependencies] =
    useState(getItemDependencies(item));
  const [dependencyError, setDependencyError] =
    useState("");

  useEffect(() => {
    setDependencies(getItemDependencies(item));
    setDependencyError("");
  }, [item]);

  const outstandingDependencies = useMemo(
    () =>
      getOutstandingDependencies(item, allItems).map(
        (dependencyId) =>
          allItems.find((entry) => entry.id === dependencyId)
      ),
    [item, allItems]
  );

  const locked = isItemLocked(item, allItems);

  function toggleDependency(id) {
    setDependencies((current) => {
      if (current.includes(id)) {
        return current.filter((dependency) => dependency !== id);
      }

      return [...current, id];
    });
  }

  async function handleSaveDependencies() {
    const updatedItem = {
      ...item,
      dependencies,
    };

    if (!validateDependencies(updatedItem, allItems)) {
      setDependencyError(
        "Ketergantungan tidak valid; periksa aliran atau item yang sama."
      );
      return;
    }

    setDependencyError("");
    await onUpdateItem?.(item.id, updatedItem);
    setShowDependencyEditor(false);
  }

  if (!item) return null;

  return (
    <div className="item-card">
      <div className="item-card-top">
        <div>
          <h3>{item.name}</h3>

          <p>
            Rp {item.price.toLocaleString("id-ID")}
          </p>
        </div>

        <ItemStatusBadge
          purchased={item.purchased}
          locked={locked}
        />
      </div>

      <div className="item-card-middle">
        <p>
          Prioritas:
          <strong> {item.priority}</strong>
        </p>

        {outstandingDependencies.length > 0 ? (
          <p className="item-dependencies-warning">
            Terkunci hingga:
            <strong>
              {outstandingDependencies
                .map((dependency) => dependency?.name)
                .filter(Boolean)
                .join(", ")}
            </strong>
          </p>
        ) : null}
      </div>

      <div className="item-card-actions">
        <button
          className="edit-button"
          onClick={() => onEdit?.(item)}
        >
          Ubah
        </button>

        <button
          className="toggle-button"
          onClick={() => onTogglePurchased(item.id)}
          disabled={locked && !item.purchased}
          title={
            locked && !item.purchased
              ? "Item terkunci sampai ketergantungan selesai"
              : undefined
          }
        >
          {item.purchased
            ? "Tandai Belum"
            : "Tandai Terbeli"}
        </button>

        <button
          className="delete-button"
          onClick={() =>
            onDelete(item.id)
          }
        >
          Hapus
        </button>
      </div>

      <div className="item-card-dependencies">
        <button
          className="dependency-button"
          type="button"
          onClick={() =>
            setShowDependencyEditor(
              (value) => !value
            )
          }
        >
          {showDependencyEditor
            ? "Tutup Ketergantungan"
            : "Atur Ketergantungan"}
        </button>

        {showDependencyEditor ? (
          <div className="dependency-editor">
            <p>Pilih item yang menjadi prasyarat:</p>

            <div className="dependency-grid">
              {allItems
                .filter((entry) => entry.id !== item.id)
                .map((entry) => (
                  <label
                    key={entry.id}
                    className={`dependency-card ${dependencies.includes(entry.id) ? "selected" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={dependencies.includes(entry.id)}
                      onChange={() => toggleDependency(entry.id)}
                    />
                    <span>{entry.name}</span>
                  </label>
                ))}
            </div>

            {dependencyError ? (
              <p className="dependency-error">
                {dependencyError}
              </p>
            ) : null}

            <button
              className="button button-primary"
              type="button"
              onClick={handleSaveDependencies}
            >
              Simpan Ketergantungan
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}