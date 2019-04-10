import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View ,Text} from '@tarojs/components';
import eye from '../../images/eye.png'
import comment2  from '../../images/comment2.png'
import invite  from  "../../images/invite.png"
import write  from  '../../images/write.png'
import icon1 from  '../../images/icon1.jpeg'
import './question.scss'
export default class PageView extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		return (
<View class="container">
    <View class="question-wrp">
        <View class="question-item">
            <View class="que-tag">
                <Text class="tag">阅读</Text>
                <Text class="tag">电子书</Text>
                <Text class="tag">Kindle</Text>
                <Text class="tag">书籍</Text>
                <Text class="tag">文学</Text>
            </View>
            <View class="que-title">
                选择 Kindle 而不是纸质书的原因是什么？
            </View>
            <View class="que-content">
                WEB前端*不靠谱天气预报员*想做代码小仙女
            </View>
            <View class="que-follow">
                <View class="left">
                    <View class="watch">
                        <image src={eye}></image>
                        <Text>3316</Text>
                    </View>
                    <View class="comment">
                        <image src={comment2}></image>
                        <Text>27</Text>
                    </View>
                </View>
                <View class="right">
                    关注
                </View>
            </View>
        </View>
        <View class="que-operate flex-wrp">
            <View class="invite flex-item">
                <image src={invite}></image>
                <Text>邀请回答</Text>
            </View>
            <View class="write flex-item">
                <image src={write}></image>
                <Text>写回答</Text>
            </View>
        </View>
    </View>
    <View class="answer-feed">
        <View  bindtap="bindItemTap" class="feed-item">
            <View class="feed-source">
                <a class="" bindTap="">
                    <View class="avatar">
                        <image src={icon1}></image>
                    </View>
                    <Text>Rebecca</Text>
                </a>
            </View>
            <View class="feed-content">
                <View class="answer-body">
                    <View>
                        <Text class="answer-txt">难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的... </Text>
                    </View>
                    <View class="answer-actions">
                        <View class="like dot">
                            <a>3.9K 赞同 </a>
                        </View>
                        <View class="comments dot">
                            <a>254 评论 </a>
                        </View>
                        <View class="time">
                            <a>2 个月前</a>
                        </View>

                    </View>
                </View>
            </View>
        </View>
        <View  bindtap="bindItemTap" class="feed-item">
            <View class="feed-source">
                <a class="" bindTap="">
                    <View class="avatar">
                        <image src={icon1}></image>
                    </View>
                    <Text>Rebecca</Text>
                </a>
            </View>
            <View class="feed-content">
                <View class="answer-body">
                    <View>
                        <Text class="answer-txt">难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的... </Text>
                    </View>
                    <View class="answer-actions">
                        <View class="like dot">
                            <a>3.9K 赞同 </a>
                        </View>
                        <View class="comments dot">
                            <a>254 评论 </a>
                        </View>
                        <View class="time">
                            <a>2 个月前</a>
                        </View>

                    </View>
                </View>
            </View>
        </View>
        <View  bindtap="bindItemTap" class="feed-item">
            <View class="feed-source">
                <a class="" bindTap="">
                    <View class="avatar">
                        <image src={icon1}></image>
                    </View>
                    <Text>Rebecca</Text>
                </a>
            </View>
            <View class="feed-content">
                <View class="answer-body">
                    <View>
                        <Text class="answer-txt">难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的... </Text>
                    </View>
                    <View class="answer-actions">
                        <View class="like dot">
                            <a>3.9K 赞同 </a>
                        </View>
                        <View class="comments dot">
                            <a>254 评论 </a>
                        </View>
                        <View class="time">
                            <a>2 个月前</a>
                        </View>

                    </View>
                </View>
            </View>
        </View>
        <View  bindtap="bindItemTap" class="feed-item">
            <View class="feed-source">
                <a class="" bindTap="">
                    <View class="avatar">
                        <image src={icon1}></image>
                    </View>
                    <Text>Rebecca</Text>
                </a>
            </View>
            <View class="feed-content">
                <View class="answer-body">
                    <View>
                        <Text class="answer-txt">难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的... </Text>
                    </View>
                    <View class="answer-actions">
                        <View class="like dot">
                            <a>3.9K 赞同 </a>
                        </View>
                        <View class="comments dot">
                            <a>254 评论 </a>
                        </View>
                        <View class="time">
                            <a>2 个月前</a>
                        </View>

                    </View>
                </View>
            </View>
        </View>
        <View  bindtap="bindItemTap" class="feed-item">
            <View class="feed-source">
                <a class="" bindTap="">
                    <View class="avatar">
                        <image src={icon1}></image>
                    </View>
                    <Text>Rebecca</Text>
                </a>
            </View>
            <View class="feed-content">
                <View class="answer-body">
                    <View>
                        <Text class="answer-txt">难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的... </Text>
                    </View>
                    <View class="answer-actions">
                        <View class="like dot">
                            <a>3.9K 赞同 </a>
                        </View>
                        <View class="comments dot">
                            <a>254 评论 </a>
                        </View>
                        <View class="time">
                            <a>2 个月前</a>
                        </View>

                    </View>
                </View>
            </View>
        </View>
        <View  bindtap="bindItemTap" class="feed-item">
            <View class="feed-source">
                <a class="" bindTap="">
                    <View class="avatar">
                        <image src={icon1}></image>
                    </View>
                    <Text>Rebecca</Text>
                </a>
            </View>
            <View class="feed-content">
                <View class="answer-body">
                    <View>
                        <Text class="answer-txt">难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的... </Text>
                    </View>
                    <View class="answer-actions">
                        <View class="like dot">
                            <a>3.9K 赞同 </a>
                        </View>
                        <View class="comments dot">
                            <a>254 评论 </a>
                        </View>
                        <View class="time">
                            <a>2 个月前</a>
                        </View>

                    </View>
                </View>
            </View>
        </View>



    </View>
</View>
		);
	}
}
