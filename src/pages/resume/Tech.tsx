import { css } from "@emotion/css";
import { Bar } from "../../components/Bar";
import { H1 } from "../../components/H1";


type TechItem = {
  title: string;
  precent: number
}
const techs: TechItem[] = [
  {
    title: 'React',
    precent: 80,
  },
  {
    title: 'Vue',
    precent: 60,
  },
  {
    title: 'React Native',
    precent: 60,
  },
  {
    title: 'JavaScript',
    precent: 80,
  },
  {
    title: 'TypeScript',
    precent: 70,
  },
  {
    title: 'HTML5+CSS3',
    precent: 80,
  },
]

export function Tech() {
  return (
    <div className={css`
    margin-top:40px;
    margin-bottom:40px;
    `}>
      <H1 text="我的技能"
        className={css`
      margin:16px 0px;
      `}
      />
      {techs.map((tech, index) => {
        return <TechItem
          key={index}
          tech={tech}
        />
      })}
    </div>
  )
}

function TechItem(props: {
  tech: TechItem
}) {
  const { tech } = props
  return (
    <div
      className={css`
    display:grid;
    grid-template-columns:120px 1fr;
    align-items:center;
    margin-bottom:16px;
    `}
    >
      <span
        className={css`
        font-weight:bold;
        color:white;margin-right:16px;
        `}
      >{tech.title}</span>
      <Bar
        precent={tech.precent}
      />
    </div>
  )
}