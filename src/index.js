import React from "react";
import { render } from "react-dom";
import { Router, Link, browserHistory } from "react-router";


class Index extends React.Component {
  render() {
    // TODO: Auto-infer the links and such.
    // TODO: Style this stuff.
    return (
      <div>
        <h2>Builder Decks</h2>
        <ul>
          <Link to={"seattlejs"}>SeattleJS</Link>
          <ul>
            <Link to={"seattlejs/march2016"}>March 2016</Link>
          </ul>
        </ul>
      </div>
    );
  }
}

const rootRoute = {
  path: "/",
  indexRoute: {
    component: Index
  },

  getChildRoutes(location, callback) {
    require.ensure([], (require) => {
      callback(null, [
        require("./routes/seattlejs").default
      ]);
    });
  }
};

render((
  <Router history={browserHistory} routes={rootRoute} />
), document.getElementById("root"));
