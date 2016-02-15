module.exports = {
  path: "seattlejs/",

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, <div>TODO</div>)
    })
  }
};
