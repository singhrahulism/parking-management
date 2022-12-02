import React from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native'

type Props = {
    title: string,
    handlePress: Function,
    isActive?: Boolean,
    message: string,
    useIndicator?: Boolean
}

const PrimaryButton = ({title, handlePress, isActive=true, message, useIndicator}:Props) => {
    return <TouchableOpacity
                activeOpacity={ isActive ? 0.7 : 1 }
                style={[styles.container, {
                    backgroundColor: isActive ? '#3898ef' : 'grey'
                }]}
                onPress={isActive ?  () => handlePress() : () => ToastAndroid.show(message, ToastAndroid.SHORT)}
            >
        {
            useIndicator
            ?
            <ActivityIndicator size={30} color={'white'} />
            :
            <Text style={{color: 'white', fontSize: 18}}>{title}</Text>
        }
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: Dimensions.get('window').width*0.05,
        backgroundColor: '#3898ef',
        borderRadius: 60 / 6,
        width: '90%',
        bottom: 0,
        height: 60,
    }
})

export default PrimaryButton ;