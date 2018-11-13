import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function (props) {
    const { style, onPress, children } = props;
 return(
     <TouchableOpacity
         onPress={onPress}
         style={[styles.container, style]}>
         {children}
     </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

