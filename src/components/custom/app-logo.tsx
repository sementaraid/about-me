import Image from "next/image";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface AppLogoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  src: string;
}

export function AppLogo (props : AppLogoProps) {
  const {src} = props;

  return(
    <div className="">
      <Link href={"/"}>
        <Image src={src} width={40} height={40} alt=""/>
      </Link>
    </div>
  ); 
}