import React from 'react'
import { Text, View, StyleSheet, ScrollView, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import PrimaryButton from '../components/Button/PrimaryButton'
import ParkingDrawSpace from '../components/Parking/ParkingDrawSpace'
import { RootState } from '../redux/store'

type Navigation = {
    navigate: Function
}

const ParkingLotScreen = () => {

    const navigation:Navigation = useNavigation()
    const parkingSpaces = useSelector((state: RootState) => state.parking?.parkingSpaces)
    const totalParkedCars = useSelector((state: RootState) => state.parking?.parked.length)

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
        flex: 1,
        marginTop: 20
    }
})

export default ParkingLotScreen ;