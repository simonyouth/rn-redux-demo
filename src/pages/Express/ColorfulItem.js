import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

//TODO pdf添加图片不显示bug：1.没有指定宽高 2.本地图片用require，网络用uri：''
export default class ColorfulItem extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.line}/>
                <Image
                    style={styles.img}
                    source={require( '../../assets/images/transport.png')}/>
                <View style={styles.line}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    line: {
        width: 1,
        height: 20,
        marginLeft: 14,
        backgroundColor: '#ed705b',
    },
    img: {
        width: 28,
        height:28,
    }
});