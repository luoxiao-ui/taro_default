import { makeAutoObservable } from 'mobx'
import TaroStorage from "../utils/storage";

export interface UserInfoModel {
  username: string;
  age: number;
  email: string;
}

class UserInfoStore {
  userInfo: Partial<UserInfoModel> = {}
  constructor() {
    // 初始化的时候读取本地
    this.userInfo = TaroStorage.getItem('userInfo') || {}
    makeAutoObservable(this)
  }
  setUserInfo(userInfo: UserInfoModel) {
    this.userInfo = userInfo
    TaroStorage.setItem('userInfo', userInfo)
  }
}

// userInfo只有单例模式
export default new UserInfoStore()
