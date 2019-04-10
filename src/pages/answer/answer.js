import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View ,Text} from '@tarojs/components';
import icon1 from '../../images/icon1.jpeg'
import thrf from '../../images/1444983318907-_DSC1826.jpg'
import goodbad from '../../images/good-bad.png'

import flag from  "../../images/flag.png"
import heart2 from "../../images/heart2.png"
import star2 from "../../images/star2.png"
import comment from "../../images/comment.png"
import './answer.scss'
export default class PageView extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		return (
			<View class="container">
    <View class="question" bindtap="toQuestion">
        <Text class="question-title">选择 Kindle 而不是纸质书的原因是什么？</Text>
    </View>
    <View class="answerer-wrp">
        <View class="bg-half"></View>
        <View class="answerer flex-wrp">
            <View class="avatar flex-item">
                <image src={icon1}></image>
            </View>
            <View class="answerer-info flex-item">
                <Text class="answerer-name">Rebecca</Text>
                <Text class="answerer-des">WEB前端*不靠谱天气预报员*想做代码小仙女</Text>
            </View>
            <View class="follow flex-item">
                <Text>十 关注</Text>
            </View>
        </View>
    </View>
    <View class="answer-content">
        <Text>难道不明白纸质书更贵啊！！！

            若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。

            另外，用kindle看小说的怎么真心不懂了。题主不看小说么？难道题主拿来看教科书还是技术文档？还是题主觉得小说就是小时代内样的？（对小时代没偏见，尊重多样性）

            而且纸质书搬起来真心困难啊！当初毕业带不回来，忍痛卖了不少好桑心！

            碎片时间阅读总不能天天背着一本书吧，那么占地方。

            看到描述最后一段，感觉有骗答案的嫌疑

        </Text>
        <image src={thrf}></image>
        <Text>
            难道不明白纸质书更贵啊！！！

            若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。

            另外，用kindle看小说的怎么真心不懂了。题主不看小说么？难道题主拿来看教科书还是技术文档？还是题主觉得小说就是小时代内样的？（对小时代没偏见，尊重多样性）

            而且纸质书搬起来真心困难啊！当初毕业带不回来，忍痛卖了不少好桑心！

            碎片时间阅读总不能天天背着一本书吧，那么占地方。

            看到描述最后一段，感觉有骗答案的嫌疑

        </Text>
        <image src={thrf}></image>
    </View>

    <View class="answer-footer flex-wrp">
        <View class="good flex-item">
            <View class="good-bad">
                <image src={goodbad}></image>
            </View>
            <View class="good-num">2.1k</View>
        </View>
        <View class="operation-wrp flex-item">
            <View class="operation flex-wrp flex-tab">
                <View class="operation-btn flex-item">
                    <image src={flag}></image>
                    <Text>没有帮助</Text>
                </View>
                <View class="operation-btn flex-item">
                    <image src={heart2}></image>
                    <Text>感谢</Text>
                </View>
                <View class="operation-btn flex-item">
                    <image src={star2}></image>
                    <Text>收藏</Text>
                </View>
                <View class="operation-btn flex-item">
                    <image src={comment}></image>
                    <Text>302</Text>
                </View>

            </View>
        </View>



    </View>
</View>

		);
	}
}
