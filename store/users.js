const api = require('../util/api')

export const state = () => ({
  user: null,
  messageLogs: [],
})

export const mutations = {
  pushMessage: (state, message) => {
    state.messageLogs.push(message);
  },

  popMessage: (state) => {
    state.messageLogs.shift();
  },

  fetchUser: (state) => {
    if (state.user) {
      return;
    }
    let localData = localStorage.getItem('PROBRATE_LOCAL_USER'); // {username, token}
    if (localData) {
      state.username = localData.username;
      state.token = localData.token;
    }
  },
}

const manageMessage = async (context, pack) => {
  context.commit('pushMessage', {
    success: pack.success,
    message: pack.message
  });
  setTimeout(() => {
    context.commit('popMessage')
  }, 2000);
}

export const actions = {
  register: async (context, payload) => {
    try {
      let data = await api("POST", "/auth/register", payload);
      manageMessage(context, data);
    } catch (err) {
      manageMessage(context, {
        success: false,
        message: err
      })
    }
  },

  login: async (context, payload) => {
    try {
      let data = await api("POST", "/auth/login", payload);
      manageMessage(context, data);
      context.commit('setUser', {
        user: data.user,
        token: data.token
      })
    } catch (err) {
      manageMessage(context, {
        success: false,
        message: err
      })
    }
  }


}