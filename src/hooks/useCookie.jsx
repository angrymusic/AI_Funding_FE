import { useState } from 'react';
import { getItem, setItem } from '../utils/cookies';

export default function useCookie(key, defaultValue) {
  const getCookie = () => getItem(key) || defaultValue;
  const [cookie, setCookie] = useState(getCookie());
  const updateCookie = (value, numberOfDays) => {
    setCookie(value);
    setItem(key, value, numberOfDays);
  };
  return [cookie, updateCookie];
}
