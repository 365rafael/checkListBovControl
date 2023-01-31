import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import Routes from './src/pages/route'
import Header from './src/components/Header'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Header />
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
