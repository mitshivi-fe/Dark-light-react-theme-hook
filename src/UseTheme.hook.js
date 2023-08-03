import { useState } from 'react';
export default function useTheme(themeName = '') {
  const [theme, setTheme] = useState(themeName ? themeName : 'light');

  function toggleTheme() {
    setTheme((prev) => {
      return prev === 'light' ? 'dark' : 'light';
    });
    console.log('currTheme::', theme);
  }

  return [theme, toggleTheme];
}
