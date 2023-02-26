import { css, cx } from "@emotion/css"
import { themeColor } from "../colors"

export function H1(props: {
  text: string;
  className?: string;
}) {
  const front = props.text.slice(0, 1)
  const end = props.text.slice(1)
  return (
    <div className={props.className}>
      <span
        className={cx(
          fontStyle,
          css`
          color:${themeColor};`
        )}
      >
        {front}
      </span>
      <span className={cx(
        fontStyle,

      )}>
        {end}
      </span>
    </div>
  )
}
const fontStyle = css`
font-size:30px;
      margin-bottom:16px;
      font-weight:bold;
      color:#ffffff
      `