import UserStore from './user.store';

export class RootStore {
  UserStore: UserStore;

  constructor() {
    this.UserStore = new UserStore(this);
  }
}

export default new RootStore();