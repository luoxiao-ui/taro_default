import {observer} from "mobx-react";
import AppBar from "../../components/common/appBar";
import {
  BackTop,
  Button,
  Cell,
  Col,
  Divider,
  Grid,
  Image,
  Overlay,
  pxTransform,
  Row,
  Space,
} from '@nutui/nutui-react-taro'
import {Text, View} from "@tarojs/components";
import {CSSProperties, useState} from "react";
import Taro from "@tarojs/taro";
import UserInfo from "../../store/userInfo";

const Home = observer(() => {
  const [show, setShow] = useState(false)
  const flexContent: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: pxTransform(40),
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    borderRadius: pxTransform(6),
    backgroundColor: '#ff8881',
    fontSize: pxTransform(14),
  }
  const flexContentLight: CSSProperties = {
    ...flexContent,
    backgroundColor: '#ffc7c4',
  }
  return <>
    <AppBar title={'nut-ui 组件'} />
    <View className={'p-h-20 b-box'}>
      <View className={'m-t-20'}>
        <Text className={'text_info text_size_24'}>基础组件</Text>
      </View>
      <Cell title={'按钮组件'} style={{ flexWrap: 'wrap' }}>
        <Button type="primary" className={'m-10'}>
          Primary
        </Button>
        <Button type="info" className={'m-10'}>
          Info
        </Button>
        <Button type="default" className={'m-10'}>
          Default
        </Button>
        <Button type="danger" className={'m-10'}>
          Danger
        </Button>
        <Button type="warning" className={'m-10'}>
          Warning
        </Button>
        <Button type="success" className={'m-10'}>
          Success
        </Button>
      </Cell>
      <Cell title="我是标题" extra="描述文字" />
      <Cell>
        <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
          <View style={{ width: pxTransform(98) }}>
            <Image
              src={'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'}
              mode="aspectFit"
              width={80}
              height={80}
              radius={40}
            />
          </View>
          <View style={{ width: pxTransform(98) }}>
            <Image
              src={'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'}
              mode="scaleToFill"
              width={80}
              height={80}
              radius={40}
            />
          </View>
          <View style={{ width: pxTransform(98) }}>
            <Image
              src={'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'}
              mode="scaleToFill"
              width={80}
              height={80}
              radius={10}
            />
          </View>
        </View>
      </Cell>
      <Cell>
        <Cell onClick={()=> setShow(true)}>
          <View>点击按钮显示遮罩层</View>
        </Cell>

        <Overlay
          visible={show}
          onClick={()=> setShow(!show)}
          zIndex={3000}
          afterShow={() => {
            console.log('afterShow')
          }}
          afterClose={() => {
            console.log('afterClose')
          }}
        />
      </Cell>
      <Cell>
        <Divider>文本</Divider>
      </Cell>
      <Cell>
        <Grid>
          {Array.from({ length: 8 }, (_, index) => (
            <Grid.Item key={index} text="文字">
              <Image />
            </Grid.Item>
          ))}
        </Grid>
      </Cell>
      <Cell>
        <Row>
          <Col span="12">
            <View style={flexContent}>span:12</View>
          </Col>
          <Col span="12">
            <View style={flexContentLight}>span:12</View>
          </Col>
        </Row>
      </Cell>
      <Cell>
        <Space>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </Cell>
      <Cell onClick={()=> Taro.navigateTo({
        url: '/pages/commonList/index'
      })}>
        <Text>列表组件</Text>
      </Cell>
      <Cell>
        <View style={{ height: 200 }}>
          <Button onClick={()=> {
            UserInfo.clearUserInfo()
          }}>退出登录</Button>
        </View>
      </Cell>
    </View>
    <BackTop />
  </>
})

export default Home
