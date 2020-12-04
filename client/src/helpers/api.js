import query from '../helpers/query';

const Api = {
  me: async token => {
    try {
      if (!token) throw Error('Token is required');
      return await query('/me', {
        headers: {
          authentication: token,
        },
      });
    } catch (error) {
      return { error };
    }
  },
  login: async ({ name, password }) => {
    try {
      if (!name || !password) throw Error('Name and Password required');
      return await query('/auth', {
        method: 'get',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });
    } catch (error) {
      return { error };
    }
  },
};

export default Api;
