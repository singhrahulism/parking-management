import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

type Props = {
    car: {
        _id: number,
        isAlloted: Boolean
    }
}

const SingleParkingSpace = ({car}: Props) => {
    return <TouchableOpacity style={[styles.container, { backgroundColor: car.isAlloted ? '#81db84' : '#e8aeae' }]}>
        <Text>{car._id}</Text>
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
        borderColor: 'red',
        borderWidth: 1,
        marginBottom: 20
    }
})

export default SingleParkingSpace ;