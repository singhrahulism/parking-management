import React from 'react'
import { Text, View, StyleSheet, ScrollView, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import PrimaryButton from '../components/Button/PrimaryButton'
import ParkingDrawSpace from '../components/Parking/ParkingDrawSpace'

const ParkingLotScreen = () => {

    const navigation = useNavigation()
    const parkingSpaces = useSelector(state => state.parking.parkingSpaces)
    const totalParkedCars = useSelector(state => state.parking.parked.length)

    console.log(typeof +parkingSpaces)
    console.log(typeof totalParkedCars)

    const handlePress = () => {
        navigation.navigate('AllocateSpace')
    }

    const canAllocate = ():Boolean => {
        if(+parkingSpaces === totalParkedCars)
        {
            return false
        }
        return true
    }

    return <View style={styles.container}>
        <Text>This is ParkingLotScreen</Text>
        <ScrollView>
            <ParkingDrawSpace />
        </ScrollView>
        <PrimaryButton
            title='Allocate Space'
            handlePress={handlePress}
            isActive={canAllocate()}
            message={'Parking Lot full'}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ParkingLotScreen ;