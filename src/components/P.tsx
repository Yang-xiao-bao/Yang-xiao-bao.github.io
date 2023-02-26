import { css, cx } from "@emotion/css";
import { ReactNode } from "react";

export function P(props: {
  children: ReactNode;
  className: string
}) {
  return <p
    className={cx(
      css`
    color:#d1d5db;
        line-height:2;
    `,
      props.className
    )}
  >
    {props.children}
  </p>
}