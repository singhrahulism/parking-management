import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'  

type Props = {}
type State = {}

class MyComponent extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        
        this.state = {
            
        }
    }

    render() {
        return <View style={styles.container}>
            <Text>This is MyComponent</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default MyComponent ;