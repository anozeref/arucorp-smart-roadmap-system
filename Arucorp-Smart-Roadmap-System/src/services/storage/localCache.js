const STORAGE_KEYS = {
  ITEMS: "procurement_items",
  ROADMAP: "procurement_roadmap",
  PROJECT: "procurement_project",
};

export function saveToStorage(
  key,
  value
) {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

export function getFromStorage(key) {
  const data = localStorage.getItem(key);

  if (!data) return null;

  return JSON.parse(data);
}

export function removeFromStorage(
  key
) {
  localStorage.removeItem(key);
}

export function clearAllStorage() {
  Object.values(STORAGE_KEYS).forEach(
    (key) => {
      localStorage.removeItem(key);
    }
  );
}

export { STORAGE_KEYS };