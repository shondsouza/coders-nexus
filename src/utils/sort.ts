/**
 * Sort items by date (newest first)
 */
export function sortByDate<T extends { data: { date: Date | string } }>(
  items: T[]
): T[] {
  return items.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });
}

/**
 * Sort items by date (oldest first)
 */
export function sortByDateAsc<T extends { data: { date: Date | string } }>(
  items: T[]
): T[] {
  return items.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateA - dateB;
  });
}

/**
 * Sort items alphabetically by title
 */
export function sortByTitle<T extends { data: { title: string } }>(
  items: T[]
): T[] {
  return items.sort((a, b) =>
    a.data.title.localeCompare(b.data.title)
  );
}

/**
 * Filter items by featured status
 */
export function filterFeatured<T extends { data: { featured?: boolean } }>(
  items: T[]
): T[] {
  return items.filter((item) => item.data.featured === true);
}

/**
 * Get the latest N items
 */
export function getLatest<T>(items: T[], count: number = 3): T[] {
  return items.slice(0, count);
}