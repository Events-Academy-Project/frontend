import { useState } from "react";

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const getInitialValue = () => {
    const value = localStorage.getItem(key);
    return value !== null ? JSON.parse(value) :
      localStorage.setItem(key, JSON.stringify(initialValue));
  }

  const [data, setData] = useState(getInitialValue);

  const updateData = (newValue: any) => {
    setData((prevValue: any) => {
      const value = typeof newValue === 'function' ? newValue(prevValue) : newValue;
      localStorage.setItem(key, JSON.stringify(value));
      return value
    });
  };

  return [data, updateData]
}

export default useLocalStorage;

//useEffect(() => {
//  if (theme !== "dark") {
//    setTheme("dark");
//  }
//}, []); // how to change between localStorage values
