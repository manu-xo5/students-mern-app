import AppError from "../class/AppError";

/**
 *
 * @param {Response} res
 */

const validate = (res) => {
  const { headers, status } = res;
  if (!headers.get("content-type").includes("application/json")) {
    throw new AppError("Server Error.");
  }

  if (status === 401) {
    throw new AppError("Seems you aren't logged in");
  }

  if (status === 400) {
    throw new AppError("Bad Request. Unexpected?. Expected Data Expected");
  }
};

/**
 *
 * @param {RequestInfo} input
 * @param {RequestInit} [init]
 */

const query = async (input, init) => {
  try {
    const res = await window.fetch(input, init);
    validate(res);
    return await res.json();
  } catch (error) {
    if (error instanceof AppError) alert(error.message);
    else console.error(error);
    return { error: error.message };
  }
};

export default query;
