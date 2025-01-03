/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import useLocalStorage from "./hooks/useLocalStorage";
import { useState } from "react";

export default function Home() {
  // Get the value from local storage if it exists
  const [value, setValue] = useLocalStorage("favoriteNumber", "");

  // Set the value received from the local storage to a local state
  const [favoriteNumber, setFavoriteNumber] = useState(value);

  // When user submits the form, save the favorite number to the local storage
  const saveToLocalStorage = (e: any) => {
    e.preventDefault();
    setValue(favoriteNumber);
  };

  let numberLocalStorage;
  if (typeof window !== "undefined" && window.localStorage) {
    numberLocalStorage = localStorage.getItem('favoriteNumber');
  }

  return (
    <div>
      <label htmlFor="number">Your favorite number</label>
      <form onSubmit={saveToLocalStorage}>
        <input
          id="number"
          value={favoriteNumber}
          onChange={(e) => setFavoriteNumber(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>

      <p> number in local storage: {numberLocalStorage}</p>
    </div>
  );
}