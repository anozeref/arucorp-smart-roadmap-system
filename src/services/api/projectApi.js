const BASE_URL =
  "http://localhost:3000/project";

export async function getProject() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(
      "Failed to fetch project data"
    );
  }

  return response.json();
}

export async function updateProject(
  updatedProject
) {
  const response = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify(
      updatedProject
    ),
  });

  if (!response.ok) {
    throw new Error(
      "Failed to update project"
    );
  }

  return response.json();
}