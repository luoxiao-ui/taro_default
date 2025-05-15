import {observer} from "mobx-react";
import {Text, View} from "@tarojs/components";
import DeviceInfo from "../../../store/deviceInfo";
import Taro from "@tarojs/taro";
import {ArrowLeft} from "@nutui/nutui-react-taro/dist/es/packages/calendarcard/icon";

export interface AppBarInterface {
  title: string;
  isBack?: boolean
}

const AppBar = observer((props: AppBarInterface) => {
  const { title, isBack = false } = props
  const deviceInfo = DeviceInfo.deviceInfo
  return <>
    <View style={{ position: 'fixed', width: '100%', zIndex: 100 }}>
      <View className={'r-ve-flex b-box'} style={{ height: deviceInfo.capsuleBottom, backgroundColor: '#6190e8' }}>
        <View onClick={()=> {
          if(isBack) {
            Taro.navigateBack()
          }
        }} className={'center-flex'} style={{ height: deviceInfo.capsuleHeight, width: 40 }}>
          { isBack ?
            <ArrowLeft /> : <></>
          }
        </View>
        <View className={'center-flex flex-1'} style={{ height: deviceInfo.capsuleHeight }}>
          <Text style={{ color: '#fff' }}>{title}</Text>
        </View>
        <View style={{ width: 40 }}></View>
      </View>
      <View style={{ height: 15, backgroundColor: '#6190e8' }}></View>
    </View>
    <View style={{ height: deviceInfo.capsuleBottom! + 15 }} />
  </>

})

export default AppBar
