import { VStack, Heading, Center } from 'native-base'

import { Type, Supervision, Input } from '../../components/Options'
import { Button } from '../../components/Button'
import Colors from '../../styles/Colors'

export default function NewCheckList({ placeholder }) {
  return (
    <VStack bgColor={Colors.champagne} flex={1} px={10} mb={10}>
      <Center>
        <Heading my={10} color={Colors.asphalt}>
          Check List
        </Heading>
        <Type placeholder="Tipo de checklist" />
        <Supervision placeholder="Houve supervisão neste mês?" />
        <Input placeholder="Nome do fazendeiro" />
        <Input placeholder="Nome da cidade" />
        <Input placeholder="Nome do supervisor" />
        <Input placeholder="Quantidade leite produzido no mês" />
        <Input placeholder="Quantidade cabeças de gado" />
        <Button placeholder="Cadastrar" />
      </Center>
    </VStack>
  )
}
