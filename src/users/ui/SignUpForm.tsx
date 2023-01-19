import {
  Button,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FormInput } from "../../core/ui/FormInput";
import { useSignUpForm } from "./useSignUpForm";

/**
 * @TODO
 * 1. Add validation for each field
 *  - Email
 *  - Nickname (min 1 chars)
 *  - Password (min 8 chars)
 *  - Confirm Password (matches password)
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
  const { handleSubmit, fields, formErrors, isSubmitting, hasError } =
    useSignUpForm();

  return (
    <>
      {hasError ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Network Error!</AlertTitle>
          <AlertDescription>
            Cannot post form data, click &quot;Sign Up&quot; to try again
          </AlertDescription>
        </Alert>
      ) : null}
      <form onSubmit={handleSubmit}>
        <Stack>
          <FormInput
            label="Email"
            type="email"
            errorText={formErrors.email}
            {...fields.email}
          />
          <FormInput
            label="Nickname"
            type="text"
            errorText={formErrors.nickname}
            {...fields.nickname}
          />
          <FormInput
            label="Password"
            type="password"
            errorText={formErrors.password}
            {...fields.password}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            errorText={formErrors.confirmPassword}
            {...fields.confirmPassword}
          />
          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </Stack>
      </form>
    </>
  );
}
