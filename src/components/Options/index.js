import {
  Select,
  Input as NativeBaseInput,
  FormControl,
  CheckIcon,
} from 'native-base'
import Colors from '../../styles/Colors'

export function Type({ placeholder }) {
  return (
    <FormControl>
      <Select
        selectedValue={placeholder}
        bg={Colors.asphalt}
        fontSize="md"
        h={16}
        minWidth="full"
        borderRadius={6}
        accessibilityLabel={placeholder}
        placeholder={placeholder}
        mt={1}
        color={Colors.champagne}
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={() => {}}
      >
        <Select.Item label="BPA" value="BPA" />
        <Select.Item label="Antibiótico" value="Antibiotico" />
        <Select.Item label="BPF" value="BPF" />
      </Select>
    </FormControl>
  )
}

export function Supervision({ placeholder }) {
  return (
    <FormControl mb={1}>
      <Select
        selectedValue={placeholder}
        bg={Colors.asphalt}
        fontSize="md"
        h={16}
        borderRadius={6}
        minWidth="full"
        accessibilityLabel={placeholder}
        placeholder={placeholder}
        mt={1}
        onValueChange={() => {}}
      >
        <Select.Item label="Sim" value="Sim" />

        <Select.Item label="Não" value="Nao" />
      </Select>
    </FormControl>
  )
}
export function Input({ placeholder }) {
  return (
    <FormControl mb={1}>
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
    </FormControl>
  )
}
