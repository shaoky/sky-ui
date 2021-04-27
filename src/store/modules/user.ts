export interface UserEntity {
  id: number;
  name: string;
}

const state = {
  userBaseData: {}
};

const mutations = {
  setUser(state: any, user: UserEntity) {
    state.userBaseData = user;
  }
};

export default {
  state,
  mutations
};
