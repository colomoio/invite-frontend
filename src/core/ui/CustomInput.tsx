import { useState, ChangeEvent } from "react";

import {
  FormControl,
  FormErrorText,
  FormHelperText,
  Input,
  InputGroup,
  CardHeader,
  Heading,
  FormLabel,
} from "@chakra-ui/react";

type inputProps = {
  label: string;
  type?: string;
  helperText?: string;
  placeholder?: string;
  errorText?: null | string;
};

export function CustomInput(props: inputProps) {
  const [input, setInput] = useState("");
  const { label } = props;
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
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <FormControl isInvalid={errorBool}>
      <CardHeader padding="0rem">
        <FormLabel size="xs" margin=".5rem">
          {label}
        </FormLabel>
      </CardHeader>
      <InputGroup>
        <Input
          value={input}
          type={type}
          onChange={handleInputChange}
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
          <FormErrorText>{errorText ? errorText : null}</FormErrorText>
        ) : (
          <FormHelperText>{helperText ? helperText : null}</FormHelperText>
        )}
      </InputGroup>
    </FormControl>
  );
}
