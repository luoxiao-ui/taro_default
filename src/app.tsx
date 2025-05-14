import { Component, PropsWithChildren } from 'react'
import {Provider} from 'mobx-react'
import './app.scss'
import Taro from "@tarojs/taro";
import DeviceInfo from "./store/deviceInfo";

class App extends Component<PropsWithChildren> {
  componentDidMount () {
    const { bottom, height } = Taro.getMenuButtonBoundingClientRect()
    DeviceInfo.setDeviceInfo({
      capsuleHeight: height,
      capsuleBottom: bottom
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
