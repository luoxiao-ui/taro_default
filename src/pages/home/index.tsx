import {observer} from "mobx-react";
import {
  AtCard,
  AtIcon,
  AtButton,
  AtFab,
  AtAvatar,
  AtBadge,
  AtCountdown,
  AtCurtain,
  AtLoadMore,
  AtNoticebar,
  AtTag,
  AtTimeline,
  AtDivider,
  AtSteps,
  AtTabBar,
  AtActionSheet,
  AtActionSheetItem,
  AtActivityIndicator,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtProgress,
  AtToast,
  AtSwipeAction,
  AtMessage,
  AtForm,
  AtInput,
  AtInputNumber,
  AtRadio,
  AtCheckbox,
  AtRate,
  AtSwitch,
  AtTextarea,
  AtList,
  AtListItem,
  AtSearchBar,
  AtSlider,
  AtImagePicker,
  AtRange,
  AtGrid,
  AtFloatLayout,
  AtAccordion,
  AtNavBar,
  AtTabs, AtTabsPane, AtSegmentedControl, AtPagination, AtDrawer, AtIndexes, AtCalendar
} from "taro-ui";
import AppBar from "../../components/common/appBar";
import {Image, Text, View, Swiper, SwiperItem, Button, Picker} from "@tarojs/components";
import {useState} from "react";
import RowButton from "../../components/common/button";
import Taro from "@tarojs/taro";
import UserInfo from "../../store/userInfo";

const Home = observer(() => {
  const [curtain, setCurtain] = useState<boolean>(false)
  const [acShow, setAcShow] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [toast, setToast] = useState<boolean>(false)
  const [float, setFloat] = useState<boolean>(false)
  const [accordion, setAccordion] = useState<boolean>(false)
  const [drawer, setDrawer] = useState<boolean>(false)
  return <>
    {!UserInfo.userInfo.tab ? <>
      <AppBar title={'UI组件展示'}/>
      <View style={{height: 20}}></View>
      <View className={'b-box p-h-20'}>
        基础组件
      </View>
      <AtCard className={'m-t-20'} title={'AtIcon 图标组件'}>
        <AtIcon value={'analytics'} size={30} color={'#6190e8'}/>
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtButton 按钮组件'}>
        <AtButton type='primary'>按钮文案</AtButton>
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtFab 浮动按钮组件'}>
        <AtFab>
          <Text className='at-fab__icon at-icon at-icon-menu'></Text>
        </AtFab>
      </AtCard>
      <View className={'b-box p-h-20 m-t-20'}>
        视图组件
      </View>
      <AtCard className={'m-t-20'} title={'AtAvatar 头像组件'}>
        <AtAvatar circle text='凹凸实验室'></AtAvatar>
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtAvatar 文章组件'}>
        <View className='at-article__h1'>
          这是一级标题这是一级标题
        </View>
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtBadge 徽标组件'}>
        <AtBadge value={10} maxValue={99}>
          <AtButton size='small'>按钮</AtButton>
        </AtBadge>
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtCountdown 倒计时组件'}>
        <AtCountdown
          format={{hours: ':', minutes: ':', seconds: ''}}
          seconds={10}
        />
        <AtCountdown
          isCard
          minutes={1}
          seconds={10}
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtCurtain 幕帘组件'}>
        <AtCurtain
          isOpened={curtain}
          onClose={() => setCurtain(false)}
        >
          <Image
            style='width:100%;height:250px'
            src={''}
          />
        </AtCurtain>
        <AtButton
          onClick={() => setCurtain(true)}>
          右上关闭幕帘
        </AtButton>
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtLoadMore 页面提示组件'}>
        <AtLoadMore
          onClick={() => {
          }}
          status={'loading'}
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtNoticebar 通告栏提示组件'}>
        <AtNoticebar>这是 NoticeBar 通告栏</AtNoticebar>
        <AtNoticebar className={'m-t-20'} marquee>
          这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
        </AtNoticebar>
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtTag 标签组件'}>
        <AtTag>标签</AtTag>
        <AtTag type='primary' circle>标签</AtTag>
        <AtTag size='small'>标签</AtTag>
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtTimeline 时间轴组件'}>
        <AtTimeline
          pending
          items={[
            {title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle'},
            {title: '吃早餐', content: ['牛奶+面包', '餐后记得吃药'], icon: 'clock'},
            {title: '上班', content: ['查看邮件', '写PPT', '发送PPT给领导'], icon: 'clock'},
            {title: '睡觉', content: ['不超过23:00'], icon: 'clock'}
          ]}
        >
        </AtTimeline>
      </AtCard>
      <AtCard className={'m-t-20'} title={'Swiper 滑动视图容器组件'}>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtDivider 分隔符组件'}>
        <AtDivider content='没有更多了' fontColor='#ed3f14' lineColor='#ed3f14'/>
        <AtDivider content='没有更多了' fontColor='#ff9900' lineColor='#ff9900'/>
        <AtDivider content='没有更多了' fontColor='#2d8cf0' lineColor='#2d8cf0'/>
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtSteps 步骤条组件'}>
        <AtSteps
          items={[
            {
              title: '步骤一',
              desc: '这里是额外的信息，最多两行',
              status: 'success'
            },
            {
              title: '步骤二',
              desc: '这里是额外的信息，最多两行'
            },
            {
              title: '步骤三',
              desc: '这里是额外的信息，最多两行',
              status: 'error'
            }
          ]}
          current={1}
          onChange={() => {
          }}
        />
      </AtCard>
      <View className={'b-box p-h-20'}>
        操作反馈
      </View>
      <AtCard className={'m-t-20'} title={'AtActionSheet 动作面板组件'}>
        <AtActionSheet isOpened={acShow} onClose={()=> setAcShow(false)}>
          <AtActionSheetItem>
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem>
            按钮二
          </AtActionSheetItem>
        </AtActionSheet>
        <View onClick={()=> setAcShow(true)}>
          按钮
        </View>
      </AtCard>
      <AtCard className={'m-t-20'} title={'ActivityIndicator 活动指示器组件'}>
        <AtActivityIndicator></AtActivityIndicator>
      </AtCard>
      <AtCard className={'m-t-20'} title={'Modal 模态框组件'}>
        <AtModal isOpened={modal} onClose={()=> setModal(false)}>
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
          </AtModalContent>
          <AtModalAction> <Button>取消</Button> <Button>确定</Button> </AtModalAction>
        </AtModal>
        <View onClick={()=> setModal(true)}>
          modal
        </View>
      </AtCard>
      <AtCard className={'m-t-20'} title={'Progress 进度条组件'}>
        <AtProgress percent={50} />
      </AtCard>
      <AtCard className={'m-t-20'} title={'Toast 轻提示组件'}>
        <AtToast onClose={()=> setToast(false)} isOpened={toast} text="1234" icon="{icon}"></AtToast>
        <Text onClick={()=> setToast(true)}>toast</Text>
      </AtCard>
      <AtCard className={'m-t-20'} title={'SwipeAction 滑动操作组件'}>
        <AtSwipeAction options={[
          {
            text: '取消',
            style: {
              backgroundColor: '#6190E8'
            }
          },
          {
            text: '确认',
            style: {
              backgroundColor: '#FF4949'
            }
          }
        ]}>
          <View className='normal'>AtSwipeAction 一般使用场景</View>
        </AtSwipeAction>
      </AtCard>
      <AtCard className={'m-t-20'} title={'Message 消息通知组件'}>
        <AtMessage />
        <AtButton onClick={()=> Taro.atMessage({'message': '消息通知'})}>
          普通消息
        </AtButton>
        <AtButton onClick={()=> Taro.atMessage({
          'message': '消息通知',
          'type': 'success',
        })}>
          成功消息
        </AtButton>
        <AtButton onClick={()=> Taro.atMessage({
          'message': '消息通知',
          'type': 'error',
        })}>
          错误消息
        </AtButton>
        <AtButton onClick={()=> ()=> Taro.atMessage({
          'message': '消息通知',
          'type': 'warning',
        })}>
          警告消息
        </AtButton>
      </AtCard>
      <View className={'b-box p-h-20'}>
        表单组件
      </View>
      <AtCard className={'m-t-20'} title={'AtForm 表单组件'}>
        <AtForm
          onSubmit={()=> {}}
          onReset={()=> {}}
        >
          <AtInput
            name='value'
            title='文本'
            type='text'
            placeholder='单行文本'
            value={''}
            onChange={()=> {}}
          />
          <AtButton formType='submit'>提交</AtButton>
          <AtButton formType='reset'>重置</AtButton>
        </AtForm>
      </AtCard>
      <AtCard className={'m-t-20'} title={'Input 组件'}>
        <AtInput
          name='value'
          title='标准五个字'
          type='text'
          placeholder='标准五个字'
          value={''}
          onChange={()=> {}}
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'InputNumber 输入框组件'}>
        <AtInputNumber
          type={'number'}
          min={0}
          max={10}
          step={1}
          value={''}
          onChange={()=> {}}
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtRadio 单选框组件'}>
        <AtRadio
          options={[
            { label: '单选项一', value: 'option1', desc: '单选项描述' },
            { label: '单选项二', value: 'option2' },
            { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
          ]}
          value={'option1'}
          onClick={()=> {}}
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'Checkbox 多选框组件'}>
        <AtCheckbox
          options={[{
            value: 'list1',
            label: 'iPhone X',
            desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
          },{
            value: 'list2',
            label: 'HUAWEI P20'
          },{
            value: 'list3',
            label: 'OPPO Find X',
            desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
            disabled: true
          },{
            value: 'list4',
            label: 'vivo NEX',
            desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
            disabled: true
          }]}
          selectedList={[]}
          onChange={()=> {}}
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'Rate 评分组件'}>
        <AtRate
          value={2}
          onChange={()=> {}}
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'Switch 开关组件'}>
        <AtSwitch title='开启中' checked={true} onChange={()=> {}} />
      </AtCard>
      <AtCard className={'m-t-20'} title={'Textarea 多行文本框组件'}>
        <AtTextarea
          value={''}
          onChange={()=> {}}
          maxLength={200}
          placeholder='你的问题是...'
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'Picker 选择器组件'}>
        <Picker mode='time' onChange={()=> {}}>
          <AtList>
            <AtListItem title='请选择时间' extraText={''} />
          </AtList>
        </Picker>
      </AtCard>
      <AtCard className={'m-t-20'} title={'SearchBar 搜索栏'}>
        <AtSearchBar
          value={''}
          onChange={()=> {}}
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtSlider 滑动条'}>
        <AtSlider></AtSlider>
      </AtCard>
      <AtCard className={'m-t-20'} title={'ImagePicker 图片选择器'}>
        <AtImagePicker
          files={[{
            url: 'https://jimczj.gitee.io/lazyrepay/aragaki1.jpeg',
          },
            {
              url: 'https://jimczj.gitee.io/lazyrepay/aragaki2.jpeg',
            },
            {
              url: 'https://jimczj.gitee.io/lazyrepay/aragaki3.png',
            }]}
          onChange={()=> {}}
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtRange 范围选择器'}>
        <AtRange
          value={[20, 60]}
          min={0}
          max={100}
          onChange={()=> {}}
        />
      </AtCard>
      <View className={'b-box p-h-20'}>
        布局组件
      </View>
      <AtCard className={'m-t-20'} title={'Flex 弹性布局'}>
        <View className='at-row'>
          <View className='at-col'>A</View>
          <View className='at-col'>B</View>
          <View className='at-col'>C</View>
        </View>
        <View className='at-row'>
          <View className='at-col at-col-3'>A</View>
          <View className='at-col at-col-6'>B</View>
          <View className='at-col at-col-2'>C</View>
          <View className='at-col at-col-1'>D</View>
        </View>
      </AtCard>
      <AtCard className={'m-t-20'} title={'Grid 栅格布局'}>
        <AtGrid mode='rect' hasBorder={false} data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '领取中心'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '找折扣'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '领会员'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
              value: '新品首发'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '领京豆'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '手机馆'
            }
          ]
        } />
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtList 列表'}>
        <AtList>
          <AtListItem title='标题文字' onClick={()=> {}} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
        </AtList>
      </AtCard>
      <AtCard
        note='小Tips'
        extra='额外信息'
        title='AtCard 组件'
        thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
      <AtCard className={'m-t-20'} title={'FloatLayout 浮动弹层'}>
        <AtFloatLayout isOpened={float} title="这是个标题" onClose={()=> setFloat(false)}>
          这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
          随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        </AtFloatLayout>
        <Text onClick={()=> setFloat(true)}>FloatLayout</Text>
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtAccordion 手风琴'}>
        <AtAccordion
          open={accordion}
          onClick={()=> setAccordion(!accordion)}
          title='标题一'
        >
          <AtList hasBorder={false}>
            <AtListItem
              title='标题文字'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              extraText='详细信息'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
          </AtList>
        </AtAccordion>
      </AtCard>
      <View className={'b-box p-h-20'}>
        导航组件
      </View>
      <AtCard className={'m-t-20'} title={'NavBar 导航栏'}>
        <AtNavBar
          onClickRgIconSt={()=> {}}
          onClickRgIconNd={()=> {}}
          onClickLeftIcon={()=> {}}
          color='#000'
          title='NavBar 导航栏示例'
          leftText='返回'
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'AtTabBar 标签栏组件'}>
        <AtTabBar
          tabList={[
            { title: '待办事项', text: 8 },
            { title: '拍照' },
            { title: '通讯录', dot: true }
          ]}
          onClick={()=> {}}
          current={0}
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'Tabs 标签页'}>
        <AtTabs current={0} tabList={[{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]} onClick={()=> {}}>
          <AtTabsPane current={0} index={0} >
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={0} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={0} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </AtCard>
      <AtCard className={'m-t-20'} title={'SegmentedControl 分段器'}>
        <AtSegmentedControl
          values={['标签页1', '标签页2', '标签页3']}
          onClick={()=> {}}
          current={0}
        />
      </AtCard>
      <AtCard className={'m-t-20'} title={'Pagination 分页器'}>
        <AtPagination
          total={50}
          pageSize={10}
          current={1}
        >
        </AtPagination>
      </AtCard>
      <AtCard className={'m-t-20'} title={'Drawer 抽屉'}>
        <AtDrawer
          show={drawer}
          mask
          onClose={()=> setDrawer(false)}
          items={['菜单1', '菜单2']}
        ></AtDrawer>
        <Text onClick={()=> setDrawer(true)}>drawer</Text>
      </AtCard>
      <AtCard className={'m-t-20'} title={'Indexes 索引选择器'}>
        <AtIndexes
          list={[{
            title: 'A',
            key: 'A',
            items: [
              {
                'name': '阿坝'
                // 此处可加其他业务字段
              },
              {
                'name': '阿拉善'
              }]
          },
            {
              title: 'B',
              key: 'B',
              items: [
                {
                  'name': '北京'
                },
                {
                  'name': '保定'
                }]
            }
          ]}
          onClick={()=> {}}
        >
          <View>自定义内容</View>
        </AtIndexes>
      </AtCard>
      <View className={'b-box p-h-20'}>
        高阶组件
      </View>
      <AtCard className={'m-t-20'} title={'Calendar 日历'}>
        <AtCalendar />
      </AtCard>
      <View style={{height: 200}}></View>
    </> : <>
      <AppBar title={'我的'}/>
      <View className={'center-flex full-box b-box p-h-20 c-flex'}>
        <View className={'c-flex'}>
          <Text>{UserInfo.userInfo.username}</Text>
          <Text>{UserInfo.userInfo.age}</Text>
          <Text>{UserInfo.userInfo.email}</Text>
        </View>
        <RowButton
          name={'退出登录'}
          onPress={() => {
            Taro.showModal({
              title: '是否确认退出登录？',
              success: (result) => {
                if (result.confirm) {
                  UserInfo.clearUserInfo()
                }
              }
            })
          }}
          height={42}/>
      </View>
    </>}
    <AtTabBar
      fixed
      tabList={[
        {title: '主页', iconType: 'home', text: 'new'},
        {title: '我的', iconType: 'user'},
      ]}
      onClick={(e: 0 | 1) => UserInfo.setUserInfo({tab: e})}
      current={UserInfo.userInfo.tab ?? 0}
    />
  </>
})

export default Home
