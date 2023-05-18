import clsx from "clsx";
import type { HTMLAttributes } from "react";

import Styles from "@/styles/components/Heading.module.scss";

export type HeadingProps = HTMLAttributes<HTMLElement>;
export default function Heading({ className }: HeadingProps) {
  return (
    <header className={clsx(Styles.root, className)}>
      <h1>Learn to code by watching others</h1>
      <h3>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </h3>
    </header>
  );
}
