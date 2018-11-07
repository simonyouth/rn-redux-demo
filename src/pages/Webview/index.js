import React, {Component} from 'react';
import { WebView, ActivityIndicator, ProgressBarAndroid } from 'react-native';

export default class Details extends Component{
	render() {
		const { navigation } = this.props;
		const url = navigation.getParam('url');
		return (
			<WebView
				source={{uri:url}}
			  startInLoadingState
			  renderLoading={(v) => (<ProgressBarAndroid progress={v} styleAttr="Horizontal"/>)}/>
		)
	}
}

