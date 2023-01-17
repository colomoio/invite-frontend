import { ChangeEventHandler } from "react";

import {
  FormControl,
  FormHelperText,
  FormErrorMessage,
  InputGroup,
  FormLabel,
  Input,
  type InputProps as ChakraInputProps,
} from "@chakra-ui/react";

import { FormBox } from "./FormBox";

type HelperTextProps = string | null;
export type InputProps = ChakraInputProps & {
  label: string;
  name: string;
  helperText?: HelperTextProps;
  errorText?: HelperTextProps;
};

export function FormInput(props: InputProps) {
  const { label, name, helperText, errorText, ...inputProps } = props;

  /**
   * @IDEA: Should we cover JSX.Element as well?
   */
  const hasError = typeof errorText === "string" && errorText.length > 0;

  const hasHelperText = typeof helperText === "string" && helperText.length > 0;
  const helperNode = hasHelperText ? (
    <FormHelperText>{helperText}</FormHelperText>
  ) : null;

  return (
    <FormBox>
      <FormControl isInvalid={hasError}>
        <FormLabel size="xs" margin="0" htmlFor={name}>
          {label}
        </FormLabel>
        <InputGroup>
          <Input
            {...inputProps}
            name={name}
            id={name}
            borderColor="black"
            h="3rem"
            borderRadius="2xl"
            textColor="purple.600"
            marginTop=".5rem"
            focusBorderColor="purple.600"
            _hover={{ borderColor: "none" }}
          />
        </InputGroup>
        {hasError ? (
          <FormErrorMessage>{errorText}</FormErrorMessage>
        ) : (
          helperNode
        )}
      </FormControl>
    </FormBox>
  );
}
