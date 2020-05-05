const crypto = require("crypto");

const HandleHttpError = require("../utils/handleHttpError");

const Event = require("../database/modules/Event");

module.exports = {
  async index(request, response) {
    try {
      const event = await Event.find({});

      if (event && event.length) return response.send(event);

      return HandleHttpError({ code: 404, request, response });
    } catch (error) {
      console.log(error);
      return HandleHttpError({ code: 500, request, response, error });
    }
  },

  async get(request, response) {
    try {
      const event = await Event.findOne({ eventHash: request.params.id });

      if (event) return response.send(event);

      return HandleHttpError({ code: 404, request, response });
    } catch (error) {
      console.log(error);
      return HandleHttpError({ code: 500, request, response, error });
    }
  },

  async create(request, response) {
    try {
      const { name, lastName, email, eventDate } = request.body;

      if (!name || !lastName || !email || !eventDate) {
        return HandleHttpError({
          code: 400,
          request,
          response,
          error: "One or more fields are missing",
        });
      }

      const eventHash = crypto.randomBytes(3).toString("hex");

      if (await Event.create({ ...request.body, eventHash }))
        return response.status(200).send({ eventHash });
    } catch (error) {
      console.log(error);
      return HandleHttpError({ code: 500, request, response, error });
    }
  },

  async delete(request, response) {
    try {
      const event = await Event.findOneAndDelete({
        eventHash: request.params.id,
      });

      if (event) return response.status(204).send();

      return HandleHttpError({ code: 404, request, response });
    } catch (error) {
      console.log(error);
      return HandleHttpError({ code: 500, request, response, error });
    }
  },
};
