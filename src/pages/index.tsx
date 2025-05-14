// 启动页
import {observer} from "mobx-react";
import UserInfo from "../store/userInfo";
import Login from "./login/login";
import Home from "./home";

const Index = observer(() => {
  const userInfo = UserInfo.userInfo
  return userInfo.isLogin ? <Home /> : <Login />
})

export default Index
