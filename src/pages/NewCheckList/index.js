import { VStack, Heading, Center, ScrollView } from 'native-base'
import { ToastAndroid } from 'react-native'

import { Type, Supervision, Input } from '../../components/Options'
import { Button } from '../../components/ButtonForm'
import Colors from '../../styles/Colors'
import { useState } from 'react'
import uuid from 'react-native-uuid'

import api from '../../services/api'

export default function NewCheckList({ navigation }) {
  const [type, setType] = useState('')
  const [hasSupervision, setHasSupervision] = useState(false)
  const [farmer, setFarmer] = useState('')
  const [nameFarm, setNameFarm] = useState('')
  const [city, setCity] = useState('')
  const [supervisor, setSupervisor] = useState('')
  const [amount, setAmount] = useState('')
  const [cows, setCows] = useState('')
  const [checkList, setCheckList] = useState({})

  async function postApi() {
    console.log('Cadastrando::', checkList)
    try {
      const response = await api.post('v1/checkList', checkList)
      console.log(response.data)
      console.log('POST::', checkList)
    } catch (error) {
      console.log('ERROR: ' + error)
    }
    setValue()
  }

  function setValue() {
    setAmount('')
    setCity('')
    setCows('')
    setFarmer('')
    setHasSupervision('')
    setNameFarm('')
    setSupervisor(false)
    setType('')
  }

  function onNewCheckList() {
    if (
      type === '' ||
      hasSupervision === '' ||
      farmer === '' ||
      nameFarm === '' ||
      city === '' ||
      supervisor === '' ||
      amount === '' ||
      cows === ''
    ) {
      ToastAndroid.show(
        'Por favor preencha todos os campos.',
        ToastAndroid.SHORT
      )
      return
    }
    const data = {
      _id: uuid.v4(),
      type: type,
      amount_of_milk_produced: amount.replace(',', '.'),
      number_of_cows_head: cows.replace(',', '.'),
      had_supervision: hasSupervision,
      farmer: {
        name: nameFarm,
        city: city,
      },
      from: {
        name: farmer,
      },
      to: {
        name: supervisor,
      },
      location: {
        latitude: -123,
        longitude: -456,
      },
      created_at: new Date(),
      updated_at: new Date(),
    }
    setCheckList(data)
    postApi()
    alert('Cadastrado com sucesso!')
    console.log('Enviado: ', data)

    navigation.navigate('Home')
  }

  return (
    <VStack bgColor={Colors.champagneDark} flex={1} px={10} pb={20}>
      <Center>
        <Heading my={10} color={Colors.asphaltDark}>
          Check List
        </Heading>
        <ScrollView>
          <Type
            placeholder={type}
            onValueChange={(itemValue) => setType(itemValue)}
          />
          <Supervision
            placeholder={hasSupervision}
            value={hasSupervision}
            onValueChange={(itemValue) => setHasSupervision(itemValue)}
          />
          <Input
            placeholder="Nome do fazendeiro"
            value={farmer}
            onChangeText={(text) => setFarmer(text)}
          />
          <Input
            placeholder="Nome da fazenda"
            value={nameFarm}
            onChangeText={(text) => setNameFarm(text)}
          />
          <Input
            placeholder="Nome da cidade"
            value={city}
            onChangeText={(text) => setCity(text)}
          />
          <Input
            placeholder="Nome do supervisor"
            value={supervisor}
            onChangeText={(text) => setSupervisor(text)}
          />
          <Input
            placeholder="Quantidade leite produzido no mês"
            keyboardType="numeric"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
          <Input
            placeholder="Quantidade cabeças de gado"
            value={cows}
            keyboardType="numeric"
            onChangeText={(text) => setCows(text)}
          />
          <Button
            placeholder="Cadastrar"
            onPress={onNewCheckList}
            bgButton={Colors.blueDark}
          />
        </ScrollView>
      </Center>
    </VStack>
  )
}
