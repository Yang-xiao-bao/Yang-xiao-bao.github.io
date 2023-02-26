import { css, cx } from "@emotion/css";
import { Icon } from "@mdi/react";
import { themeColor } from "../colors";

export function Button(props: {
  className?: string;
  path?: string;
  text: string;
  onClick?: () => void
}) {
  return (
    <button
      onClick={props.onClick}
      className={cx(
        css`
        border-radius:16px;
        padding:4px 12px;
        display:flex;
        justify-content:center;
        align-items:center;
        line-height:0;
        background-color:black;
        color:white;
        `,
        props.className
      )}
    >
      {props.path &&
        <Icon
          size={1}
          path={props.path}
        />
      }
      <span>{props.text}</span>
    </button>
  )
}