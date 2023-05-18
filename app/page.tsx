"using server";

import Form from "@/components/Form";
import Heading from "@/components/Heading";
import Message from "@/components/Message";
import Styles from "@/styles/pages/home.module.scss";

export default function Home() {
  return (
    <main className={Styles.root}>
      <Heading />
      <Message />
      <Form />
    </main>
  );
}
