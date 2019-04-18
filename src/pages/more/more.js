import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { getStorage } from '../../utils/util';
import './more.scss';
import { AtButton, AtSearchBar } from 'taro-ui';
import icon8 from '../../images/icon8.jpg';
export default class Person extends Component {
	constructor() {
		super();
		this.state = {
			person: getStorage('person')
		};
	}

	handleLogout = () => {
		Taro.removeStorageSync('person');
		Taro.redirectTo({
			url: '/pages/login/login'
		});
	};
	handleLogin = () => {
		Taro.redirectTo({
			url: '/pages/login/login'
		});
	};

	handleGoSearch = (n) => {
		console.log(n);
		if (n == 3) {
			Taro.navigateTo({
				url: '/pages/movie/movie'
			});
		} else if (n == 2) {
			Taro.navigateTo({
				url: '/pages/study/study'
			});
		} else {
			Taro.navigateTo({
				url: '/pages/search/search?type=' + n
			});
		}
	};

	render() {
		return (
			<View>
				<View className="imagePersonWrap">
					<Image className="bgImage" src={icon8} alt="底部图片" />
					<View className="personCon" />

					<AtButton onClick={this.handleGoSearch.bind(this, 1)}>查询天气</AtButton>
					<AtButton onClick={this.handleGoSearch.bind(this, 2)}>论坛提问</AtButton>
					<AtButton onClick={this.handleGoSearch.bind(this, 3)}>小视频</AtButton>
					{this.state.person ? (
						<AtButton onClick={this.handleLogout} type="danger" className="logoutBtn">
							退出登录
						</AtButton>
					) : (
						<AtButton onClick={this.handleLogin} type="primary" className="logoutBtn">
							登录
						</AtButton>
					)}
				</View>
			</View>
		);
	}
}
