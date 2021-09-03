import React from "react";
import { Story, Meta } from "@storybook/react";
import { Formik, Field, Form } from "formik";

import { TextArea, TextAreaProps } from "@playpickup/core";

export default {
  title: "Forms/TextArea",
  component: TextArea,
  argTypes: {
    id: {
      control: "text",
      defaultValue: "",
      description: "ID of the textarea",
    },
    name: {
      control: "text",
      defaultValue: "",
      description: "Name of the textarea",
    },
    value: {
      control: "text",
      defaultValue: null,
      description: "Value of the textarea",
    },
    className: {
      defaultValue: null,
      description:
        "Additional className to be applied to the textarea container",
      control: "text",
    },
    style: {
      defaultValue: null,
      description: "Style object to apply to the textarea container",
      control: "object",
    },
    innerClassName: {
      defaultValue: null,
      description: "Additional className to be applied to the input itself",
      control: "text",
    },
    innerStyle: {
      defaultValue: null,
      description: "Style object to apply to the input itself",
      control: "object",
    },
    handleChange: {
      defaultValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => null,
      description: "Function to be used when change events occur",
    },
  },
  args: {
    id: "excerpt",
    name: "excerpt",
    value:
      "Following a strong offseason, the Mets are poised to bring the heat in 2021 - only one question remains... Where will they end up in the NL race?",
  },
} as Meta;

const Template: Story<TextAreaProps> = (args) => (
  <div style={{ width: "100%", maxWidth: 350 }}>
    <Formik
      initialValues={{
        excerpt:
          "Following a strong offseason, the Mets are poised to bring the heat in 2021 - only one question remains... Where will they end up in the NL race?",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field component={TextArea} {...args} />
        </Form>
      )}
    </Formik>
  </div>
);

export const Default = Template.bind({});
