import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent } from "@testing-library/react";

import { renderWithReduxAllReducers } from "utils/test";

import Register from "containers/Register/register";

afterEach(cleanup);

describe("CONTAINER - Regitser", () => {
  const data = {
    name: "Guilherme",
    lastName: "Vecino",
    email: "guilherme.vecino@gmail.com",
    eventDate: new Date(),
  };

  it("Regitser - Check if RESGISTER render correctly", async (done) => {
    const { getByTestId, container } = renderWithReduxAllReducers(<Register />);
    const inputs = Array.from(container.querySelectorAll("input"));

    expect(inputs).toHaveLength(4);
    expect(getByTestId("register-btn")).toBeTruthy();

    done();
  });

  it("Regitser - Check if REGISTER validate form correctly - Default redux", async (done) => {
    const { getByTestId, container } = renderWithReduxAllReducers(<Register />);
    const inputs = Array.from(container.querySelectorAll("input"));
    const button = getByTestId("register-btn");

    fireEvent.click(button);

    // EMPTY INPUT
    inputs.forEach((input) => expect(input).toHaveAttribute("error", "true"));

    inputs.forEach((input) =>
      fireEvent.change(input, {
        target: { value: "abc" },
      })
    );

    fireEvent.click(button);

    // INVALID INPUT
    inputs.forEach((input) => expect(input).toHaveAttribute("error", "true"));

    inputs.forEach((input) =>
      fireEvent.change(input, {
        target: { value: data[input.name] },
      })
    );

    done();
  });
});
