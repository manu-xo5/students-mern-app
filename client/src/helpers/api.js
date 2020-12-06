import query from '../helpers/query';

const Api = {
  me: async token => {
    if (!token) return { error: 'Token is required' };
    return await query('/me', {
      method: 'get',
      headers: {
        authorization: token,
      },
    });
  },
  login: async ({ name, password }) => {
    if (!name || !password) {
      return { error: 'Name and Password required' };
    }
    return await query('/auth', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });
  },
  signup: async ({
    name,
    password,
    phone,
    dob,
    college,
    address,
    identity,
    note,
  }) =>
    query('/students', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
        phone,
        dob,
        college,
        address,
        identity,
        note,
      }),
    }),
  updateProfile: async ({ token, note }) => {
    if (note === undefined || note == null) {
      return { error: 'Note is required' };
    }
    return await query('/me', {
      method: 'put',
      headers: {
        'content-type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({
        note,
      }),
    });
  },
  deleteProfile: token =>
    query(`/students`, {
      method: 'delete',
      headers: {
        authorization: token,
      },
    }),
  getStudents: () => query('/students'),
};

export default Api;
