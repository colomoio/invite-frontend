import { Button, Stack } from "@chakra-ui/react";
import { FormInput } from "../../core/ui/FormInput";

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
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  }

  return (
    <Stack as="form">
      <FormInput
        label="Email"
        type="email"
        name="email"
        placeholder="fun@party.com"
      />
      {/* <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required /> */}
      <label htmlFor="password">Password</label>
      <input type="password" name="password" required />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input type="password" name="confirm-password" required />
      <label htmlFor="nickname">Nickname</label>
      <input type="text" name="nickname" id="nickname" required />
      <Button type="submit">Sign Up</Button>
    </Stack>
  );
}
