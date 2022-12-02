import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native'

type Props = {
    car: {
        _id: number,
        isAlloted: Boolean,
        registrationNumber: string,
        startTime: string
    }
}

type Navigation = {
    navigate: Function
}

const SingleParkingSpace = ({car}: Props) => {

    const navigation:Navigation = useNavigation()

    return <TouchableOpacity
                activeOpacity={0.65}
                style={[styles.container, {
                    backgroundColor: car.isAlloted ? '#cbf7d5' : '#e8aeae',
                    borderColor: car.isAlloted ? '#61d465' : '#d46161',
                }]}
                onPress={
                    car.isAlloted
                    ?
                    () => navigation.navigate('DeAllocateSpace', {car: car})
                    :
                    () => ToastAndroid.show('No car present here', ToastAndroid.SHORT)
                }
            >
        <Text>{car._id}</Text>
        {
            car.isAlloted
            ?
            <>
                <Text style={{marginVertical: 4}}>Registration: {car.registrationNumber}</Text>
                <Text>Time: {car.startTime.slice(16, 25)}</Text>
            </>
            :
            <Text>No car parked</Text>
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