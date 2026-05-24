const BASE_URL = "http://localhost:3000/items";

export async function getItems() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }

  return response.json();
}

export async function createItem(item) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error("Failed to create item");
  }

  return response.json();
}

export async function updateItem(id, updatedItem) {
  const response = await fetch(
    `${BASE_URL}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(updatedItem),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update item");
  }

  return response.json();
}

export async function deleteItem(id) {
  const response = await fetch(
    `${BASE_URL}/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete item");
  }

  return true;
}