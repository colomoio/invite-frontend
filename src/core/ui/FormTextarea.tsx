import {
  Card,
  CardHeader,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import React, { ChangeEventHandler } from "react";

export type TextareaProps = {
  label: string;
  value: undefined | string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  type?: string;
  helperText?: string;
  placeholder?: string;
  errorText?: null | string;
};

export default function FormTextarea(props: TextareaProps) {
  const { label, onChange, value } = props;
  const type = props?.type;
  const placeholder = props?.placeholder;
  const errorText = props?.errorText;
  const helperText = props?.helperText;

  const errorBool = Boolean(errorText);

  return (
    <Card margin={"1rem"} padding={"1rem"} backgroundColor="white">
      <FormControl isInvalid={errorBool}>
        <CardHeader padding="0rem">
          <FormLabel size="xs" margin="0 ">
            {label}
          </FormLabel>
        </CardHeader>
        <Textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          resize="none"
          minHeight="5.5rem"
          borderColor="black"
          borderRadius="1rem"
          textColor="#8B44EE"
          marginTop=".5rem"
          focusBorderColor="#8B44EE"
        />
        {errorBool ? (
          <FormErrorMessage>{errorText ? errorText : null}</FormErrorMessage>
        ) : (
          <FormHelperText>{helperText ? helperText : null}</FormHelperText>
        )}
      </FormControl>
    </Card>
  );
}
