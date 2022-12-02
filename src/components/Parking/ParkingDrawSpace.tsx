import React from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import SingleParkingSpace from './SingleParkingSpace'
import { RootState } from '../../redux/store'

const ParkingDrawSpace = () => {

    const parkingData = useSelector((state: RootState) => state.parking.parkedCars)

    console.log(parkingData)

    return <View style={styles.container}>
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
        marginBottom: 80
    }
})

export default ParkingDrawSpace ;