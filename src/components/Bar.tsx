import { css } from "@emotion/css";
import { themeColor } from "../colors";

export function Bar(props: {
  precent: number
}) {
  return (
    <div
      className={css`
    width:80%;
    height:10px;
    border-radius:4px;
    background-color:#44403a;
    overflow:hidden;
    `}
    >
      <div
        className={css`
      width:${props.precent}%;
      height:100%;
      background-color:${themeColor}
      `}
      >
      </div>
    </div>
  )
}