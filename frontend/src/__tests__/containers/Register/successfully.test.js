import React from "react";
import moment from "moment";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent } from "@testing-library/react";

import {
  renderWithReduxCustomReducer,
  renderWithReduxAllReducers,
} from "utils/test";

import Successfully from "containers/Register/successfully";
import { initialState } from "redux/reducers/eventReducer";

afterEach(cleanup);

describe("CONTAINER - Register", () => {
  const data = {
    name: "Guilherme",
    lastName: "Vecino",
    email: "guilherme.vecino@gmail.com",
    eventDate: "2020-04-22T15:10:48.550Z",
    eventCreatedDate: "2020-05-04T10:36:04.760Z",
  };

  it("Successfully - Check if HASH render correctly - Custom redux", async (done) => {
    const eventHash = "310cac";
    const { getByText } = renderWithReduxCustomReducer(<Successfully />, {
      reducerName: "event",
      initialState: { ...initialState, eventHash },
    });

    expect(getByText(eventHash)).toBeTruthy();

    done();
  });
});
