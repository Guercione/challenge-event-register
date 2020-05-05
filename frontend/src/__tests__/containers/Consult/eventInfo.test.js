import React from "react";
import moment from "moment";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { renderWithReduxCustomReducer } from "utils/test";

import EventInfo from "containers/Consult/eventInfo";
import { initialState } from "redux/reducers/eventReducer";

afterEach(cleanup);

describe("CONTAINER - Consult", () => {
  const data = {
    name: "Guilherme",
    lastName: "Vecino",
    email: "guilherme.vecino@gmail.com",
    eventDate: moment(new Date()).format("MMM Do YYYY"),
    eventCreatedDate: moment(new Date()).format("MMM Do YYYY"),
  };

  it("EventInfo - Check if EVENTINFO render correctly - Custom redux", async (done) => {
    const { getAllByText } = renderWithReduxCustomReducer(<EventInfo />, {
      reducerName: "event",
      initialState: { ...initialState, ...data },
    });

    const checkString = (string) => {
      const nodes = getAllByText((content, node) => node?.textContent);
      return nodes[0]?.textContent.includes(string);
    };

    expect(checkString(data.name)).toBeTruthy();
    expect(checkString(data.lastName)).toBeTruthy();
    expect(checkString(data.email)).toBeTruthy();
    expect(checkString(data.eventDate)).toBeTruthy();
    expect(checkString(data.eventCreatedDate)).toBeTruthy();

    done();
  });
});
