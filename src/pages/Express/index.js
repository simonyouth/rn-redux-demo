import React, {Component} from 'react';
import {
	View,
	Modal,
	Dimensions,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	FlatList,
	Alert,
} from 'react-native';
import { connect } from 'react-redux';
import ColorfulItem from './ColorfulItem';
import StyledButton from '../../components/StyledButton';
import Input from './Input';
import { requestPosts, EXPRESS_SUCCESS } from '../../actions/ExpressAction';
import { KUAIDI, KEY } from '../../constants/API';

const { width, height } = Dimensions.get('window');
const params = {key: KEY, com: 'yd', no: '390990373345b'};
class Express extends Component {
    state = {
        modalVisible: false,
		company: '',
		number: '',
    };

    setModalVisible = () =>  {
    	const _self = this;
    	const params = {
    		key: KEY,
			com: this.state.company,
			no: this.state.number,
		};
    	console.log(this.state)
    	async function getDate() {
			await _self.props.dispatch(requestPosts(KUAIDI, params));
            const { type, reason = '输入有误' } = _self.props;
            if (type !== EXPRESS_SUCCESS) {
                Alert.alert(reason)
            } else {
                _self.setState({
                    modalVisible: !_self.state.modalVisible
                });
            }
        }
        getDate();
    };

    setCompany = (company) => {
    	this.setState({ company })
	};

    setNumber = (number) => {
    	this.setState({ number })
	};

	render() {
		const inputOptions = {
			nameHolder: '快递公司首字母全拼',
			numHolder: '运单号',
			onChangeCompany: this.setCompany,
			onChangeNumber: this.setNumber,
		};
		let { list = [], company, no } = this.props;
		console.log(this.props)
		list = list.reverse();

		return (
			<View style={styles.container}>
				<Input {...inputOptions}/>
				<StyledButton onPress={this.setModalVisible}>
					<Text>查询</Text>
				</StyledButton>
				<Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={this.setModalVisible}>
					<View style={styles.outerModal}>
						<View style={styles.innerModal}>
							<Text>{company}：{no}</Text>
							<FlatList
								renderItem={({item}) => (<ColorfulItem item={item}/>)}
								data={list}/>
							<TouchableOpacity
                                style={styles.imgContainer}
								onPress={this.setModalVisible}>
								<View>
									<Image
										style={styles.img}
										source={require( '../../assets/images/close.png')}/>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
    outerModal: {
		flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
    innerModal: {
		padding: 18,
		width: 0.9 * width,
		height: 0.7 * height,
		backgroundColor: '#fff',
		borderRadius: 10,
	},
	img: {
		width: 40,
		height: 40,
	},
	imgContainer: {
        position: 'absolute',
        bottom: 0,
        left: '50%',
		right: '50%'
	}
});

const mapStateToProps = ({getExpress}) => {
	return { ...getExpress }
};

export default connect(mapStateToProps)(Express)