const query = async (input, init) => {
  try {
    const res = await window.fetch(input, init);
    const data = await res.json();
    if (!res.ok) throw data?.error;
    return { res, ...data };
  } catch (error) {
    return { error };
  }
};

export default query;
