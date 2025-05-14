import { makeAutoObservable } from "mobx";

export interface DeviceInfoModel {
  // 设备信息数据，根据自己所需的设备信息自定义
  capsuleHeight: number;  // 胶囊高度
  capsuleBottom: number;  // 胶囊下边界
  screenHeight: number;   // 屏幕高度
}

class DeviceInfoStore {
    deviceInfo: Partial<DeviceInfoModel> = {};
    constructor() {
        makeAutoObservable(this)
    }
    setDeviceInfo(info: Partial<DeviceInfoModel>) {
      this.deviceInfo = { ...info }
    }
}

export default new DeviceInfoStore()
