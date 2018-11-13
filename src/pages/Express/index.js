import React, {Component} from 'react';
import {
	View,
	Modal,
	Dimensions,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Result from '../../components/Result';
import ColorfulItem from './ColorfulItem';
import StyledButton from '../../components/StyledButton';
import Input from './Input';
import { requestPosts } from '../../actions/ExpressAction';
import { KUAIDI, KEY } from '../../constants/API';

const { width, height } = Dimensions.get('window');
const params = {key: KEY, com: 'yd', no: '3909903733458'};
class Express extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible = () =>  {
        this.setState({
			modalVisible: !this.state.modalVisible
        });
    }

	componentDidMount() {
		// this.props.dispatch(requestPosts(KUAIDI, params))
	}

	render() {
		const inputOptions = {
			nameHolder: '快递公司首字母全拼',
			numHolder: '运单号',
		};
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
							<ColorfulItem />
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
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
    innerModal: {
		width: 0.8 * width,
		height: 0.7 * height,
		backgroundColor: '#fff',
	},
	img: {
		width: 35,
		height: 35,
	},
	imgContainer: {
        position: 'absolute',
        top: -15,
        right: -15,
	}
});

const mapStateToProps = ({getExpress}) => {
	return { ...getExpress }
};

export default connect(mapStateToProps)(Express)