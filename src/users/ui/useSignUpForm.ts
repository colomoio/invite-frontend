import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUser } from "../use-cases/createUser";

const userSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup
    .string()
    .min(8)
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

export function useSignUpForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "ok">(
    "idle"
  );
  const {
    register,
    handleSubmit: hookOnSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const fields = useMemo(
    () => ({
      email: register("email"),
      password: register("password"),
      confirmPassword: register("confirmPassword"),
      nickname: register("nickname"),
    }),
    [register]
  );

  const formErrors = {
    email: errors?.email?.message,
    password: errors?.password?.message,
    confirmPassword: errors?.confirmPassword?.message,
    nickname: errors?.nickname?.message,
  };

  async function onSubmit(data: Parameters<typeof createUser>[0]) {
    setStatus("loading");
    try {
      const user = await createUser(data);
      setStatus("idle");
    } catch (error) {
      const networkError = error as { status: number };
      setStatus("error");
      if (networkError?.status > 400) {
        return;
      }
    }
  }

  return {
    fields,
    formErrors,
    handleSubmit: hookOnSubmit(onSubmit),
    isSubmitting: status === "loading",
    isSubmitted: status === "idle",
    hasError: status === "error",
  };
}
