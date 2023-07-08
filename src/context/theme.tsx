import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "react-use";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

/**
 * PROVIDED INITIAL THEME
 * {theme, onChange}
 */

interface I_Initialtheme {
  theme: 'light' | 'dark' | undefined,
  toggleTheme: () => void
}

type IContext = I_Initialtheme | undefined

const ThemeContext = createContext<IContext>(undefined)

export function ThemeProvider({children}:{children: ReactNode}){
  const [theme, updateTheme] = useLocalStorage<I_Initialtheme['theme']>("sunar-theme", "light")

  const handleUpdateTheme = () => {
    let newTheme: I_Initialtheme['theme'] = theme === 'light' ? 'dark' : 'light'
    updateTheme(newTheme)
  }

  useIsomorphicLayoutEffect(()=>{
    if(theme === 'dark') document.querySelector('body')!.classList.add("dark")
    if(theme === 'light') document.querySelector('body')!.classList.remove("dark")
  },[theme])

  return (
    <ThemeContext.Provider value={{
      theme: theme,
      toggleTheme: handleUpdateTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if(context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return [
    context.theme, 
    context.toggleTheme
  ] as const
}