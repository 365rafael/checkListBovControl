import React, { useState } from 'react'
import { View, StyleSheet, ToastAndroid, Alert } from 'react-native'
//import { Input, Supervision, Type } from '../../../components/Options'
import {
  VStack,
  Heading,
  Center,
  ScrollView,
  Select,
  Input,
  Button,
  Text,
} from 'native-base'

import api from '../../../services/api'
import uuid from 'react-native-uuid'

import Colors from '../../../styles/Colors'

export default function UpdateCheckList({ route, navigation }) {
  const item = route.params.paramKey

  const [type, setType] = useState(item.type)
  const [hasSupervision, setHasSupervision] = useState(item.had_supervision)
  const [farmer, setFarmer] = useState(item.from.name)
  const [nameFarm, setNameFarm] = useState(item.farmer.name)
  const [city, setCity] = useState(item.farmer.city)
  const [supervisor, setSupervisor] = useState(item.to.name)
  const [amount, setAmount] = useState(item.amount_of_milk_produced)
  const [cows, setCows] = useState(item.number_of_cows_head)
  const [checkList, setCheckList] = useState()

  async function putApi() {
    try {
      const response = await api.put(`v1/checkList/${item._id}`, checkList)
      console.log(response.data)
      console.log('PUT::', checkList)
    } catch (error) {
      console.log('ERROR PUT: ' + error)
    } finally {
      console.log('Enviado: ', checkList)
      navigation.navigate('Home')
    }
  }

  function onUpdate() {
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
    const data = [
      {
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

        updated_at: new Date(),
      },
    ]
    setCheckList(data)
    console.log('Botao atualizar: ', checkList)
    putApi()
    alert('Cadastro atualizado!')
  }

  async function deleteApi() {
    console.log('Deletando...', item._id)
    try {
      const response = await api.delete(`v1/checkList/${item._id}`)
      console.log(response.data)
      console.log('Delete::', item._id)
    } catch (error) {
      console.log('ERROR PUT: ' + error)
    } finally {
      navigation.navigate('Home')
    }
  }

  function onDelete() {
    Alert.alert(
      `Excluir checklist ID: ${item._id}`,
      'Tem certeza que quer excluir este checklist?',
      [
        {
          text: 'Cancel',

          style: 'cancel',
        },
        { text: 'OK', onPress: () => deleteApi() },
      ]
    )
  }

  return (
    <VStack bgColor={Colors.champagneDark} flex={1} px={10} pb={20}>
      <Center>
        <Heading my={6} color={Colors.asphaltDark}>
          Editar Check List
        </Heading>
        <Text>ID:{item._id}</Text>
        <ScrollView>
          <Select //type checklist
            selectedValue={type}
            placeholder="Tipo de checklist"
            bg={Colors.asphalt}
            fontSize="md"
            h={12}
            minWidth="full"
            borderRadius={6}
            accessibilityLabel="Tipo de checklist"
            mt={1}
            color={Colors.champagne}
            _selectedItem={{
              bg: 'teal.600',
            }}
            onValueChange={(itemValue) => setType(itemValue)}
          >
            <Select.Item label="BPA" value="BPA" />
            <Select.Item label="Antibiótico" value="Antibiotico" />
            <Select.Item label="BPF" value="BPF" />
          </Select>

          <Select // has supervision in current mounth
            selectedValue={hasSupervision}
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
            }}
            onValueChange={(itemValue) => setHasSupervision(itemValue)}
          >
            <Select.Item label="true" value="true" />
            <Select.Item label="false" value="false" />
          </Select>

          <Input
            bg={Colors.asphalt}
            fontSize="md"
            color={Colors.champagne}
            h={12}
            borderRadius={6}
            placeholder="Nome do fazendeiro"
            _focus={{
              bg: 'gray.100',
              borderWidth: 2,
              color: 'black',
              borderColor: 'white',
            }}
            value={farmer}
            onChangeText={(text) => setFarmer(text)}
          />
          <Input
            bg={Colors.asphalt}
            fontSize="md"
            color={Colors.champagne}
            h={12}
            borderRadius={6}
            placeholder="Nome da fazenda"
            _focus={{
              bg: 'gray.100',
              borderWidth: 2,
              color: 'black',
              borderColor: 'white',
            }}
            value={nameFarm}
            onChangeText={(text) => setNameFarm(text)}
          />
          <Input
            bg={Colors.asphalt}
            fontSize="md"
            color={Colors.champagne}
            h={12}
            borderRadius={6}
            placeholder="Nome da cidade"
            _focus={{
              bg: 'gray.100',
              borderWidth: 2,
              color: 'black',
              borderColor: 'white',
            }}
            value={city}
            onChangeText={(text) => setCity(text)}
          />

          <Input
            bg={Colors.asphalt}
            fontSize="md"
            color={Colors.champagne}
            h={12}
            borderRadius={6}
            placeholder="Nome do supervisor"
            _focus={{
              bg: 'gray.100',
              borderWidth: 2,
              color: 'black',
              borderColor: 'white',
            }}
            value={supervisor}
            onChangeText={(text) => setSupervisor(text)}
          />
          <View style={styles.areaButton}>
            <Input
              bg={Colors.asphalt}
              fontSize="md"
              color={Colors.champagne}
              h={12}
              w={120}
              marginRight={5}
              borderRadius={6}
              placeholder="Qt leite"
              keyboardType="numeric"
              _focus={{
                bg: 'gray.100',
                borderWidth: 2,
                color: 'black',
                borderColor: 'white',
              }}
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
            <Input
              bg={Colors.asphalt}
              fontSize="md"
              color={Colors.champagne}
              h={12}
              w={120}
              borderRadius={6}
              placeholder="Qt gado"
              keyboardType="numeric"
              _focus={{
                bg: 'gray.100',
                borderWidth: 2,
                color: 'black',
                borderColor: 'white',
              }}
              value={cows}
              onChangeText={(text) => setCows(text)}
            />
          </View>
          <View style={styles.areaButton}>
            <Button
              w={120}
              h={12}
              borderRadius={6}
              marginTop={5}
              marginRight={5}
              onPress={onUpdate}
              bg={Colors.greenDark}
            >
              <Text color={Colors.champagne} fontSize={18} fontWeight={'bold'}>
                Atualizar
              </Text>
            </Button>
            <Button
              w={120}
              h={12}
              borderRadius={6}
              marginTop={5}
              onPress={onDelete}
              bg={Colors.danger}
            >
              <Text color={Colors.champagne} fontSize={18} fontWeight={'bold'}>
                Excluir
              </Text>
            </Button>
          </View>
        </ScrollView>
      </Center>
    </VStack>
  )
}

const styles = StyleSheet.create({
  areaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
