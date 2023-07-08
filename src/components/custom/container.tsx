import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react"

type ContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Container (props: ContainerProps){
  const { className, children, ...otherProps } = props;
  return(
    <div className={clsx("md:flex md:flex-row p-[15px] max-w-screen-lg", className)} {...otherProps}>
      {children}
    </div>
  );
}