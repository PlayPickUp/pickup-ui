import React from "react";
import { render, waitFor } from "@testing-library/react";
import jssSerializer from 'jss-snapshot-serializer';
expect.addSnapshotSerializer(jssSerializer);
import ThemeProvider from "../ThemeProvider";
import FeedCard from "./index";

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <FeedCard
        publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
        publisherName="Prime Time Sports"
        publishedAt="23m"
        title="Chiefs vs. Ravens Who wins?"
        image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
        pickCount={2}
        timeLeft={new Date()}
        picks={[
          { label: "Ravens", value: "Ravens" },
          { label: "Chiefs", value: "Chiefs" },
        ]}
        expanded={false}
      />
      <FeedCard
        publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
        publisherName="Prime Time Sports"
        publishedAt="23m"
        title="Chiefs vs. Ravens Who wins?"
        image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
        pickCount={2}
        timeLeft={new Date()}
        picks={[
          { label: "Ravens", value: "Ravens" },
          { label: "Chiefs", value: "Chiefs" },
        ]}
        expanded={true}
      />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Passes and renders props", () => {
  const { getByTestId, getByRole, getByText } = render(
    <ThemeProvider>
      <FeedCard
        publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
        publisherName="Prime Time Sports"
        publishedAt="23m"
        title="Chiefs vs. Ravens Who wins?"
        image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
        pickCount={2}
        timeLeft={new Date()}
        picks={[
          { label: "Ravens", value: "Ravens" },
          { label: "Chiefs", value: "Chiefs" },
        ]}
        expanded={false}
      />
    </ThemeProvider>
  );
  // image
  expect(getByTestId("featuredImage").getAttribute("style")).toContain(
    "background-image: url(https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0)"
  );
  // publisherIcon
  expect(getByRole("img").getAttribute("src")).toEqual(
    "https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
  );
  // publishedAt
  expect(getByText("23m")).toBeTruthy();
  // title
  expect(getByText("Chiefs vs. Ravens Who wins?")).toBeTruthy();
  // pickCount
  expect(getByText("Picked")).toBeTruthy();
  // timeLeft
  expect(getByText("CLOSED")).toBeTruthy();
  // picks
  expect(getByRole("button", { name: /Chiefs/i })).toBeTruthy();
});

test("Shows remaining time when time is left", async () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const { getByText } = render(
    <ThemeProvider>
      <FeedCard
        publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
        publisherName="Prime Time Sports"
        publishedAt="23m"
        title="Chiefs vs. Ravens Who wins?"
        image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
        pickCount={2}
        timeLeft={tomorrow}
        picks={[
          { label: "Ravens", value: "Ravens" },
          { label: "Chiefs", value: "Chiefs" },
        ]}
        expanded={false}
      />
    </ThemeProvider>
  );
  await waitFor(() => expect(getByText("23h 59m")).toBeTruthy());
});
