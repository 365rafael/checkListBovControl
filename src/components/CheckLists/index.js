import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Container, Title, ButtonList, TextList } from './styles'

import api from '../../services/api'

export default function CheckLists({ navigation }) {
  const [checks, setCheks] = useState([{}])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCheckLists() {
      try {
        await api.get('v1/checkList').then((response) => {
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

  function formatDate() {
    let dataCheck = Date(checks.updated_at)
    let data = new Date(dataCheck)
    let dataFormat =
      data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear()
    return dataFormat
  }
  function onUpdate(item){
    console.log(item._id)
  }

  return (
    <Container>
      <Title>CheckLists Criados:</Title>
      <FlatList
        data={checks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <ButtonList onPress={({ item })=>onUpdate({item})}>
              <TextList>
                {item.type} - Criado: {formatDate(item.created_at)}
              </TextList>
              <TextList>
               Atualizado: {formatDate(item.updated_at)}
              </TextList>
            </ButtonList>
          </View>
        )}
      />
    </Container>
  )
}
