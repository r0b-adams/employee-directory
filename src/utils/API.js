import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getEmps: function() {
    return axios.get('https://randomuser.me/api/?results=50'); // get 20 results for now
  }
};
