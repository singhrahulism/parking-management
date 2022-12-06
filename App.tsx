import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider, useDispatch } from "react-redux"
import store from "./src/redux/store"

import HomeScreen from './src/screens/HomeScreen'
import ParkingLotScreen from "./src/screens/ParkingLotScreen"
import AllocateSpaceScreen from "./src/screens/AllocateSpaceScreen"
import DeAllocateSpaceScreen from "./src/screens/DeAllocateSpaceScreen"

export type CarProps = {
  _id: string,
  isAlloted: Boolean,
  startTime?: string | null,
  registrationNumber?: string | null
}

export type RootStackParams = {
  Home: undefined,
  ParkingLot: undefined,
  AllocateSpace: undefined,
  DeAllocateSpace: {
    car: CarProps
  }
}

const Stack = createNativeStackNavigator<RootStackParams>()
export const navigationRef = createNavigationContainerRef()
const App = () => {
  const dispatch = useDispatch()
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