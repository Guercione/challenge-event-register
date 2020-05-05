const httpStatus = {
  400: (req, res, message) =>
    res.status(400).send({
      error: `Bad request on method ${req.method} - ${req.path}`,
      message,
    }),

  404: (req, res, message) =>
    res.status(404).send({
      error: `No data found on method ${req.method} - ${req.path}`,
      message,
    }),

  500: (req, res, message) =>
    res.status(500).send({ error: `Internal error on ${req.path}`, message }),
};

module.exports = ({ code, request, response, error }) => {
  if (httpStatus[code]) {
    return httpStatus[code](request, response, error);
  }

  return httpStatus[500](request, response, error);
};
