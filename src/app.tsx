import { Component, PropsWithChildren } from 'react'
import {Provider} from 'mobx-react'
import './app.scss'
import UserInfo from "./store/userInfo";
import Taro from "@tarojs/taro";

class App extends Component<PropsWithChildren> {
  componentDidMount () {
    if(!UserInfo.userInfo.username) {
      Taro.redirectTo({
        url: 'pages/login/login'
      })
    }
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
