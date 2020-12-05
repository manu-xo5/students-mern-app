const query = async (input, init) => {
  try {
    const res = await window.fetch(input, init);
    const data = await res.json();
    if (!res.ok) {
      throw Error(
        data?.error || "Not Specified Error (default error msg, for dev only)"
      );
    }
    return { res, ...data };
  } catch (error) {
    return { error: error.message };
  }
};

export default query;
