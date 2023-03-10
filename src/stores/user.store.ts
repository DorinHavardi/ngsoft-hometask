import {makeAutoObservable} from 'mobx';
import {RootStore} from '.';

export interface IUser {
  userId: number;
  userFirstname: string;
  userLastname: string;
  userBirthYear: number;
  requestReason: string;
}

export default class UserStore {
  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore;
    makeAutoObservable(this);
  }
}
