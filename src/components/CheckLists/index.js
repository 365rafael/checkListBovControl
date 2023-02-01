import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import {Container, Title, ButtonList, TextList} from './styles'

import api from '../../services/api'

// let checkList = [
//   {
//     _id: '624de433daf4dce5aac6693a',
//     type: 'BPA',
//     amount_of_milk_produced: 300,
//     number_of_cows_head: 17,
//     had_supervision: true,
//     farmer: {
//       name: 'Fazenda São Rock',
//       city: 'São Rock',
//     },
//     from: {
//       name: 'Luciano Camargo',
//     },
//     to: {
//       name: 'Fernando Siqueira',
//     },
//     location: {
//       latitude: -23.5,
//       longitude: -46.6,
//     },
//     created_at: '2022-02-01T10:10:21.748Z',
//     updated_at: '2022-02-01T10:10:21.748Z',
//   },
//   {
//     _id: '2',
//     type: 'BPA',
//     amount_of_milk_produced: 300,
//     number_of_cows_head: 17,
//     had_supervision: true,
//     farmer: {
//       name: 'Fazenda São Lucas',
//       city: 'São Lucas',
//     },
//     from: {
//       name: 'Zezé de Camargo',
//     },
//     to: {
//       name: 'Fernando Siqueira',
//     },
//     location: {
//       latitude: -13.5,
//       longitude: -36.6,
//     },
//     created_at: '2022-02-01T10:10:21.748Z',
//     updated_at: '2022-02-02T10:10:21.748Z',
//   },
// ]

export default function CheckLists() {
  const [checks, setCheks] = useState([{}])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCheckLists() {
      try {
        await api.get('v1/checkList').then(function (response) {
          setCheks(response.data)
          console.log(checks)
          setLoading(false)
        })
      } catch (error) {
        console.log('ERROR: ' + error)
      }
    }

    loadCheckLists()
    formatDate()
  }, [])

  if (loading) {
    return (
      <View>
        <Text>Carregando detalhes...</Text>
      </View>
    )

  }
  function formatDate(){
    let dataCheck = Date(checks.updated_at)
    let data = new Date(dataCheck)
    let dataFormat = ((data.getDate() )) 
    + "/" + ((data.getMonth() + 1)) 
    + "/" + data.getFullYear(); 
    return dataFormat
   
  }
  return (
    <Container>
      <Title>CheckLists Criados:</Title>
      <FlatList
        data={checks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <ButtonList>
              <TextList>{item.type} - Atualizado: {formatDate()}</TextList>
            </ButtonList>
          </View>
        )}
      />
    </Container>
  )
}
