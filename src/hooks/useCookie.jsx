import { useState } from 'react';

const getItem = (key) => {
  const cookies = document.cookie.split('; ');
  return cookies.reduce((total, currentCookie) => {
    const [storedKey, storedValue] = currentCookie.split('=');
    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, '');
};

const setItem = (key, value, numberOfDays) => {
  const now = new Date();
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);
  document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`;
};

export default function useCookie(key, defaultValue) {
  const getCookie = () => getItem(key) || defaultValue;
  const [cookie, setCookie] = useState(getCookie());
  const updateCookie = (value, numberOfDays) => {
    setCookie(value);
    setItem(key, value, numberOfDays);
  };
  return [cookie, updateCookie];
}
