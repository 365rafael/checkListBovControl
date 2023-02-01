import { Button as ButtonNativeBase, Text } from 'native-base'
import Colors from '../../styles/Colors'
export function Button({ placeholder, onPress, bgButton }) {
  return (
    <ButtonNativeBase
      w="full"
      bg={bgButton}
      h={12}
      borderRadius={6}
      marginTop={5}
      _pressed={{ bg: Colors.blue }}
      onPress={onPress}
    >
      <Text color={Colors.champagne} fontSize={18}>
        {placeholder}
      </Text>
    </ButtonNativeBase>
  )
}
