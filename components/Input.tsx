import clsx from "clsx";
import type {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";
import { useState } from "react";

import Styles from "@/styles/components/Input.module.scss";

import type { FormValues } from "./Form";

export type InputProps = {
  initialized: boolean;
  setForm: Dispatch<SetStateAction<FormValues>>;
} & InputHTMLAttributes<HTMLInputElement>;
export default function Input({
  initialized,
  className,
  name,
  placeholder,
  setForm,
  type,
}: InputProps) {
  // Don't write forms like this.
  // The state is wrong. Not sure how to do it yet.
  const [valid, setValid] = useState<boolean>(false);

  // ^ - a start of a string

  // (?=.{1,20}$) - there must be 1 to 20 chars other than line break chars in
  //                the string

  // [a-zA-Z]+ - 1 or more ASCII letters

  // (?: - start of a non-capturing group repeated 0 or more times matching
  //       sequences of
  //
  //       [-'\s] - a -, ' or whitespace
  //       [a-zA-Z]+ - 1+ ASCII letters

  // )* - end of the grouping

  // $ - end of string

  const firstNameMalformed = new RegExp(
    "^(?=.{1,20}$)[a-zA-Z]+(?:[-'s][a-zA-Z]+)*$"
  );
  const lastNameMalformed = new RegExp(
    "^(?=.{1,20}$)[a-zA-Z]+(?:[-'s][a-zA-Z]+)*$"
  );
  const emailMalformed = new RegExp("^[a-z0-9._%+-]+@[a-z0-9-]+\\.[a-z]{2,4}$");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case "firstName": {
        setValid(() => {
          if (firstNameMalformed.test(event.target.value)) {
            return true;
          }
          return false;
        });
        setForm((prevState) => {
          return {
            ...prevState,
            [name]: {
              valid,
              value: event.target.value,
            },
          };
        });
        break;
      }
      case "lastName": {
        setValid(() => {
          if (lastNameMalformed.test(event.target.value)) {
            return true;
          }
          return false;
        });
        setForm((prevState) => {
          return {
            ...prevState,
            [name]: {
              valid,
              value: event.target.value,
            },
          };
        });
        break;
      }
      case "email": {
        setValid(() => {
          if (emailMalformed.test(event.target.value)) {
            return true;
          }
          return false;
        });
        setForm((prevState) => {
          console.log(valid);
          return {
            ...prevState,
            [name]: {
              valid,
              value: event.target.value,
            },
          };
        });
        break;
      }
      case "password": {
        setValid(() => {
          // Regex for passwords and even emails can be difficult.
          if (event.target.value.length >= 8) {
            return true;
          }
          return false;
        });
        setForm((prevState) => {
          console.log(valid);
          return {
            ...prevState,
            [name]: {
              valid,
              value: event.target.value,
            },
          };
        });
        break;
      }
      default: {
        setValid(false);
        break;
      }
    }
  };

  let error = null;
  let errorState = null;

  if (!initialized) {
    error = <span className={clsx(Styles.error)} />;
    if (name === "firstName") {
      errorState = (
        <div className={clsx(Styles.message)}>
          <p>First Name cannot be empty</p>
        </div>
      );
    } else if (name === "lastName") {
      errorState = (
        <div className={clsx(Styles.message)}>
          <p>Last Name cannot be empty</p>
        </div>
      );
    } else if (name === "email") {
      errorState = (
        <div className={clsx(Styles.message)}>
          <p>Looks like x@y.com</p>
        </div>
      );
    } else if (name === "password") {
      errorState = (
        <div className={clsx(Styles.message)}>
          <p>Must be greater than 8 characters</p>
        </div>
      );
    }
  }

  return (
    <div className={clsx(Styles.root, className)}>
      <div className={clsx(Styles.container)}>
        <input
          autoComplete="new-password"
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
        {valid ? null : error}
      </div>
      {valid ? null : errorState}
    </div>
  );
}
