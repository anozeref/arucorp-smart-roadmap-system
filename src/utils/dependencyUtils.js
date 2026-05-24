export function getItemDependencies(item) {
  return Array.isArray(item.dependencies)
    ? item.dependencies
    : [];
}

export function getDependencyById(id, items) {
  return items.find((item) => item.id === id);
}

export function getOutstandingDependencies(item, items) {
  return getItemDependencies(item).filter((dependencyId) => {
    const dependency = getDependencyById(dependencyId, items);
    return !dependency || !dependency.purchased;
  });
}

export function isItemLocked(item, items) {
  if (item.purchased) {
    return false;
  }

  return getItemDependencies(item).some((dependencyId) => {
    const dependency = getDependencyById(dependencyId, items);
    return !dependency || !dependency.purchased;
  });
}

export function hasDirectCircularDependency(item, items) {
  const dependencies = getItemDependencies(item);

  if (dependencies.includes(item.id)) {
    return true;
  }

  // Future: extend this helper to detect longer circular
  // dependency chains instead of only direct mutual references.

  return dependencies.some((dependencyId) => {
    const dependency = getDependencyById(dependencyId, items);

    if (!dependency) {
      return false;
    }

    return getItemDependencies(dependency).includes(item.id);
  });
}

export function validateDependencies(item, items) {
  const dependencies = getItemDependencies(item);
  const itemIds = new Set(items.map((entry) => entry.id));

  if (dependencies.includes(item.id)) {
    return false;
  }

  if (hasDirectCircularDependency(item, items)) {
    return false;
  }

  return dependencies.every(
    (dependencyId) => itemIds.has(dependencyId)
  );
}

export function getUnlockImpact(item, items) {
  return items.filter(
    (entry) =>
      !entry.purchased &&
      getItemDependencies(entry).includes(item.id)
  ).length;
}
