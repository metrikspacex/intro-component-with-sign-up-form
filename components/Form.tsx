"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import type { FormEvent, HTMLAttributes } from "react";
import { useState } from "react";

import Styles from "@/styles/components/Form.module.scss";

import Input from "./Input";

export type FormValues = {
  email: {
    valid: boolean;
    value: string;
  };
  firstName: {
    valid: boolean;
    value: string;
  };
  initialized: boolean;
  lastName: {
    valid: boolean;
    value: string;
  };
  password: {
    valid: boolean;
    value: string;
  };
};

const initialFormValues: FormValues = {
  email: {
    valid: false,
    value: "",
  },
  firstName: {
    valid: false,
    value: "",
  },
  initialized: true,
  lastName: {
    valid: false,
    value: "",
  },
  password: {
    valid: false,
    value: "",
  },
};

export type FormProps = HTMLAttributes<HTMLFormElement>;
export default function Form({ className }: FormProps) {
  const [form, setForm] = useState<FormValues>(initialFormValues);
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    setForm((prevState) => ({ ...prevState, initialized: false }));
    if (
      form.email.valid &&
      form.firstName.valid &&
      form.lastName.valid &&
      form.password.valid
    ) {
      router.push("/success");
    }
  };

  return (
    <form className={clsx(Styles.root, className)} onSubmit={onSubmit}>
      <Input
        initialized={form.initialized}
        name="firstName"
        placeholder="First Name"
        setForm={setForm}
        type="text"
      />
      <Input
        initialized={form.initialized}
        name="lastName"
        placeholder="Last Name"
        setForm={setForm}
        type="text"
      />
      <Input
        initialized={form.initialized}
        name="email"
        placeholder="Email"
        setForm={setForm}
        type="text"
      />
      <Input
        initialized={form.initialized}
        name="password"
        placeholder="Password"
        setForm={setForm}
        type="password"
      />
      <button type="submit">claim your free trial</button>
      <p>
        By clicking the button, you are agreeing to our
        <span> Terms and Services</span>
      </p>
    </form>
  );
}
