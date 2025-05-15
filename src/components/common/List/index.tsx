import {useEffect} from "react";
import Taro, {usePullDownRefresh} from "@tarojs/taro";
import {View} from "@tarojs/components";

const List = () => {
  useEffect(() => {
  }, []);
  usePullDownRefresh(()=> {
    console.log('刷新')
    setTimeout(()=> {
      Taro.stopPullDownRefresh()
    })
  })
  return <View>
    <View style={{ height: 20, border: '1px solid red' }}>1</View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>
    <View style={{ height: 20, border: '1px solid red' }}></View>

  </View>
}

export default List
