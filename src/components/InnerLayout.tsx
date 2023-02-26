import { css } from "@emotion/css"

export function InnerLayout(props: {
  children: React.ReactNode
}) {
  return (
    <div
      className={css`
       margin-left:auto;
      margin-right:auto;
      max-width:1200px;
    background-color:rgb(28,25,23);
    padding:20px;
    border-radius:12px;
      `}
    >
      {props.children}
    </div>
  )
}