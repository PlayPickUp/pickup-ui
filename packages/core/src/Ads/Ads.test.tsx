import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Ads from "./index";

const AdElement = (
  <ThemeProvider>
    <Ads
      height={100}
      width={300}
      adProps={{
        name: "HelloWorld Ad",
        url: "https://www.playpickup.com",
        backgroundImage:
          "https://images.ctfassets.net/vr34jcb0tstv/42KLMVnUxtYHYkBNfPh9CH/22f587c10adcd33faa6b3325f1096de0/BetMGM_200_Suns.png",
        foregroundImage:
          "https://images.ctfassets.net/vr34jcb0tstv/2XgjxzpUehZpgDwyeBTyVw/6f4f124a291d84da963b5491e4dc20b3/hero.svg",
        copy: "<h1>Hello World!</h1>",
      }}
    />
  </ThemeProvider>
);

const defaultAdElement = (
  <ThemeProvider>
    <Ads
      height={100}
      width={300}
      adProps={{
        name: "HelloWorld Ad",
        url: "https://www.playpickup.com",
        backgroundImage:
          "https://images.ctfassets.net/vr34jcb0tstv/42KLMVnUxtYHYkBNfPh9CH/22f587c10adcd33faa6b3325f1096de0/BetMGM_200_Suns.png",
      }}
    />
  </ThemeProvider>
);

test("Renders and matches snapshot", () => {
  Math.random = jest.fn(() => 1); // <--- This is the key, overriding the system's Math.random function
  const { container } = render(AdElement);
  expect(container).toMatchSnapshot();
});

test("Renders image for foreground", () => {
  const { container } = render(AdElement);
  expect(container.getElementsByTagName("img")[0].getAttribute("src")).toEqual(
    "https://images.ctfassets.net/vr34jcb0tstv/2XgjxzpUehZpgDwyeBTyVw/6f4f124a291d84da963b5491e4dc20b3/hero.svg"
  );
});

test("Renders Copy", () => {
  const { getByText } = render(AdElement);
  expect(getByText("Hello World!")).toBeTruthy();
});

test("Renders AdProps", () => {
  const { getByText } = render(AdElement);
  expect(getByText("Hello World!")).toBeTruthy();
});
