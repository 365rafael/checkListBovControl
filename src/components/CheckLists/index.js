import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

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
  }, [])

  if (loading) {
    return (
      <View>
        <Text>Carregando detalhes...</Text>
      </View>
    )
  }
  return (
    <View>
      <Text>CheckLists Criados:</Text>
      <FlatList
        data={checks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity>
              <Text>{item.type}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}
