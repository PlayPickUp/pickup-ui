import React from "react";
import { Story, Meta } from "@storybook/react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

import { NestedInput, NestedInputProps } from "@playpickup/core";

export default {
  title: "Core/NestedInput",
  component: NestedInput,
  argTypes: {
    buttonText: {
      defaultValue: "Submit",
      description: "Text to appear inside of the submit button",
      control: "text",
    },
    placeholder: {
      defaultValue: null,
      description: "Placeholder content for the input",
      control: "text",
    },
    label: {
      defaultValue: null,
      description:
        "Label to be placed inside the component. Only applies when using the prop `usePhoneNumber`",
      control: "text",
    },
    usePhoneNumber: {
      defaultValue: false,
      description: "Switches the input to phone number mode",
      control: "boolean",
    },
    useVerificationCode: {
      defaultValue: false,
      description: "Switches the input to verification code mode",
      control: "boolean",
    },
    useSubmit: {
      defaultValue: true,
      description: "Allows toggle of nested Button as submit form",
      control: "boolean",
    },
    onClick: {
      defaultValue: null,
      description: "Place holder for passing onClick function",
      control: "function",
    },
  },
  args: {
    placeholder: "first.last@example.com",
    label: "Phone or Verification Code",
    useSubmit: false,
  },
} as Meta;

const Template: Story<NestedInputProps> = (args) => (
  <Formik
    initialValues={{ email: "" }}
    validationSchema={Yup.object().shape({
      email: Yup.string().required("A valid email is required"),
    })}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <Field
          {...args}
          id={args.usePhoneNumber ? "phone" : "email"}
          name={args.usePhoneNumber ? "phone" : "email"}
          submitText="Sign Up"
          useSubmit={args.useSubmit}
          onClick={() => {
            console.log("just clicked not submitted");
          }}
          component={NestedInput}
        />
      </Form>
    )}
  </Formik>
);

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    source: {
      code: `
<Field
  {...field}
  id={"email"}
  name={"email"}
  submitText="Sign Up"
  component={NestedInput}
  usePhoneNumber={false}
  useVerificationCode={false}
  useSubmit={false}
  onClick={()=>console.log("do something")}
/>
      `,
    },
  },
};
