import { useState, useEffect, useCallback } from 'react';

interface ILocalStorageItem<T> {
  key: string;
  initialValue: T;
}

function useLocalStorage<T>(item: ILocalStorageItem<T>): [T, (newValue: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return item.initialValue;
    }

    const storedItem = window.localStorage.getItem(item.key);
    return storedItem ? JSON.parse(storedItem) : item.initialValue;
  });

  const setValue = useCallback(
    (newValue: T) => {
      if (typeof window !== 'undefined') {
        setStoredValue(newValue);
      }
    },
    []
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(item.key, JSON.stringify(storedValue));
    }
  }, [storedValue, item.key]);

  return [storedValue, setValue];
}

export default useLocalStorage;