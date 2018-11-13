import React from 'react';
import { TextInput, Text, StyleSheet, View, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const inputWidth = width - 100;

export default function (props) {
    const { style, onPress, children, nameHolder, numHolder } = props;
    return(
        <View style={styles.container}>
            <View style={styles.inputCage}>
                <Text style={styles.text}>快递名称：</Text>
                <TextInput
                    style={styles.input}
                    placeholder={nameHolder}/>
            </View>
            <View style={styles.inputCage}>
                <Text style={styles.text}>运单号：</Text>
                <TextInput
                    style={styles.input}
                    placeholder={numHolder}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputCage: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    text: {
        marginTop: 10,
        width: 70,
    },
    input: {
        width: inputWidth ,
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
    }
});

