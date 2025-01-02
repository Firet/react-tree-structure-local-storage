import { useState, useEffect } from 'react';

interface ILocalStorageItem<T> {
  key: string;
  initialValue: T;
}

function useLocalStorage<T>(item: ILocalStorageItem<T>): [T, (newValue: T) => void] {
  if (typeof window === 'undefined') {
    return [item.initialValue, () => { }];
  }

  const [storedValue, setStoredValue] = useState<T>(() => {
    const storedItem = window.localStorage.getItem(item.key);
    return storedItem ? JSON.parse(storedItem) : item.initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(item.key, JSON.stringify(storedValue));
  }, [storedValue, item.key]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;