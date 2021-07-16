import React from "react";
import { useTheme } from "react-jss";

import Typography from "../Typography";
import { DefaultTheme, FormErrorProps } from "../types";

const FormError: React.FC<FormErrorProps> = ({ errors, name, touched }) => {
  const theme: DefaultTheme = useTheme();
  if (errors && errors[name] && touched && touched[name]) {
    return (
      <div
        style={{
          marginTop: theme.spacing.base,
          marginLeft: theme.spacing.base,
        }}
      >
        <Typography color={theme.colors.error} variant="body">
          {errors[name]}
        </Typography>
      </div>
    );
  }
  return null;
};

export default FormError;
