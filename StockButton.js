import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

class StockButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button}
            onPress={() => {
                this.props.onPress(
                    this.props.name,
                    this.props.code
                )
            }}>
                <Text style={styles.buttonText}>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 20,
    },
    button: {
        margin: 10,
        borderWidth: 1,
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    }
})

export default StockButton;