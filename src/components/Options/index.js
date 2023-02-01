import {
  Select,
  Input as NativeBaseInput,
  FormControl,
  CheckIcon,
} from 'native-base'
import Colors from '../../styles/Colors'

export function Type({ placeholder, onValueChange }) {
  return (
    <FormControl>
      <Select
        selectedValue={placeholder}
        bg={Colors.asphalt}
        fontSize="md"
        h={12}
        minWidth="full"
        borderRadius={6}
        accessibilityLabel="Tipo de checklist"
        placeholder="Tipo de checklist"
        mt={1}
        color={Colors.champagne}
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={onValueChange}
      >
        <Select.Item label="BPA" value="BPA" />
        <Select.Item label="Antibiótico" value="Antibiotico" />
        <Select.Item label="BPF" value="BPF" />
      </Select>
    </FormControl>
  )
}

export function Supervision({ placeholder, onValueChange }) {
  return (
    <FormControl mb={1}>
      <Select
        selectedValue={placeholder}
        bg={Colors.asphalt}
        fontSize="md"
        h={12}
        minWidth="full"
        borderRadius={6}
        accessibilityLabel="Houve supervisão neste mês?"
        placeholder="Houve supervisão neste mês?"
        mt={1}
        color={Colors.champagne}
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={onValueChange}
      >
        <Select.Item label="true" value="true" />

        <Select.Item label="false" value="false" />
      </Select>
    </FormControl>
  )
}
export function Input({ placeholder, onChangeText, value }) {
  return (
    <NativeBaseInput
      bg={Colors.asphalt}
      fontSize="md"
      color={Colors.champagneDark}
      h={12}
      borderRadius={6}
      placeholder={placeholder}
      _focus={{
        bg: 'gray.100',
        borderWidth: 1,
        borderColor: 'green.200',
      }}
      value={value}
      onChangeText={onChangeText}
    />
  )
}
