export function uniqueArray<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function deepFlatten<T>(array: (T | T[])[]): T[] {
  return array.reduce<T[]>((flat, item) => {
    return flat.concat(Array.isArray(item) ? deepFlatten(item) : item);
  }, []);
}

