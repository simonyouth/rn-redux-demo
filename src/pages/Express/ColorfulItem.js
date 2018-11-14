import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

//TODO pdf添加图片不显示bug：1.没有指定宽高 2.本地图片用require，网络用uri：''
export default class ColorfulItem extends React.Component {

    // 处理datetime
    formatDatetime = (datetime = '') => {
        let time = datetime.split(' ')[1]; // '19:44:33'
        time = time.substring(0, time.length - 3);
        let date = datetime.split(' ')[0];
        date = date.substr(5, date.length - 3);
        return {time, date};
    };

    render() {
        const { item } = this.props;
        const datetime = this.formatDatetime(item.datetime);
        return(
            <View style={styles.container}>

                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>{datetime.time}</Text>
                        <Text style={styles.date}>{datetime.date}</Text>
                    </View>
                    <View style={styles.decorate}>
                        <View style={styles.line}/>
                        <Image
                            style={styles.img}
                            source={require( '../../assets/images/transport.png')}/>
                        <View style={styles.line}/>
                    </View>
                    <Text style={styles.position}>{item.remark}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    decorate: {
      flexDirection: 'column'
    },
    line: {
        width: 1,
        height: 30,
        marginLeft: 14,
        backgroundColor: '#ed705b',
    },
    img: {
        width: 28,
        height:28,
    },
    content: {
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    timeContainer: {
        width: 40,
        flexDirection: 'column',
        textAlign: 'center'
    },
    date: {
      fontSize: 12,
      color: '#dfdfdf'
    },
    position: {
        flex: 2,
    },
});