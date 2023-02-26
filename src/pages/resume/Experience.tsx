import { css } from "@emotion/css";
import { themeColor } from "../../colors";
import { Card } from "../../components/Card";
import { H1 } from "../../components/H1";

const experience: ExperienceItem[] = [
  {
    projectName: '企易立OKR',
    companyName: '四川塔极特科技有限公司',
    time: '',
    projectIntroduction: '该项目为React Native 项目，使用expo 搭建该项目是一款OKR管理软件。',
    personalAchievement: '在该项目中，本人完成了登录页面，组织选择页面，OKR详情页面的开发。 OKR详情页面又包括了：Objective的展示、修改、对齐、被对齐；KR的展示、修改；评论的展示、修改、添加等功能。',
    tech: ['TypeScript', 'React Native', 'React-Query', 'Recoil', 'axios'],
    link: 'https://apps.apple.com/cn/app/%E4%BC%81%E6%98%93%E7%AB%8B/id1612805756'
  },
  {
    projectName: 'Thinsection',
    companyName: '四川塔极特科技有限公司',
    time: '',
    projectIntroduction: '该项目为石油勘探行业的计算机辅助设计软件，其作用是利用机器学习的工具来自动分析岩石照片中的岩石成分，其提供有一个界面对自动分析的结果进行人工校正。这个项目主要由项目管理（管理block/well 这些）和图片处理两大部分组成。',
    personalAchievement: '本人完成其中的项目管理部分开发，其中包括：还原UI设计，完成各个模块的增、删、改的功能，完成从excel读取数据库',
    tech: ['TypeScript', 'React', 'React-Query', 'Recoil', 'Grpc-Web'],
    link: 'https://meera-insight-v2.dev.meeraspace.com/thin-section'
  }
]

export function Experience() {
  return (
    <Card>
      <H1
        text="项目经历"
      />
      {experience.map((i, index) => {
        return <ExperienceItem
          key={index}
          experience={i}
        />
      })}
    </Card>
  )
}

type ExperienceItem = {
  projectName: string;
  companyName: string;
  time: string;
  projectIntroduction: string;
  personalAchievement: string;
  tech: string[];
  link: string;
}

function ExperienceItem(props: {
  experience: ExperienceItem
}) {
  const { experience } = props
  return (
    <div
      className={css`
    background-color:rgb(28,25,23);
    border-radius:8px;
    padding:16px;
    margin:16px 0px;
    `}
    >
      <p className={css`
      color:white;
      font-weight:bold;
      font-size:20px;
      `}>
        {experience.projectName}
      </p>
      <p className={css`
      color:#a8a29e;
      margin:6px 0px;
      `}>{experience.time} {experience.companyName}</p>
      <p
        className={css`
      margin:16px 0px;
      color:#a8a29e;
      `}
      >
        {experience.projectIntroduction}
      </p>
      <p
        className={css`
      margin-bottom:16px;
      color:#a8a29e;
      `}
      >
        {experience.personalAchievement}
      </p>
      <p
        className={css`
      color:#a8a29e;
      margin-bottom:16px;
      `}
      >
        <span
          className={css`
      color:white;
      font-weight:bold;
      margin-right:10px;
      `}
        >技术栈:</span>
        {experience.tech.join(',')}。
      </p>
      <div
        className={css`
      color:#a8a29e;
      `}
      >
        <span
          className={css`
      color:white;
      font-weight:bold;
      margin-right:10px;
      `}
        >项目链接:</span>
        <a
          target={"_blank"}
          className={css`
          text-decoration:none;
          color:${themeColor};
          `}
          href={experience.link}
        >点我跳转</a>
      </div>
    </div>
  )
}
