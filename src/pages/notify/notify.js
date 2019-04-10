import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View } from '@tarojs/components';

export default class PageView extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		return (
			<ScrollView
				className="scrollview"
				scrollY
				scrollWithAnimation
				scrollTop="0"
				style="height: 150px;"
				lowerThreshold="20"
				upperThreshold="20"
				onScrolltoupper={this.onScrolltoupper}
				onScroll={this.onScroll}
			>
				<View style="height:150px;background-color:rgb(26,173,25);">A</View>
				<View style="height:150px;background-color:rgb(39,130,215);">B</View>
				<View style="height:150px;background-color:rgb(241,241,241);color: #333;">C</View>
			</ScrollView>
		);
	}
}
