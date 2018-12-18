import { mount } from "enzyme";
import React from "react";
import { MemoryRouter, StaticRouter } from "react-router-dom";

import { RouteWithStatus } from "app/containers/shared";
import Routes, { routes } from "./Routes";

describe("Routes", () => {
  for (const { Component, path = "/404" } of routes) {
    it(`${path} path should redirect to ${Component.name} component`, () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[path]} initialIndex={0}>
          <Routes />
        </MemoryRouter>
      );
      expect(wrapper.find(Component)).toHaveLength(1);
    });
  }

  it("adds status when available", () => {
    const wrapper = mount(
      <StaticRouter location="/404" context={{}}>
        <RouteWithStatus code={404}>
          <p>hello</p>
        </RouteWithStatus>
      </StaticRouter>
    );
    expect(wrapper.prop("context")).toEqual({ statusCode: 404 });
  });
});
