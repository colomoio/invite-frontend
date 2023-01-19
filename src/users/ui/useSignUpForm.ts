import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { createUser } from "../use-cases/createUser";

function inputSetter(setter: React.Dispatch<React.SetStateAction<string>>) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };
}

export function useSignUpForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "ok">(
    "idle"
  );
  const {
    register,
    handleSubmit: hookOnSubmit,
    formState: { errors },
  } = useForm();

  const fields = useMemo(
    () => ({
      email: register("email", { required: true }),
      password: register("password", { required: true }),
      confirmPassword: register("confirmPassword", { required: true }),
      nickname: register("nickname", { required: true }),
    }),
    [register]
  );

  /**
   * @TODO: find granular way to handle errors and display them correctly
   */
  const formErrors = {
    email: errors?.email && "Email is required",
    password: errors?.password && "Password is required",
    confirmPassword: errors?.confirmPassword && "Confirm password is required",
    nickname: errors?.nickname && "Nickname is required",
  };

  async function onSubmit(data: Parameters<typeof createUser>[0]) {
    setStatus("loading");
    try {
      const user = await createUser(data);
      setStatus("idle");
    } catch (error) {
      console.log("tona-error", error);
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
