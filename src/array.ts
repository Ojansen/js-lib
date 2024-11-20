export function uniqueArray<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function deepFlatten<T>(array: (T | T[])[]): T[] {
  return array.reduce<T[]>((flat, item) => {
    return flat.concat(Array.isArray(item) ? deepFlatten(item) : item);
  }, []);
}

export function chunkArray<T>(array: T[], size: number): T[][] {
  if (size <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export function matchElements<
  T extends Record<string, unknown>,
  K extends keyof T,
>(items: T[K][], objects: T[], key: K): T[] {
  const uniqueItems = new Set(items); // Remove duplicate elements from the input array
  const uniqueObjects: T[] = [];

  const seen = new Set<T[K]>(); // Track seen values to ensure uniqueness in the output

  for (const obj of objects) {
    const value = obj[key];
    if (uniqueItems.has(value) && !seen.has(value)) {
      uniqueObjects.push(obj);
      seen.add(value);
    }
  }

  return uniqueObjects;
}
