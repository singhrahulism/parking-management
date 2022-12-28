import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ToastAndroid, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CarProps } from '../../../App'
import { navigationRef } from '../../../App'

type Props = {
    car: CarProps
}

type Navigation = {
    navigate: Function
}

const SingleParkingSpace = ({car}: Props) => {

    const { navigate }: Navigation = useNavigation()

    function isAllotedCallback() {

        if(navigationRef?.isReady())
        {
            navigate('DeAllocateSpace', {car: car})
        }
            // navigate('DeAllocateSpace', {car: car})

    }
    
    const isAllotedFallback = () => {
        if(Platform.OS === 'android')
        {
            ToastAndroid.show('No car present here', ToastAndroid.SHORT)
        }
    }


    return <TouchableOpacity
                testID='sps-button'
                activeOpacity={0.65}
                style={[styles.container, {
                    backgroundColor: car?.isAlloted ? '#cbf7d5' : '#e8aeae',
                    borderColor: car?.isAlloted ? '#61d465' : '#d46161',
                }]}
                onPress={
                    car.isAlloted
                    ?
                    () => isAllotedCallback()
                    :
                    () => isAllotedFallback()
                }
            >
        <Text>{car._id}</Text>
        {
            car.isAlloted
            ?
            <>
                <Text testID='sps-car-ia-1' style={{marginVertical: 4}}>Registration: {car.registrationNumber}</Text>
                <Text testID='sps-car-ia-2' >Time: {car?.startTime?.slice(16, 25)}</Text>
            </>
            :
            <Text testID='sps-car-ina'>No car parked</Text>
        }
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        height: 100,
        width: 100,
        marginBottom: 20,
        borderWidth: 2,
        borderRadius: 100 / 10
    }
})

export default SingleParkingSpace ;