import { css } from "@emotion/css";
import { themeColor } from "../colors";
import { H1 } from "../components/H1";
import { InnerLayout } from "../components/InnerLayout";
import { OuterLayout } from "../components/OuterLayout";
import { Nav } from "./home/Nav";
import img from '../assets/粉色键盘.jpg'
type GithubItem = {
  title: string;
  path: string
}
const githubItems: GithubItem[] = [
  {
    title: '个人简历',
    path: 'https://github.com/Yang-xiao-bao/Yang-xiao-bao.github.io'
  },
  {
    title: '四点共线',
    path: 'https://github.com/Yang-xiao-bao/collinear-points'
  },
  {
    title: 'TodoList',
    path: 'https://github.com/Yang-xiao-bao/TodoListByVue'
  },
]

export function GithubPage() {
  return (
    <OuterLayout>
      <InnerLayout>
        <Nav />
        <div
          className={css`
         background-image:url('${img}');
         height:200px;
         position: relative;
         margin: 0 -20px;
         &::after {
          content: ' ';
          position: absolute;
          bottom: 0;
          left:0;
          right:0;
          height: 50px;
          background-image: linear-gradient(to top,rgb(28,25,23),transparent);
         }
         &::before {
          content: ' ';
          position: absolute;
          top: 0;
          left:0;
          right:0;
          height: 50px;
          background-image: linear-gradient(to bottom,rgb(28,25,23),transparent);
         }
         `}
        />
        <Github />
      </InnerLayout>
    </OuterLayout>
  )
}

export function Github() {
  return (
    <div
      className={css`
        margin-top:30px;
    `}
    >
      <H1
        text="Github"
      />
      <div
        className={css`
      display:grid;
      grid-template-columns:1fr 1fr 1fr;
      gap:40px;
      margin-top:16px;
      @media (max-width:670px) {
        display: block;
        &>* {
          display: block;
          margin: 16px 0;
          padding: 30px 0;
        }
      }
      `}
      >
        {githubItems.map(item => {
          return <GithubItem
            key={item.path}
            item={item}
          />
        })}
      </div>
    </div>
  )
}

function GithubItem(props: {
  item: GithubItem
}) {
  const { item } = props
  return <a
    target={"_blank"}
    href={item.path}
    className={css`
      background-image:linear-gradient(${themeColor},white);
      font-size:40px;
      font-weight:bold;
      cursor: pointer;
      text-decoration:none;
      color:black;
      text-align:center;
      vertical-align:center;
      padding:50px 0px;
      border-radius:8px;
      &:hover{
        background-image:linear-gradient(${themeColor},${themeColor});
      }
      `}
  >
    {item.title}
  </a>
}
