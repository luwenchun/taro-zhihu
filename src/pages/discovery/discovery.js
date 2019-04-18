import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View, Text, Swiper, SwiperItem, Image } from '@tarojs/components';
import { AtLoadMore, AtTag } from 'taro-ui';
import { getDiscovery } from '../../utils/util.js';
import img1 from '../../images/24213.jpg';
import img2 from '../../images/24280.jpg';
import img3 from '../../images/1444983318907-_DSC1826.jpg';
import user from '../../images/icon9.jpeg';
import './discovery.scss';

export default class PageView extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			navTab: [ '推荐', '圆桌', '热门', '收藏' ],
			currentNavtab: '0',
			imgUrls: [ img1, img2, img3 ],

			feed: [],
			feed_length: 0
		};
	}
	componentDidMount() {
		this.updatelist();
	}

	componentWillUnmount() {}
	updatelist = () => {
		var feed = getDiscovery();
		console.log('loaddata');
		var feed_data = feed.data;
		this.setState(
			{
				feed: feed_data,
				feed_length: feed_data.length
			},
			() => {
				console.log('updatelist', this.state);
			}
		);
	};
	nextpagelist = () => {};
	switchTab = (e) => {
		this.setState({
			currentNavtab: e
		});
	};

	render() {
		let { currentNavtab, navTab, feed, imgUrls } = { ...this.state };
		return (
			<View>
				<View className="top-tab flex-wrp flex-tab ">
					{navTab.map((itemName, index) => {
						return (
							// this.switchTab.bind(this,index)
							<View
								className={currentNavtab == index ? 'toptab flex-item active' : 'toptab flex-item '}
								onClick={() => {
									this.switchTab(index);
								}}
							>
								{itemName}
							</View>
						);
					})}
				</View>

				<ScrollView
					scrollY="true"
					scrollWithAnimation
					scrollY="true"
					scrollTop="0"
					lowerThreshold="10"
					upperThreshold="10"
					className="container discovery withtab"
					onScrollToUpper={this.updatelist}
					onScrollToLower={this.nextpagelist}
				>
					<View className="ctnt0" hidden={currentNavtab == 0 ? '' : true}>
						<Swiper
							className="activity"
							indicatorDots="false"
							autoplay="true"
							interval="5000"
							duration="1000"
						>
							{imgUrls.map((item) => {
								return (
									<View>
										<SwiperItem>
											<Image src={item} className="slide-image" width="355" height="155" />
										</SwiperItem>
									</View>
								);
							})}
						</Swiper>

						{feed.map((item) => {
							return (
								<View className="feed-item">
									<View className="feed-source">
										<a className="">
											<View className="avatar">
												<image src={user} />
											</View>
											<Text>{item.feed_source_name}</Text>
										</a>
									</View>
									<View className="feed-content">
										<View className="question" qid="{{question_id}}" bindtap="bindQueTap">
											<a className="question-link">
												<Text>{item.question}</Text>
											</a>
										</View>
										<View className="answer-body">
											<View bindtap="bindItemTap">
												<Text className="answer-txt">{item.answer_ctnt}</Text>
											</View>
											<View className="answer-actions" bindtap="bindItemTap">
												<View className="like dot">
													<a>{item.good_num} 赞同 </a>
												</View>
												<View className="comments dot">
													<a>{item.comment_num} 评论 </a>
												</View>
												<View className="follow-it">
													<a>关注问题</a>
												</View>
											</View>
										</View>
									</View>
								</View>
							);
						})}
					</View>
					<View className="ctnt1 placehold" hidden={currentNavtab == 1 ? '' : true}>
						<Text>圆桌</Text>
					</View>
					<View className="ctnt2 placehold" hidden={currentNavtab == 2 ? '' : true}>
						<Text>热门</Text>
					</View>
					<View className="ctnt3 placehold" hidden={currentNavtab == 3 ? '' : true}>
						<Text>收藏</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}
