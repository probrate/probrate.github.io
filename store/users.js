const api = require('../util/api')

export const state = () => ({
  username: null,
  messageLogs: [],
  token: null,
  voted: null
})

export const mutations = {
  pushMessage: (state, message) => {
    state.messageLogs.push(message);
  },
  popMessage: (state) => {
    state.messageLogs.shift();
  },

  fetchUserLocal: (state) => {
    if (state.username && state.token) {
      return;
    }
    let localData = localStorage.getItem('PROBRATE_LOCAL_USERNAME');
    if (localData) {
      state.username = localData.username;
      state.token = localData.token;
    }
  },

  setVotedList: (state, votedList) => {
    state.voted = votedList;
  }
}

const manageMessage = async (context, message) => {
  context.commit('pushMessage', message);
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

  },

  getVotedList: async (context, payload) => {
    
  }
}