import {View} from "@tarojs/components";
import './index.scss'

export interface rowButtonProps {
  name: string
  onPress: ()=> void
  height?: number
}

const RowButton = (props: rowButtonProps) => {
  const { name, onPress, height = 42 } = props
  return <View onClick={onPress} className={'center-flex button-box'} style={{ height }}>
      {name}
    </View>
}


export default RowButton;
