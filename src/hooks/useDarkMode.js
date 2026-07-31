import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('siap-desa-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('siap-desa-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('siap-desa-theme', 'light');
    }
  }, [isDark]);

  return [isDark, setIsDark];
}
