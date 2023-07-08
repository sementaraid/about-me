import { DetailedHTMLProps, HTMLAttributes } from "react"

type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Header(props: HeaderProps){
  const {children, className} = props;
  return (
    <header className={`flex m-auto p-[15px] ${className}`} id="header">
      {children}
    </header>
  )
}