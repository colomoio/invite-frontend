// email, password, passwordConfirmation, firstName, lastName, nickname

import { useState } from "react";
import { createUser } from "../use-cases/createUser";

function inputSetter(setter: React.Dispatch<React.SetStateAction<string>>) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };
}

export function useSignUpForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");

  const form = {
    email,
    password,
    passwordConfirmation,
    firstName,
    lastName,
    nickname,
  };

  const setForm = {
    setEmail: inputSetter(setEmail),
    setPassword: inputSetter(setPassword),
    setPasswordConfirmation: inputSetter(setPasswordConfirmation),
    setFirstName: inputSetter(setFirstName),
    setLastName: inputSetter(setLastName),
    setNickname: inputSetter(setNickname),
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    try {
      const user = await createUser({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        passwordConfirmation: formData.get("confirmPassword") as string,
        nickname: formData.get("nickname") as string,
      });
      debugger;
      setStatus("idle");
    } catch (error) {
      const networkError = error as { status: number };
      if (networkError?.status === 409) {
        setStatus("error");
        return;
      }
    }
  }

  return {
    form,
    setForm,
    handleSubmit,
  };
}
