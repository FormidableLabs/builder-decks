import React from "react";
import { Link } from "react-router";

class Index extends React.Component {
  render() {
    // TODO: Auto-infer the links and such.
    // TODO: Style this stuff.
    return (
      <div>
        <h2>SeattleJS</h2>
        <ul>
          <Link to={"seattlejs/march2016"}>March 2016</Link>
        </ul>
      </div>
    );
  }
}

export default {
  path: "seattlejs",
  indexRoute: {
    component: Index
  },

  getChildRoutes(location, callback) {
    require.ensure([], (require) => {
      callback(null, [
        require("./routes/march2016").default
      ]);
    });
  }
};
