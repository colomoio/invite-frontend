import { ChangeEventHandler } from "react";

import {
  FormControl,
  FormHelperText,
  FormErrorMessage,
  InputGroup,
  CardHeader,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { FormBox } from "./FormBox";

export type InputProps = {
  label: string;
  value: undefined | string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  helperText?: string;
  placeholder?: string;
  errorText?: null | string;
};

export function FormInput(props: InputProps) {
  const { label, onChange, value } = props;
  const type = props?.type;
  const placeholder = props?.placeholder;
  const errorText = props?.errorText;
  const helperText = props?.helperText;

  const errorBool = Boolean(errorText);

  return (
    <FormBox>
      <FormControl isInvalid={errorBool}>
        <CardHeader padding="0rem">
          <FormLabel size="xs" margin="0 ">
            {label}
          </FormLabel>
        </CardHeader>
        <InputGroup>
          <Input
            value={value}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            borderColor="black"
            height="3rem"
            borderRadius="1rem"
            textColor="#8B44EE"
            marginTop=".5rem"
            focusBorderColor="#8B44EE"
            _hover={{ borderColor: "none" }}
          />
        </InputGroup>
        {errorBool ? (
          <FormErrorMessage>{errorText ? errorText : null}</FormErrorMessage>
        ) : (
          <FormHelperText>{helperText ? helperText : null}</FormHelperText>
        )}
      </FormControl>
    </FormBox>
  );
}
