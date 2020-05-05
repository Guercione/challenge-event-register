import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent } from "@testing-library/react";

import { renderWithReduxAllReducers } from "utils/test";

import Consult from "containers/Consult/consult";

afterEach(cleanup);

describe("CONTAINER - Consult", () => {
  it("Consult - Check if CONSULT render correctly - Default redux", async (done) => {
    const { getByTestId } = renderWithReduxAllReducers(<Consult />);
    const input = getByTestId("consult-input-hash");

    fireEvent.change(input, {
      target: { value: "123" },
    });

    expect(getByTestId("consult-card")).toBeTruthy();
    expect(input).toHaveValue("123");
    expect(getByTestId("consult-btn")).toBeTruthy();

    done();
  });

  it("Consult - Check if CONSULT button action works correctly - Default redux", async (done) => {
    const { getByTestId } = renderWithReduxAllReducers(<Consult />);
    const input = getByTestId("consult-input-hash");
    const button = getByTestId("consult-btn");

    // Empty hash
    fireEvent.change(input, {
      target: { value: "" },
    });

    fireEvent.click(button);

    expect(input).toHaveAttribute("error", "true");

    fireEvent.change(input, {
      target: { value: "a1675" },
    });

    fireEvent.click(button);

    expect(input).toHaveAttribute("error", "true");

    // Valid hash
    fireEvent.change(input, {
      target: { value: "c3b291" },
    });

    fireEvent.click(button);

    expect(input).toHaveAttribute("error", "false");

    done();
  });
});
