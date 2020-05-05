import request from "./apiRequest";

export const postEventApi = async ({ name, lastName, email, eventDate }) => {
  try {
    const { data, status } = await request.post("/event", {
      name,
      lastName,
      email,
      eventDate,
    });

    return { data: data, status: status };
  } catch (error) {
    return {
      data: error?.response?.data || "Internal Error",
      status: error?.response?.status || "Internal Error",
    };
  }
};

export const getEventByHashApi = async ({ hash }) => {
  try {
    const { data, status } = await request.get(`/event/${hash}`);
    return { data: data, status: status };
  } catch (error) {
    console.error(error.response);
    return {
      data: error?.data || "Internal Error",
      status: error?.status || "Internal Error",
    };
  }
};

export const deleteEventByHashApi = async ({ hash }) => {
  try {
    const { data, status } = await request.delete(`/event/${hash}`);

    return { data: data, status: status };
  } catch (error) {
    console.error(error.response);
    return {
      data: error?.response?.data || "Internal Error",
      status: error?.response?.status || "Internal Error",
    };
  }
};
