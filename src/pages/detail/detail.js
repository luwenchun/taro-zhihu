import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { getNode, computedTime } from '../../utils/util';
import { AtList, AtListItem, AtNavBar, AtCard } from 'taro-ui';
import ParseComponent from '../../components/WxParseComponent';
import './detail.scss';

export default class Detail extends Component {
	state = {
		collect: false,
		detail: ''
	};

	componentDidMount() {
		const id = this.$router.params.id;
		console.log(id);
		getNode('topic/' + id).then((res) => {
			console.log(res);
			this.setState({
				detail: res.data.data
			});
		});
	}

	handleBackClick = () => {
		Taro.navigateBack(-1);
	};

	handleCollectClick = () => {
		this.setState({
			collect: !this.state.collect
		});
	};

	// 根据tab字段，变成汉字
	changeType = (type) => {
		switch (type) {
			case 'good':
				return '精华';
				break;
			case 'share':
				return '分享';
				break;
			case 'ask':
				return '问答';
				break;
			case 'job':
				return '招聘';
				break;
		}
	};

	render() {
		const { detail, collect } = this.state;
		// const len = detail.replies.length
		// console.log(len);
		return (
			<View>
				<AtNavBar
					onClickRgIconSt={this.handleCollectClick}
					onClickLeftIcon={this.handleBackClick}
					color="#000"
					title={detail.title}
					leftIconType="chevron-left"
					rightFirstIconType={collect ? 'heart-2' : 'heart'}
				/>
				<View className="acticle_h3">
					<Image src={detail.author.avatar_url} style={{ width: '40px', height: '40px' }} />
					作者：
					{detail.author.loginname}
				</View>
				<View className="basicInfoWrap">
					<View className="at-article__info">发布于{computedTime(detail.create_at)}</View>
					<View className="at-article__info">{detail.visit_count}次浏览 </View>
					<View className="at-article__info">来自 {this.changeType(detail.tab)}</View>
				</View>
				<View className="divideLine" />

				{/* <View className="detailHtmlWrap" dangerouslySetInnerHTML={_html:{detail.content}}></View> */}

				{/* <ParseComponent mark={detail.content} /> */}
				<Text>{0}条回复</Text>
				{detail.replies.map((v, ind) => {
					return (
						<AtCard
							note={'发布于' + computedTime(v.create_at)}
							// extra="额外信息"
							title={v.author.loginname + ind + 1}
							thumb={v.author.avatar_url}
						>
							{v.content}
						</AtCard>
					);
				})}
				{/* <AtList>
					{detail.replies.map((v, ind) => {
						return (
							<AtListItem
								thumb={v.author.avatar_url}
								title={v.author.loginname + ind + 1}
								note={v.content}
							/>
						);
					})}
				</AtList> */}
			</View>
		);
	}
}
