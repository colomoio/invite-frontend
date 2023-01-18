import { Button, Card } from "@chakra-ui/react";
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
    <>
      <Card margin="1rem" bg="purple.200">
        <form onSubmit={handleSubmit} id="signup-form">
          <FormInput
            label="E-mail"
            type="email"
            name="email"
            placeholder="Ex: fun@party.com"
            helperText="Enter an e-mail for your account"
            value={form.email}
            onChange={setForm.setEmail}
          />
          <FormInput
            label="Nickname"
            type="text"
            name="nickname"
            placeholder="Ex: party-Man3000"
            helperText="How would you like people to call you"
            value={form.nickname}
            onChange={setForm.setNickname}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Ex: IlikeParties123"
            helperText="Make sure you remeber it"
            value={form.password}
            onChange={setForm.setPassword}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Ex: IlikeParties123 (the same as above)"
            helperText="Lets see if you do remeber it"
            value={form.passwordConfirmation}
            onChange={setForm.setPasswordConfirmation}
          />
        </form>
      </Card>
      <Button
        type="submit"
        form="signup-form"
        width="20rem"
        h="3.25rem"
        display="block"
        border=".25rem solid"
        borderColor="purple.600"
        bg="purple.600"
        borderRadius="2xl"
        textColor="white"
        margin="1rem auto"
        _hover={{
          bg: "white",
          textColor: "purple.600",
        }}
      >
        Sign Up
      </Button>
    </>
  );
}
