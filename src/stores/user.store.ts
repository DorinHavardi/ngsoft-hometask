import {makeAutoObservable, observable} from 'mobx';
import {RootStore} from '.';

export interface IUserDetails {
  firstname: string;
  lastname?: string;
  id?: string;
  birthYear?: number;
  requestReason?: string;
}

export default class UserStore {
  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore;
    makeAutoObservable(this);
  }

  private _currentUser?: IUserDetails = observable({} as IUserDetails);

  setUserDetails = (value: IUserDetails) => {
    return (this._currentUser = value as IUserDetails);
  };

  get currentUser() {
    return this._currentUser;
  }
}
