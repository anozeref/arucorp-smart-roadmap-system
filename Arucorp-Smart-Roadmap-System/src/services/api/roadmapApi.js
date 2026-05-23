const BASE_URL =
  "http://localhost:3000/roadmap";

export async function getRoadmap() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(
      "Failed to fetch roadmap"
    );
  }

  return response.json();
}

export async function saveRoadmap(
  roadmap
) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify(roadmap),
  });

  if (!response.ok) {
    throw new Error(
      "Failed to save roadmap"
    );
  }

  return response.json();
}

export async function clearRoadmap() {
  const roadmap = await getRoadmap();

  const deleteRequests = roadmap.map(
    (item) =>
      fetch(
        `${BASE_URL}/${item.id}`,
        {
          method: "DELETE",
        }
      )
  );

  await Promise.all(deleteRequests);

  return true;
}