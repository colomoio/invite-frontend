import { Button, Stack } from "@chakra-ui/react";
import { FormInput } from "../../core/ui/FormInput";
import { useSignUpForm } from "./useSignUpForm";

/**
 * @TODO
 * 1. Add validation for each field
 *  - Email
 *  - Password (min 8 chars)
 *  - Confirm Password (matches password)
 *  - Nickname (min 1 chars)
 *  - Submit button is disabled until all fields are valid
 *  - Show error messages for each field
 * 2. Add a submit handler
 * 3. Display request status (loading, error, success)
 *  - Show error message if request fails
 *  - Redirect user to TODO
 *
 * @TOMORROW: Talk about components in Chakra UI
 */
export function SignUpForm() {
  const { form, setForm, handleSubmit } = useSignUpForm();

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="fun@party.com"
          value={form.email}
          onChange={setForm.setEmail}
        />
        <FormInput
          label="Nickname"
          type="text"
          name="nickname"
          value={form.nickname}
          onChange={setForm.setNickname}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={setForm.setPassword}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.passwordConfirmation}
          onChange={setForm.setPasswordConfirmation}
        />
        <Button type="submit">Sign Up</Button>
      </Stack>
    </form>
  );
}
