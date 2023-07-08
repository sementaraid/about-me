import React, { Fragment, useState } from 'react';
import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'; 
import { useTheme } from '@/context/theme';

export function ThemeSwitcher () {
  const [theme, toggleTheme] = useTheme();

  const handleThemeChange = () => {
    toggleTheme()
  }

  return (
    <Switch checked={theme === 'dark'} onChange={handleThemeChange} as={Fragment}>
      {({ checked }) => (
        <button className={`${checked ? 'bg-slate-700' : 'bg-slate-100'} relative inline-flex h-9 w-14 items-center rounded-full`}>
          <span className="sr-only">Theme switcher</span>
          <span
            className={`${
              checked ? 'translate-x-6' : 'translate-x-1'
            } flex items-center justify-center h-7 w-7 transform rounded-full bg-white transition`}
          >
            {checked ? <MoonIcon/> : <SunIcon/>}
          </span>
        </button>
      )}
    </Switch>
  )
};