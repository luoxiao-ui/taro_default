import AppBar from "../../components/common/appBar";
import {PullToRefresh, pxTransform} from "@nutui/nutui-react-taro";
import Taro, {useReachBottom} from "@tarojs/taro";
import {Text, View} from "@tarojs/components";
import { useEffect, useState} from "react";
const ListPage = () => {
  const [defaultList, setDefaultList] = useState<string[]>([])
  useEffect(() => {
    init()
  }, []);

  const init = () => {
    for (let i = 0; i < 100; i++) {
      defaultList.push(`${i}`)
    }
    setDefaultList([...defaultList])
  }

  useReachBottom(()=> {
    console.log('到底')
  })
  return <>
    <AppBar isBack title={'无限列表页面'} />
    <PullToRefresh
      style={{
        backgroundColor: `var(--nutui-gray-3)`,
        color: 'var(--nutui-gray-7)',
      }}
      onRefresh={() =>
        new Promise((resolve) => {
          Taro.showToast({
            title: '😊',
            icon: 'none',
          })
          resolve('done')
        })
      }
      renderIcon={(_status) => {
        return (
          <Text>
            icon
          </Text>
        )
      }}
    >
      {Array.from({length: 101}, (_, i) => i).map((item) => (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: pxTransform(50),
          }}
          key={item}
        >
          {item}
        </View>
      ))}
    </PullToRefresh>
  </>
}

export default ListPage
