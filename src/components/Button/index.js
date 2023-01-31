import { Button as ButtonNativeBase, Text } from 'native-base'
import Colors from '../../styles/Colors'
export function Button({ placeholder }) {
  return (
    <ButtonNativeBase
      w="full"
      bg={Colors.blueDark}
      h={16}
      borderRadius={6}
      _pressed={{ bg: Colors.blue }}
    >
      <Text color={Colors.champagne} fontSize={18}>
        {placeholder}
      </Text>
    </ButtonNativeBase>
  )
}
