import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';

import Index from './pages/home/index';

import configStore from './store';

import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
// 	require('nerv-devtools');
// }

const store = configStore();

class App extends Component {
	config = {
		pages: [
			'pages/index/index',
			'pages/discovery/discovery',
			'pages/notify/notify',
			'pages/chat/chat',
			'pages/more/more',
			'pages/answer/answer',
			'pages/question/question',
			'pages/home/index',
			'pages/search/search',
			'pages/movie/movie',
			'pages/study/study',
			'pages/detail/detail',
			'pages/login/login'
		],
		window: {
			backgroundTextStyle: 'light',
			navigationBarBackgroundColor: '#0068C4',
			navigationBarTitleText: '知乎',
			navigationBarTextStyle: 'white',
			enablePullDownRefresh: true
		},
		tabBar: {
			color: '#626567',
			selectedColor: '#2A8CE5',
			backgroundColor: '#FBFBFB',
			borderStyle: 'white',
			list: [
				{
					pagePath: 'pages/index/index',
					text: '首页',
					iconPath: './images/index.png',
					selectedIconPath: './images/index_focus.png'
				},
				{
					pagePath: 'pages/discovery/discovery',
					text: '发现',
					iconPath: './images/discovery.png',
					selectedIconPath: './images/discovery_focus.png'
				},
				{
					pagePath: 'pages/home/index',
					text: 'redux',
					iconPath: 'images/ring.png',
					selectedIconPath: 'images/ring_focus.png'
				},
				{
					pagePath: 'pages/chat/chat',
					text: 'demo',
					iconPath: 'images/chat.png',
					selectedIconPath: 'images/chat_focus.png'
				},
				{
					pagePath: 'pages/more/more',
					text: '我的',
					iconPath: './images/burger.png',
					selectedIconPath: './images/burger_focus.png'
				}
			]
		}
	};

	componentDidMount() {}

	componentDidShow() {}

	componentDidHide() {}

	componentDidCatchError() {}

	// 在 App 类中的 render() 函数没有实际作用
	// 请勿修改此函数
	render() {
		return (
			<Provider store={store}>
				<Index />
			</Provider>
		);
	}
}

Taro.render(<App />, document.getElementById('app'));
