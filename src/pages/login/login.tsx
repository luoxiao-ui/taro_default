import {Input, Text, View} from "@tarojs/components";
import {AtAvatar, AtIcon} from 'taro-ui'
import {memo, useState} from "react";
import RowButton from "../../components/common/button";
// import Taro from "@tarojs/taro";
import UserInfo from "../../store/userInfo";

interface LoginInputProps {
  iconName: string
  placeholder?: string
  value: string,
  setValue: Function
}

const LoginInput = memo((props: LoginInputProps) => {
  const {iconName, placeholder, value, setValue} = props
  const [time, setTime] = useState<number>(60)
  const [isSend, setIsSend] = useState<boolean>(false)

  const sendCode = () => {
    setIsSend(true)
    let timer = time
    const timeFunc = setInterval(()=> {
      timer--
      setTime(timer)
      if(timer === 0) {
        clearInterval(timeFunc)
        setTime(60)
        setIsSend(false)
      }
    }, 1000)
  }

  return <View className={'w-full-box p-h-50 b-box m-t-50'}>
    <View className={'r-vc-flex p-h-20'} style={{border: '1px solid #ccc', borderRadius: 6, height: 42}}>
      <AtIcon value={iconName} size={20} color={'#ccc'}></AtIcon>
      <View className={'p-h-20 flex-1'}>
        <Input
          name='value'
          type='text'
          placeholder={placeholder}
          style={{fontSize: 14}}
          placeholderStyle={'color: #ccc;'}
          value={value}
          onInput={(e) => setValue(e.detail.value)}
        />
      </View>
      {iconName === 'bell' ? isSend ? <View className={'text_size_24 text_info'}>{time}s后重试</View> : <View onClick={sendCode} className={'text_size_24 text_primary'}>发送验证码</View> : <></>}
    </View>
  </View>
})

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    phone: '',
    code: ''
  })
  const onLogin = () => {
    // if(!loginForm.phone) {
    //   return Taro.showToast({
    //     icon: 'none',
    //     title: '手机号不能为空！'
    //   })
    // }
    // if(!loginForm.code) {
    //   return Taro.showToast({
    //     icon: 'none',
    //     title: '验证码不能为空！'
    //   })
    // }
    return UserInfo.setUserInfo({
      username: 'username',
      age: 21,
      email: 'email',
      isLogin: true,
    })
  }
  return (
    <View className='full-box center-flex c-flex'>
      <AtAvatar circle text={'logo'}></AtAvatar>
      <View className={'text_title_1 m-t-20'}>
        欢迎登录
      </View>
      <LoginInput value={loginForm.phone} setValue={(text: string) => setLoginForm({...loginForm, phone: text})}
                  iconName={'iphone'} placeholder={'请输入手机号'}/>
      <LoginInput value={loginForm.code} setValue={(text: string) => setLoginForm({...loginForm, code: text})}
                  iconName={'bell'} placeholder={'请输入验证码'}/>
      <View className={'w-full-box p-h-50 b-box m-t-50'}>
        <RowButton onPress={onLogin} name={'登录'}/>
      </View>
      <View className={'r-hsb-flex w-full-box p-h-50 b-box m-t-50'}>
        <View className={'text_info text_size_28'}>
          注册账号
        </View>
        <View className={'text_info text_size_28'}>
          忘记密码?
        </View>
      </View>
      <View className={'text_info m-t-100 text_size_28'}>
        登录即表示同意<Text className={'text_size_28 text_primary'}> 用户协议 </Text>和
        <Text className={'text_size_28 text_primary'}> 隐私政策 </Text>
      </View>
    </View>
  )
}

export default Login
