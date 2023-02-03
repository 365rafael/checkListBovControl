import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { Entypo } from '@expo/vector-icons'

import Home from './Home'
import HealthCheck from './HealthCheck'
import NewCheckList from './NewCheckList'
import ButtonNew from '../components/ButtonNew'
import UpdateCheckList from './NewCheckList/UpdateCheckList'

import Colors from '../styles/Colors'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function Stacks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UpdateCheckList" component={UpdateCheckList} />
    </Stack.Navigator>
  )
}
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.champagne,
        tabBarInactiveTintColor: Colors.champagneDark,

        tabBarStyle: {
          backgroundColor: Colors.asphalt,
          borderTopColor: 'transparente',
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Stacks}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NewCheckList"
        component={NewCheckList}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, size, color }) => (
            <ButtonNew size={size} color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="HealthCheck"
        component={HealthCheck}
        options={{
          tabBarLabel: 'Saúde Animal',
          tabBarIcon: ({ size, color }) => (
            <Entypo name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function Routes() {
  return <Tabs />
}

export default Routes
