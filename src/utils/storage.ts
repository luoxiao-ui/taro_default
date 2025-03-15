import Taro from "@tarojs/taro";
import Utils from "./utils";

export type StorageKey = 'userInfo'

// 只封装同步模式，异步有需要再说
const TaroStorage = {
  getItem(key: StorageKey) {
    try {
      const { value, expired } = Taro.getStorageSync(key)
      if(expired && Date.now() > expired) {
        Taro.removeStorageSync(key)
        return null
      }
      return value
    } catch (e) {
      Utils.print('----TaroStorage.getItem err----', e)
    }
  },
  setItem<T>(key: StorageKey, value: T, expireTime?: number) {
    try {
      const expired = expireTime ? Date.now() + expireTime * 24 * 60 * 60 * 1000 : null
      const data = {
        value,
        expired
      }
      Taro.setStorageSync(key, data)
    } catch (e) {
      Utils.print('----TaroStorage.setItem err----', e)
    }
  },
  getStorageInfo() {
    try {
      Utils.print('----Taro.getStorageInfoSync----', Taro.getStorageInfoSync())
      return Taro.getStorageInfoSync()
    } catch (e) {
      Utils.print('----TaroStorage.getStorageInfoSync err----', e)
    }
  },
  removeItem(key: StorageKey) {
    try {
      return Taro.removeStorageSync(key)
    } catch (e) {
      Utils.print('----TaroStorage.removeItem err----', e)
    }
  },
  clear() {
    try {
      Taro.clearStorageSync()
    } catch (e) {
      Utils.print('----TaroStorage.clear err----', e)
    }
  }
}

export default TaroStorage
