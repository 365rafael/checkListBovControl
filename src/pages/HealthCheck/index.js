import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { Container, TextList, Title, ButtonList } from './styles'

export default function HealthCheck() {
  const [healthStatus, setHealtStatus] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadHealth() {
      try {
        await api.get('healthCheck').then((response) => {
          setHealtStatus(response.data)
          console.log(healthStatus)
          setLoading(false)
        })
      } catch (error) {
        console.log('ERROR: ' + error)
      }
    }
    loadHealth()
  }, [])

  if (loading) {
    return <Title>Carregando detalhes...</Title>
  }
  return (
    <Container>
      <Title>Status de saúde do gado:</Title>
      <ButtonList>
        <TextList>{healthStatus.status}</TextList>
      </ButtonList>
    </Container>
  )
}
