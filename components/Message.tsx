import clsx from "clsx";
import type { HTMLAttributes } from "react";

import Styles from "@/styles/components/Message.module.scss";

export type MessageProps = HTMLAttributes<HTMLDivElement>;
export default function Message({ className }: MessageProps) {
  return (
    <section className={clsx(Styles.root, className)}>
      <h2>
        Try it free 7 days
        <span> then $20/mo. thereafter</span>
      </h2>
    </section>
  );
}
