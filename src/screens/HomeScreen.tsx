import React, { FC, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native'  
import { useSelector, useDispatch } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';
import { setParkingSpaces, generateParkingSpaces } from '../redux/parkingSlice';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: FC = () => {

    const [spaces, setSpaces] = useState<number>(0)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const handlePress = () => {
        dispatch(setParkingSpaces(spaces))
        dispatch(generateParkingSpaces())
        navigation.navigate('ParkingLot')
    }

    return <View style={styles.container}>
        <View>
            <TextInput
                style={styles.textInputContainer}
                placeholder='Enter number of parking spaces'
                value={spaces}
                onChangeText={newSpaces => setSpaces(newSpaces)}
            />
        </View>
        <TouchableOpacity
            activeOpacity={spaces ? 0.65 : 1}
            style={[styles.continueContainer, { backgroundColor: spaces ? '#3898ef' : '#d6d6d6' }]}
            onPress={spaces ? handlePress : null}
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
        borderColor: 'red',
        borderWidth: 1
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