import { css, cx } from "@emotion/css";
import { Link, useLocation } from "react-router-dom";
import { themeColor } from "../../colors";

export function Nav() {
  const location = useLocation()
  console.log(location)
  return (
    <div className={css`
    display:flex;
    align-items:center;
    margin-bottom:16px;
    `}>
      <div

        className={css`
      font-size:40px;
      color:#fff;
      font-weight:bold;
      `}>雍凡</div>
      <Link
        to="/"
        className={cx(
          css`
      margin-left:auto;
      color:rgba(168,162,158);
      font-size:16px;
      text-decoration:none;
      &:hover{
        color: #f5f5f4;
      }
      `,
          location.pathname === '/' ? highlight : ''
        )}
      >Home</Link>
      <Link
        to="/resume"
        className={cx(
          fontStyle,
          css`
      text-decoration:none;
        margin-left:16px;`,
          location.pathname === '/resume' ? highlight : ''
        )}
      >Resume</Link>
      <Link
        to="/github"
        className={cx(
          fontStyle,
          css`
      text-decoration:none;
        margin-left:16px;`,
          location.pathname === '/github' ? highlight : ''
        )}
      >Github</Link>
    </div>
  )
}

const fontStyle = css`
color:rgba(168,162,158);
      font-size:16px;
      &:hover{
        color: #f5f5f4;
      }
      `
const highlight = css`
color:${themeColor};
`