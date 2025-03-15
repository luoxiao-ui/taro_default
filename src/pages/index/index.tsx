import {Button, Text, View} from "@tarojs/components";
import UserInfo from "../../store/userInfo";
import {observer} from "mobx-react";

const Index = observer(() => {
  return <View>
    <Text>{UserInfo.userInfo.username}{UserInfo.userInfo.age}</Text>
    <Button onClick={()=> {
      UserInfo.setUserInfo({
        username: '12',
        email: "21",
        age: 12
      })
    }}>按钮</Button>
  </View>
})

export default Index
