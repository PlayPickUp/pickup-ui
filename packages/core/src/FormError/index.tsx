import React from "react";
import { FormikErrors, FormikTouched } from "formik";
import { useTheme } from "react-jss";

import Typography from "../Typography";
import { DefaultTheme } from "../types";

export interface FormErrorProps {
	errors: FormikErrors<unknown>;
	touched: FormikTouched<unknown>;
	name: string;
}

const FormError: React.FC<FormErrorProps> = ({ errors, name, touched }) => {
	const theme: DefaultTheme = useTheme();
	if (errors && errors[name] && touched && touched[name]) {
		return (
			<div style={{ marginTop: theme.spacing.base }}>
				<Typography color={theme.colors.error} variant="body">
					{errors[name]}
				</Typography>
			</div>
		);
	}
	return null;
};

export default FormError;
