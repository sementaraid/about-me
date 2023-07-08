import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Container } from "./container";

type FooterProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Footer(props: FooterProps){
  return(
    <footer className="border-t border-[#ffd95a3d]">
      <Container className="m-auto">
        <ul className="block ml-auto">
          <li className="text-app-typography text-base font-normal">Built with love using <strong>NextJs</strong></li>
        </ul>
      </Container>
    </footer>
  );
}