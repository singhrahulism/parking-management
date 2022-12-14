import React, { useState, FC } from 'react'
import { Text, View, StyleSheet, ToastAndroid } from 'react-native'
import {formatDistanceStrict, setDefaultOptions} from 'date-fns';
import PrimaryButton from '../components/Button/PrimaryButton';
import { useDispatch } from 'react-redux'
import { freeCarInParkingLot } from '../redux/parkingSlice'
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../App';
import { RouteProp } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParams, "DeAllocateSpace">

const DeAllocateSpaceScreen: FC<Props> = ({ route }) => {

    const { car } = route.params

    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    let totalTime:string = '0'
    let currentTime = Date()
    
    if(car.startTime)
    {
        totalTime = formatDistanceStrict(new Date(currentTime), new Date(car.startTime), { unit: 'minute' })
    }
    let charges = 10

    const handlePress = async() => {
        setIsLoading(true)
        let response = await fetch('https://httpstat.us/200', {
                method: 'POST',
                body: JSON.stringify({
                    "car-registration": `${car.registrationNumber}`,
                    "charge": `${charges}`
                })
            })
        if(response.ok)
        {
            console.log('success')
            dispatch(freeCarInParkingLot({
                _id: car._id
            }))
            ToastAndroid.show('Payment successful.', ToastAndroid.SHORT)
        }
        else
        {
            ToastAndroid.show('Payment unsuccessful.', ToastAndroid.SHORT)
            console.log('error')
        }
        setIsLoading(false)
        navigation.goBack()
    }

    const calculateTotalCharges = ():number => {
        let val:number = +totalTime.split(' ')[0]-120
        if(val > 0)
        {
            charges += Math.ceil(val/60)*10
        }
        return charges
    }

    return <View style={styles.container}>
        <Text style={styles.titleContainer}>Remove this parked car</Text>
        {/* {console.log(route)} */}
        <Text style={styles.carKeyContainer}>Parking location</Text>
        <Text style={styles.carValueContainer}>At parking slot {car._id}</Text>

        <Text style={styles.carKeyContainer}>Registration Number</Text>
        <Text style={styles.carValueContainer}>{car.registrationNumber}</Text>

        <Text style={styles.carKeyContainer}>Parked at</Text>
        <Text style={styles.carValueContainer}>{car.startTime}</Text>

        <Text style={styles.carKeyContainer}>Current Time</Text>
        <Text style={styles.carValueContainer}>{currentTime}</Text>

        <Text style={styles.carKeyContainer}>Total time</Text>
        <Text style={styles.carValueContainer}>{totalTime}</Text>

        <Text style={styles.carKeyContainer}>Total charges</Text>
        <Text style={styles.carValueContainer}>${calculateTotalCharges()}</Text>

        <PrimaryButton
            title='Make Payment'
            handlePress={handlePress}
            useIndicator={isLoading}
            message={''}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 10,
        flex: 1
    },
    titleContainer: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50
    },
    carKeyContainer: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    carValueContainer: {
        marginLeft: 10,
        marginBottom: 20,
        fontSize: 16
    }
})

export default DeAllocateSpaceScreen ;