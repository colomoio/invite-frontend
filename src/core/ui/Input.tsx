import { ChangeEventHandler } from "react";

import {
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Input as ChakraInput,
  InputGroup,
  CardHeader,
  FormLabel,
} from "@chakra-ui/react";

export type InputProps = {
  label: string;
  Inputvalue: undefined | string;
  InputonChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  helperText?: string;
  placeholder?: string;
  errorText?: null | string;
};

export function Input(props: InputProps) {
  const { label, InputonChange, Inputvalue } = props;
  const type = props?.type;
  const placeholder = props?.placeholder;
  const errorText = props?.errorText;
  const helperText = props?.helperText;

  let errorBool;

  if (errorText) {
    errorBool = true;
  } else {
    errorBool = false;
  }

  return (
    <FormControl isInvalid={errorBool}>
      <CardHeader padding="0rem">
        <FormLabel size="xs" margin=".5rem">
          {label}
        </FormLabel>
      </CardHeader>
      <InputGroup>
        <ChakraInput
          value={Inputvalue}
          type={type}
          onChange={InputonChange}
          placeholder={placeholder}
          borderColor="black"
          height="3rem"
          borderRadius="1rem"
          textColor="#8B44EE"
          marginTop=".5rem"
          focusBorderColor="#8B44EE"
          _hover={{ borderColor: "none" }}
        />

        {errorBool ? (
          <FormErrorMessage>{errorText ? errorText : null}</FormErrorMessage>
        ) : (
          <FormHelperText>{helperText ? helperText : null}</FormHelperText>
        )}
      </InputGroup>
    </FormControl>
  );
}
