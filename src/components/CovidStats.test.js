import React from "react";
import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import CovidStats from "./CovidStats";

describe("CovidStats", () => {
  it("should initialize with no data", () => {
    const {queryByTestId } = render(<CovidStats />, {wrapper: RecoilRoot})
    const loading = queryByTestId("loading");
    expect(loading.innerHTML).toEqual("Loading...");
  });
});
