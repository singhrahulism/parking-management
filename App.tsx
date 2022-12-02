import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider } from "react-redux"
import store from "./src/redux/store"

import HomeScreen from './src/screens/HomeScreen'
import ParkingLotScreen from "./src/screens/ParkingLotScreen"
import AllocateSpaceScreen from "./src/screens/AllocateSpaceScreen"
import DeAllocateSpaceScreen from "./src/screens/DeAllocateSpaceScreen"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='ParkingLot' component={ParkingLotScreen} />
      <Stack.Screen name='AllocateSpace' component={AllocateSpaceScreen} />
      <Stack.Screen name='DeAllocateSpace' component={DeAllocateSpaceScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default () => {
  return <Provider store={store}>
    <App />
  </Provider>
}