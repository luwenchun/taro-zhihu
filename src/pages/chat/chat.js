import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View, Swiper, SwiperItem, MovableArea, MovableView, Progress, RichText } from '@tarojs/components';
import { AtToast, AtMessage } from 'taro-ui';
import './chat.scss';
export default class PageView extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			nodes: [
				{
					name: 'div',
					attrs: {
						class: 'div_class',
						style: 'line-height: 60px; color: red;'
					},
					children: [
						{
							type: 'text',
							text: 'Hello World!'
						}
					]
				}
			]
		};
	}
	onScrolltoupper = (type) => {
		// Taro.atMessage({
		// 	message: '消息通知',
		// 	type: type
		// });
		console.log(type, '======>', 'top');
	};
	onScroll = (event) => {
		console.log(JSON.stringify(event.detail));
	};
	bannerchange = (event) => {
		// console.log(JSON.stringify(event));
	};
	animationfinish = (event) => {
		console.log(JSON.stringify(event.type));
	};
	render() {
		return (
			<View>
				<View className="components-page">
					<Text>flex-direction: row 横向布局</Text>
					<View className="flex-wrp" style="flex-direction:row;">
						<View className="flex-item demo-text-1">demo-text-1</View>
						<View className="flex-item demo-text-2">demo-text-1</View>
						<View className="flex-item demo-text-3">demo-text-1</View>
					</View>
					<Text>flex-direction: column 纵向布局</Text>
					<View className="flex-wrp" style="flex-direction:column;">
						<View className="flex-item flex-item-V demo-text-1">demo-text-1</View>
						<View className="flex-item flex-item-V demo-text-2">demo-text-1</View>
						<View className="flex-item flex-item-V demo-text-3">demo-text-1</View>
					</View>
				</View>
				<ScrollView
					className="scrollview"
					scrollY
					scrollWithAnimation
					scrollTop="0"
					style="height: 150px;"
					lowerThreshold="20"
					upperThreshold="20"
					onScrolltoupper={this.onScrolltoupper.bind(this, 'error')}
					onScroll={this.onScroll}
				>
					<View style="height:150px;background-color:rgb(26,173,25);">A</View>
					<View style="height:150px;background-color:rgb(39,130,215);">B</View>
					<View style="height:150px;background-color:rgb(241,241,241);color: #333;">C</View>
				</ScrollView>
				<View>
					{' Swiper'}
					<Swiper
						className="test-h"
						indicatorColor="#999"
						indicatorActiveColor="#333"
						// vertical
						circular
						indicatorDots
						autoplay
						onChange={this.bannerchange}
						onAnimationfinish={this.animationfinish}
					>
						<SwiperItem current="1" id="1">
							<View className="demo-text-1">1</View>
						</SwiperItem>
						<SwiperItem current="2" id="2">
							<View className="demo-text-2">2</View>
						</SwiperItem>
						<SwiperItem current="3" id="3">
							<View className="demo-text-3">3</View>
						</SwiperItem>
					</Swiper>
				</View>

				<View>
					{' MovableArea'}

					<MovableArea style="height: 200px; width: 200px; background: red;">
						<MovableView style="height: 50px; width: 50px; background: blue;" direction="all" />
					</MovableArea>
				</View>
				<RichText nodes={this.state.nodes} />
			</View>
		);
	}
}
