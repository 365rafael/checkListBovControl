import { View, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Container, Title, ButtonList, TextList } from './styles'

import api from '../../services/api'

export default function CheckLists() {
  const navigation = useNavigation()
  const [checks, setCheks] = useState([{}])
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
      async function loadCheckLists() {
        try {
          await api.get('v1/checkList').then((response) => {
            setCheks(response.data)
            console.log(checks)
            setLoading(false)
          })
        } catch (error) {
          console.log('ERROR: ' + error)
        } finally {
        }
      }

      showToasts = () => {
        Toast.success('Lista atualizada!')
      }
      loadCheckLists()
      formatDate()
    }, [])
  )

  if (loading) {
    return (
      <View>
        <Title>Carregando detalhes...</Title>
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
  function onUpdate(item) {
    navigation.navigate('UpdateCheckList', { paramKey: item })
    console.log(item)
  }

  return (
    <Container>
      {checks.length == 0 ? (
        <Title>Nenhum checklist ativo:</Title>
      ) : (
        <Title>CheckLists Criados:</Title>
      )}
      <FlatList
        data={checks}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <ButtonList onPress={() => onUpdate(item)}>
              <TextList>
                {item.type} - Criado: {formatDate(item.created_at)}
              </TextList>
              <TextList>Atualizado: {formatDate(item.updated_at)}</TextList>
            </ButtonList>
          </View>
        )}
      />
    </Container>
  )
}
