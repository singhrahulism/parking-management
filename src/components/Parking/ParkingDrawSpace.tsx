import React from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import SingleParkingSpace from './SingleParkingSpace'

const ParkingDrawSpace = () => {

    const spaces = useSelector(state => state.parking.parkingSpaces)
    const parkingData = useSelector(state => state.parking.parkedCars)

    console.log(parkingData)

    return <View style={styles.container}>
        <Text>This is ParkingDrawSpace</Text>
        <FlatList
            data={parkingData}
            keyExtractor={parkedCar => parkedCar._id}
            numColumns={3}
            renderItem={({item}) => {
                return <SingleParkingSpace car={item} />
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
    
    }
})

export default ParkingDrawSpace ;