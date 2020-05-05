export const requestStatusCheck = (action, api) => {
  const httpErrors = {
    200: { data: api.data, error: "" },
    204: { data: "", error: "" },
    400: { data: api.data, error: "400 - One or more itens are missing" },
    404: { data: api.data, error: "404 - Item not found" },
    500: { data: api.data, error: `500 - Error on ${action} try again later` },
  };

  return httpErrors[api.status] || httpErrors[500];
};
