import {observer} from "mobx-react";
import {Text, View} from "@tarojs/components";
import DeviceInfo from "../../../store/deviceInfo";

export interface AppBarInterface {
  title: string;
}

const AppBar = observer((props: AppBarInterface) => {
  const { title } = props
  const deviceInfo = DeviceInfo.deviceInfo
  return <>
    <View style={{ position: 'fixed', width: '100%', zIndex: 999999 }}>
      <View className={'r-ve-flex b-box'} style={{ height: deviceInfo.capsuleBottom, backgroundColor: '#6190e8' }}>
        <View className={'center-flex'} style={{ height: deviceInfo.capsuleHeight }}>
          <Text style={{ color: '#fff' }}>{title}</Text>
        </View>
      </View>
      <View style={{ height: 15, backgroundColor: '#6190e8' }}></View>
    </View>

    <View style={{ height: deviceInfo.capsuleBottom! + 15 }}></View>
  </>

})

export default AppBar
