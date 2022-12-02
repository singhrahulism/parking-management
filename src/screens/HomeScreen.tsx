import React, { FC, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native'  
import { useSelector, useDispatch } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';
import { setParkingSpaces, generateParkingSpaces } from '../redux/parkingSlice';
import { useNavigation } from '@react-navigation/native';

type Navigation = {
    navigate: Function
}

const HomeScreen: FC = () => {

    const [spaces, setSpaces] = useState<string>('')
    const dispatch = useDispatch()
    const navigation:Navigation = useNavigation()

    const handlePress = () => {
        dispatch(setParkingSpaces(spaces))
        dispatch(generateParkingSpaces())
        navigation.navigate('ParkingLot')
    }

    const handleSpaces = (newSpaces: string) => {
        let reg = /^(0|[1-9][0-9]*)$/
        if(reg.test(newSpaces) || newSpaces == '')
        {
            setSpaces(newSpaces)
        }
    }

    return <View style={styles.container}>
        <View>
            <TextInput
                style={styles.textInputContainer}
                keyboardType={'numeric'}
                placeholder='Enter number of parking spaces'
                value={spaces}
                onChangeText={newSpaces => handleSpaces(newSpaces)}
            />
        </View>
        <TouchableOpacity
            activeOpacity={spaces ? 0.65 : 1}
            style={[styles.continueContainer, { backgroundColor: spaces ? '#3898ef' : '#d6d6d6' }]}
            onPress={spaces ? () => handlePress() : () => {}}
        >
            <AntDesign name="arrowright" size={24} color={spaces ? 'white' : 'black'} />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputContainer: {
        borderColor: 'grey',
        borderWidth: 1,
        width: Dimensions.get('window').width*0.8,
        height: 55,
        paddingLeft: 10
    },
    continueContainer: {
        marginTop: 40,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60 / 2
    }
})
export default HomeScreen ;