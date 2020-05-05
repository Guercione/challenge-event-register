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
    eventDate: "2020-04-22T15:10:48.550Z",
    eventCreatedDate: "2020-05-04T10:36:04.760Z",
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
    expect(
      checkString(moment(data.eventDate).format("MMM Do YYYY"))
    ).toBeTruthy();
    expect(
      checkString(moment(data.eventCreatedDate).format("MMM Do YYYY"))
    ).toBeTruthy();

    done();
  });
});
