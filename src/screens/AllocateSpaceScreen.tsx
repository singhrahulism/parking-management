import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { parkCarInParkingLot } from '../redux/parkingSlice';
import PrimaryButton from '../components/Button/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const AllocateSpaceScreen = () => {

    const [registrationNumber, setRegistrationNumber] = useState<string>('')
    const [focused, setFocused] = useState<Boolean>(false)

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const handlePress = () => {
        console.log('handlepressed')
        dispatch(parkCarInParkingLot({startDate: Date(), registrationNumber: registrationNumber}))
        navigation.goBack()
    }

    return <View style={styles.container}>
        <Text style={styles.titleContainer}>Add car to the Parking Lot</Text>
        <Text style={styles.currentTimeContainer}>Current Time: {Date().slice(16, 25)}</Text>
        <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={[styles.textInputContainer, { 
                borderColor: focused ? '#81db84' : 'grey',
                borderWidth: focused ? 2 : 1
             }]}
            placeholder={'Enter Registration Number'}
            value={registrationNumber}
            onChangeText={text => setRegistrationNumber(text)}
        />
        <PrimaryButton
            title='Confirm'
            handlePress={handlePress}
            isActive={registrationNumber ? true : false}
            message={'Please enter registration number'}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 10,
        flex: 1
    },
    textInputContainer: {
        borderColor: 'red',
        borderWidth: 1,
        height: 50,
        paddingLeft: 10,
        borderRadius: 10
    },
    titleContainer: {
        fontSize: 20, fontWeight: 'bold', marginBottom: 50
    },
    currentTimeContainer: {
        fontSize: 18, fontWeight: 'bold', marginBottom: 20
    }
})

export default AllocateSpaceScreen ;