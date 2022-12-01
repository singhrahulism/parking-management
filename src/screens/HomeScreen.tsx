import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'  
import MyComponent from '../components/CustomComponent'

type Props = {}
type State = {}

class HomeScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        
        this.state = {
            
        }
    }

    render() {
        return <View style={styles.container}>
            <Text>This is HomeScreen</Text>
            <MyComponent />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default HomeScreen ;