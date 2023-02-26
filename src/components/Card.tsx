import { css, cx } from "@emotion/css";
import { ReactNode } from "react";

export function Card(props: {
  children: ReactNode;
  className?: string
}) {
  return <div
    className={cx(
      css`
  padding:40px;
  background-color:rgb(41,37,36);
  border-radius:16px;
  overflow:hidden;
  @media (max-width:600px){
    padding:10px;
  }
  `,
      props.className
    )}
  >
    {props.children}
  </div>
}