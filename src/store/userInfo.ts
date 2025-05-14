import { makeAutoObservable } from 'mobx'
import TaroStorage from "../utils/storage";

export interface UserInfoModel {
  // 模拟用户数据，可根据具体所需信息修改
  username: string;
  age: number;
  email: string;
  tab: 0 | 1;
  isLogin: boolean;
}

class UserInfoStore {
  userInfo: Partial<UserInfoModel> = {
    tab: 0,
    isLogin: false
  }
  constructor() {
    // 初始化的时候读取本地
    this.userInfo = TaroStorage.getItem('userInfo') || { tab: 0, isLogin: false }
    makeAutoObservable(this)
  }
  setUserInfo(userInfo: Partial<UserInfoModel>) {
    const info =  {
      ...this.userInfo,
      ...userInfo
    }
    this.userInfo = info
    TaroStorage.setItem('userInfo', info)
  }
  clearUserInfo() {
    this.userInfo = {
      tab: 0,
      isLogin: false
    }
    TaroStorage.setItem('userInfo', {
      tab: 0,
      isLogin: false
    })
  }
}

// userInfo只有单例模式
export default new UserInfoStore()
