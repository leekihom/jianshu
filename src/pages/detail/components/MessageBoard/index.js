import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from '../../store'
import { Input,Button,Avatar, Tooltip,Comment,message} from 'antd'
import { UserOutlined,DeleteOutlined} from '@ant-design/icons';
import { DetailWrapper, Header,Content } from './style'
import axios from "axios";
import {apiServe} from "../../../../config";
axios.defaults.withCredentials = true;


class MessageBoard extends PureComponent {
    state={
        reply:'',
        replyList:[]
    }
    handleReply=(e)=>{
        this.setState({
            reply:e.target.value
        })
    }
    handleSubmit=()=>{
        // TODO 提交评论样式及其他修改
        if(!this.state.reply){
            message.warning('请输入评论内容')
        }
        axios.post(`${apiServe}/api/comment/addComment`,{
            content:this.state.reply,
            article_id:this.props.match.params.id,
        }).then((res)=>{
            const {code,data,Message} = res.data
            if(code === 0){
                this.fetchComment()
            }else{
                message.error(Message)
            }
        })
    }
    handleCancel = () =>{
        this.setState({
            reply: '',
        })
    }
    /**
     * 删除评论
     * @param item
     */
    handleDelete = (item) => {
        axios.post(`${apiServe}/api/comment/delComment`,{
            comment_id:item.id
        }).then((res)=>{
            const {code,data,Message} = res.data
            if(code === 0){
                this.fetchComment()
            }else{
                message.error(message)
            }
        })
    }
    /**
     * 获取评论数据
     */
    fetchComment = ()=>{
        axios.get(`${apiServe}/api/comment/getCommentList?article_id=${this.props.match.params.id}`).then((res)=>{
            const {code,data,message} = res.data
            if(code === 0){
                this.setState({
                    reply:'',
                    replyList:data
                })
            }else{
                message.error(message)
            }
        })
    }
    /**
     * 时间戳转换格式
     */
    timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y+M+D+h+m+s;
    }

    componentDidMount=()=>{
        this.props.getDetail(this.props.match.params.id);
        this.fetchComment()
    }
    render() {
        const {replyList} = this.state
        return (
                <DetailWrapper style={{marginTop:"30px"}}>
                    <Header>{this.props.title}</Header>
                    <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
                   <div>
                       <form>
                           
                           <Input.TextArea  rows={5} placeholder='写点什么吧...'
                                            value={this.state.reply}  
                                            onChange={this.handleReply}/>
                            <Button type="primary" style={{marginTop:"10px",marginRight:"20px"}} onClick={this.handleSubmit}>发布</Button>
                            <Button style={{marginTop:"10px"}} onClick={this.handleCancel}>取消</Button>   
                       </form>
                   </div>
                    <>
                        {replyList.length>0&&replyList.map((item,index)=> {
                        return <Comment
                        key={index}
                        author={<a href="/#">{item.author_name}</a>}
                        avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />}
                        content={<p>{item.content}</p>}
                        datetime={
                            <Tooltip title=''>
                                <span>{this.timestampToTime(item.date)}</span>
                            </Tooltip>
                        }
                        actions={[
                            <span onClick={() => this.handleDelete(item)}><DeleteOutlined />删除</span>
                        ]}
                        />
                        })}
                    </>
                </DetailWrapper>
        )
    }
}
const mapStateToProps = (state) =>({
    title:state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})

const mapDispatchToProps = (dispatch) =>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MessageBoard))

/* export default MessageBoard */