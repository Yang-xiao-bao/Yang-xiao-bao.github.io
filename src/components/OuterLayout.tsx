import { css } from "@emotion/css"

export function OuterLayout(props: {
  children: React.ReactNode
}) {
  return (
    <div className={css`
    height:100%;
    min-height:100vh;
    background-color:black;
    padding:30px 0px;
    @media (max-width:500px) {
      padding:10px;
    }
    `}>
      {props.children}
    </div>
  )
}