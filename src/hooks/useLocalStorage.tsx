import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: string) => {
  const getInitialValue = () => {
    const value = localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : localStorage.setItem(key, JSON.stringify(initialValue));
  }
  
  const [data, setData] = useState(getInitialValue);

  const updateData = (newValue: any) => {
    setData((prevValue: any) => {
      const value = typeof newValue === 'function' ? newValue(prevValue) : newValue;
      localStorage.setItem(key, JSON.stringify(value));
    });
  };
  
  return [data, updateData]
}

export default useLocalStorage;

