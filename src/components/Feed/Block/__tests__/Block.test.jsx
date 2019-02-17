import React from "react";
import { mount } from "enzyme";
import { Block } from "./../Block";

describe("<Block />", () => {
  it("Should render without error", () => {
    mount(<Block />);
  });
});
