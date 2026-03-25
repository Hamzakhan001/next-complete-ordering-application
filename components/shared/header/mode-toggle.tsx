'use client';

import { useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-accent transition-colors">
          {theme === 'system' ? <SunMoon size={20} /> : theme === 'dark' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>
          System
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle