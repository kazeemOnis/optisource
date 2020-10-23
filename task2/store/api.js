export const actions = {
  async getResource({ commit }, params) {
    try {
      const { route = '' } = params;
      const { data, status} = await this.$axios.get(`${route}`);
      console.log(data);
      if (status === 200) {
        return data.items[0];
      }
    } catch (error) {
      console.log('An error occured');
    }
  },
};
