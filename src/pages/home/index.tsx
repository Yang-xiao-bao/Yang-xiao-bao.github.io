import { css } from "@emotion/css";
import { InnerLayout } from "../../components/InnerLayout";
import { OuterLayout } from "../../components/OuterLayout";
import { Github } from "../Github";
import { Experience } from "../resume/Experience";
import { Tech } from "../resume/Tech";
import { AboutMe } from "./AboutMe";
import { Nav } from "./Nav";

export function Home() {
  return (
    <OuterLayout>
      <InnerLayout>
        <Nav />
        <AboutMe />
        <Tech />
        <Experience />
        <Github />
      </InnerLayout>
    </OuterLayout>
  )
}