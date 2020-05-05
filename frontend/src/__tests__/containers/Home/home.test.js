import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import {
  renderWithReduxCustomReducer,
  renderWithReduxAllReducers,
} from "utils/test";

import Home from "containers/Home";
import { initialState } from "redux/reducers/eventReducer";

afterEach(cleanup);

describe("CONTAINER - Home", () => {
  it("Home - Check if LEFT CARD render correctly - Default redux", async (done) => {
    const { getByTestId, queryByTestId } = renderWithReduxAllReducers(<Home />);

    expect(getByTestId("consult-card")).toBeTruthy();
    expect(queryByTestId("eventInfo-card")).toBeFalsy();

    done();
  });

  it("Home - Check if LEFT CARD render correctly - Custom redux", async (done) => {
    const { getByTestId, queryByTestId } = renderWithReduxCustomReducer(
      <Home />,
      {
        reducerName: "event",
        initialState: { ...initialState, eventHash: "123" },
      }
    );

    expect(queryByTestId("consult-card")).toBeFalsy();
    expect(getByTestId("eventInfo-card")).toBeTruthy();

    done();
  });

  it("Home - Check if RIGHT CARD render correctly - Default redux", async (done) => {
    const { getByTestId, queryByTestId } = renderWithReduxAllReducers(<Home />);

    expect(getByTestId("register-card")).toBeTruthy();
    expect(queryByTestId("successfully-card")).toBeFalsy();

    done();
  });

  it("Home - Check if RIGHT CARD render correctly - Custom redux", async (done) => {
    const { getByTestId, queryByTestId } = renderWithReduxCustomReducer(
      <Home />,
      {
        reducerName: "event",
        initialState: { ...initialState, eventHash: "123" },
      }
    );

    expect(queryByTestId("register-card")).toBeFalsy();
    expect(getByTestId("successfully-card")).toBeTruthy();

    done();
  });
});
