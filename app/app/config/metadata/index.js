module.exports = {
  alert: {
      id: {
        domain: "DO_IDENTITY"
      },
      ttl: {
        domain: "DO_DURATION",
        required: false
      },
      msg: {
        domain: "DO_STRING",
        required: true
      },
      code: {
        domain: "DO_STRING",
        required: true
      }
  }
};
