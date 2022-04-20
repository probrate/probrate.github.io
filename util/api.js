const axios = require('axios');

const apiCall = async (requestType, route, body) => {
  try {
    const backend = "https://probrate-backend.onrender.com/api"
    const data = (requestType === 'GET' ? await axios.get(backend + route, body) : await axios.post(backend + route, body));
    return data.data;
  } catch (err) {
    return {
      success: false,
      message: err
    };
  }
};

module.exports = apiCall;