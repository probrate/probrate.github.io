const api = require('../util/api')

export const namespaced = true;

export const state = () => ({
  user: null,
  messageLogs: [],
  loadingUser: false
})

export const mutations = {
  pushMessage: (state, message) => {
    state.messageLogs.push(message);
  },

  popMessage: (state) => {
    state.messageLogs.shift();
  },
  
  setMessage: (state, messageLgs) => {
    state.messageLogs = messageLgs;
  },

  setUser: (state, user) => {
    state.user = user;
    console.log("User set", user);
  }
}

const manageMessage = async (context, pack) => {
  context.commit('pushMessage', pack.message);

  setTimeout(() => {
    context.commit('popMessage');
  }, 1500)
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
      if (data.success) {
        console.log(data);
        context.commit('setUser',data.user);
        localStorage.setItem('PROBRATE_LOCAL_USER', data.token);
      }
    } catch (err) {
      manageMessage(context, {
        success: false,
        message: err
      })
    }
  },

  logout: async (context) => {
    context.commit('setUser', null);
    localStorage.removeItem('PROBRATE_LOCAL_USER');
    manageMessage(context, {message: 'Logged out'});
  },

  fetchUser: async (context) => {
    if (context.state.user) {
      return;
    }
    let token = localStorage.getItem('PROBRATE_LOCAL_USER'); // {username, token}
    if (token) {
      let data = await api("POST", "/users/fetch", {token});
      if (data.success) {
        context.commit('setUser', data.user);
      } else {
        console.log('fetch failed');
      }
      manageMessage(context, data);
    }
  },

  verify: async (context, payload) => {
    let token = localStorage.getItem('PROBRATE_LOCAL_USER');
    if (token) {
      manageMessage(context, {message: "Verifying your account..."});
      payload.token = token;
      let data = await api("POST", "/users/updateProfile", payload);
      manageMessage(context, data);
      if (data.success) {
        context.commit('setUser', data.user);
      }
    } else {
      manageMessage(context, {message: "Wrong token. Please signout and try again."})
    }
  }
}