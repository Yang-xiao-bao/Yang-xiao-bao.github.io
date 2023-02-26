import { css } from "@emotion/css"
import { Icon } from "@mdi/react"
import { ReactNode, useState } from "react"
import { H1 } from "../../components/H1"
import { mdiCity, mdiAccountSchool, mdiCalendarBlankOutline, mdiPhone, mdiEmailOutline, mdiDownload, mdiWechat } from '@mdi/js';
import { Card } from "../../components/Card";
import { P } from "../../components/P";
import { Button } from "../../components/Button";
import { themeColor } from "../../colors";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import resume from '../../assets/resume.pdf'
import photo from '../../assets/photo.jpg'
import wechatQRCode from '../../assets/wechat-qrcode.jpg'

type Message = {
  path: string,
  title: string;
  text: string
}

const messages: Message[] = [
  {
    path: mdiCity,
    title: '地址',
    text: "成都"
  },
  {
    path: mdiCalendarBlankOutline,
    title: '年龄',
    text: "25"
  },
  {
    path: mdiPhone,
    title: '电话',
    text: "185-8230-2492"
  },
  {
    path: mdiAccountSchool,
    title: '学校',
    text: "西华大学"
  },
  {
    path: mdiEmailOutline,
    title: '邮箱',
    text: "yongfan98@gmail.com"
  }
]
export function AboutMe() {
  return (
    <div
      className={css`
    display:flex;
    align-items:center;
    @media (max-width:600px){
      display:block;
    }
    `}
    >
      <img src={photo} width="50%"
        className={img}
      />
      <Card
        className={css`
      margin-left:-60px;
      z-index:1;
      width:50%;
      @media (max-width:600px){
      margin-left:0px;
      width:100%;
      box-sizing:border-box;
      position:relative;
    }
      `}
      >
        <img
          src={photo} width="40%"
          className={css`
          display:none;
          @media (max-width:600px){
            position:absolute;
          top:0px;
          right:0px;
          display:block;
          border-bottom-left-radius: 16px;
          }
          `}

        />
        <H1 text="基本信息" />
        <div
          className={css`
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:10px;
        margin:16px 0px;
        @media (max-width:1100px){
          display:block;
        }
        `}
        >
          {messages.map((message, index) => {
            return <MessageItem
              key={index}
              message={message}
            />
          })}
        </div>
        <H1 text="自我评价" />
        <P className={css`
        margin-top:16px;
        `}>
          本人本科期间学习过JavaScript/HTML5/CSS3 的相关课程，后来自学了TypeScript，React与Vue2/Vue3 等前端技术。本人性格开朗，善于沟通，学习能力强，抗压能力强。
        </P>
        <Btn />
      </Card>
    </div>
  )
}
const img = css`
border-top-right-radius:16px;
border-bottom-right-radius:16px;
transform:translateX(-20px);
@media (max-width:600px){
  display:none;
}
`


function MessageItem(props: {
  message: Message
}) {
  const { message } = props
  return (
    <div className={css`
    color:white;
    display:flex;
    align-items:center;
    @media (max-width:1100px){
          margin-bottom:10px;
        }
    `}>
      <Icon
        size={1}
        path={message.path} />
      <span
        className={css`
      font-weight:bold;
      margin:0px 6px;
      `}
      >{message.title}:</span>
      <span
        className={css`
      color:#d1d5db;
      `}
      >{message.text}</span>
    </div>
  )
}

function Btn() {
  const [visible, setVisible] = useState(false)
  return (
    <div
      className={css`
      display:flex;
      margin:16px 0px;
      `}

    >
      <a download="雍凡-前端.pdf" href={resume} className={css`text-decoration:none;`}>
        <Button
          className={css`
        border-color:${themeColor};
        margin-right:16px;
          `}
          text="下载简历"
          path={mdiDownload}
        />
      </a>
      <Button
        onClick={() => setVisible(true)}
        className={css`
        border-color:white;
          `}
        text="加我微信"
        path={mdiWechat}
      />
      {visible &&
        <Dialog
          open
          onClose={() => setVisible(false)}
        >
          <DialogTitle>请扫二维码添加好友</DialogTitle>
          <DialogContent>
            <img
              className={css`
              width:100%;
              @media (min-width:560px){
                width:400px
              }
              `}
              src={wechatQRCode} />
          </DialogContent>

        </Dialog>
      }
    </div>
  )
}