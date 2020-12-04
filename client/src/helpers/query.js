const query = async (...args) => {
  const res = await window.fetch(...args);
  const data = await res.json();
  if (res.status >= 400 && res.status <= 500) {
    throw Error(
      data?.error || 'Not Specified Error (default error msg, for dev only)'
    );
  }
  return { res, ...data };
};

export default query;
