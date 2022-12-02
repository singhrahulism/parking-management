import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import PrimaryButton from '../components/Button/PrimaryButton'
import ParkingDrawSpace from '../components/Parking/ParkingDrawSpace'

const ParkingLotScreen = () => {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('AllocateSpace')
    }

    return <View style={styles.container}>
        <Text>This is ParkingLotScreen</Text>
        <ScrollView>
            <ParkingDrawSpace />
        </ScrollView>
        <PrimaryButton
            title='Allocate Space'
            handlePress={handlePress}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ParkingLotScreen ;