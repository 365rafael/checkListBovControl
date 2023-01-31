import { Input as NativeBaseInput } from 'native-base'
import Colors from '../../styles/Colors'

export function Input({ placeholder }) {
  return (
    <NativeBaseInput
      bg={Colors.asphalt}
      fontSize="md"
      color={Colors.champagneDark}
      h={16}
      borderRadius={6}
      placeholder={placeholder}
      _focus={{
        bg: 'gray.200',
        borderWidth: 1,
        borderColor: 'green.200',
      }}
    />
  )
}
