import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import {formatDistanceStrict} from 'date-fns';
import { useDispatch } from 'react-redux'
import { parkCarInParkingLot } from '../redux/parkingSlice';
import PrimaryButton from '../components/Button/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const AllocateSpaceScreen = () => {

    const [registrationNumber, setRegistrationNumber] = useState<string>('')
    const [focused, setFocused] = useState<Boolean>(false)

    const dispatch = useDispatch()
    const navigation = useNavigation()

    // let date = new Date('Fri Dec 02 2022 11:20:52 GMT+0530 (IST)')
    // console.log(formatDistanceStrict(new Date(), new Date(date)))


    const handlePress = () => {
        console.log('handlepressed')
        dispatch(parkCarInParkingLot({startDate: Date(), registrationNumber: registrationNumber}))
        navigation.goBack()
    }

    return <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 50}}>Add car to the Parking Lot</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Current Time: {Date().slice(16, 25)}</Text>
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
    }
})

export default AllocateSpaceScreen ;