import React from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";

const rootRoute = {
  path: "/",

  getIndexRoute(location, callback) {
    require.ensure([], function (require) {
      callback(null, {
        component: require("./components/index").default,
      });
    });
  }
};

render((
  <Router history={browserHistory} routes={rootRoute} />
), document.getElementById("root"));
