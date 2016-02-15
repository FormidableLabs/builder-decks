import React from "react";

class Index extends React.Component {
  render() {
    return (<div>TODO</div>);
  }
}

export default {
  path: "seattlejs",

  getChildRoutes(location, callback) {
    require.ensure([], function (require) {
      callback(null, [
        require("./routes/march2016").default,
      ]);
    });
  },

  getIndexRoute(location, callback) {
    require.ensure([], function (require) {
      callback(null, {
        component: Index,
      });
    });
  }
};
