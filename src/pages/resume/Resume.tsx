import { InnerLayout } from "../../components/InnerLayout";
import { OuterLayout } from "../../components/OuterLayout";
import { Nav } from "../home/Nav";
import { Experience } from "./Experience";
import { Tech } from "./Tech";

export function Resume() {
  return (
    <OuterLayout>
      <InnerLayout>
        <Nav />
        <Tech />
        <Experience />
      </InnerLayout>
    </OuterLayout>
  )
}