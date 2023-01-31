import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'

export default function HealthCheck() {
  const [healthStatus, setHealtStatus] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadHealth() {
      try {
        await api.get('healthCheck').then(function (response) {
          setHealtStatus(response.data)

          setLoading(false)
        })
      } catch (error) {
        console.log('ERROR: ' + error)
      }
    }

    loadHealth()
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
      <Text>Status de saúde do gado:</Text>

      <Text>{healthStatus.status}</Text>
    </View>
  )
}
