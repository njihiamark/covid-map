/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });
  it("renders total cases confirmed heading", () => {
    const heading = screen.getByRole("heading", {
      name: /Total cases confirmed/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders last updated indicator", () => {
    const last_updated = screen.getByText(/last updated/i);
    expect(last_updated).toBeInTheDocument();
  });

  it("renders total confirmed cases", () => {
    const confirmed_cases = screen.getByText(/confirmed cases/i);
    expect(confirmed_cases).toBeInTheDocument();
  });

  it("renders total recovered cases", () => {
    const recovered_cases = screen.getByText(/recovered cases/i);
    expect(recovered_cases).toBeInTheDocument();
  });

  it("renders total death cases", () => {
    const death_cases = screen.getByText(/death cases/i);
    expect(death_cases).toBeInTheDocument();
  });

  it("renders a filter input", () => {
    const filter_element = screen.getByTestId('filter-element')
    expect(filter_element).toBeInTheDocument();
  });

  it("renders a header", () => {
    const header_element = screen.getByTestId('header-nav')
    expect(header_element).toBeInTheDocument();
  });
});