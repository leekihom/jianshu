import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import BraftEditor from 'braft-editor'
import { Layout,Tooltip ,Calendar,message,Form ,Input} from 'antd'
import axios from 'axios'
import QS from 'qs'
import 'braft-editor/dist/index.css'
import * as constants from "../login/store/constants";
import {apiServe} from "../../config";
const { Sider, Content } = Layout;
class Write extends Component {

    state = {
        editorState: BraftEditor.createEditorState(null), // 设置编辑器初始内容
        title:'',
        description:'',
        /* cover:'' */
      }
    
    handleChange = (editorState) => {
        this.setState({
            ...this.state,
            editorState: editorState,
        })
    }
    //发布之后向后台接口发送
    handleSubmit = (dispatch) => {
        
       /*  let srcArr = this.state.editorState.toHTML().match(/data[\'\"]?([^\'\"]*)[\'\"]?/gi);
        console.log(srcArr); */

        //使用this.state.editorState.toRAW()转换编辑文本为RAW格式的字符串，用于持久保存
        axios({
            url:`${apiServe}/api/article/addArticle`,
            method:'post',
            data:QS.stringify({
                title:this.state.title,
                content:this.state.editorState.toRAW(),
                description:this.state.description,
                cover:'assets/46024.jpeg' //TODO 封面,使用上传图暂时有bug未修复
            })
        }
        ).then(
            res =>{
                const {code,data:result} = res.data;
                if(code === 0){
                    const key = 'updatable';
                    message.loading({ content: '发布中...', key ,duration: 1.8});
                    setTimeout(() => {
                        message.success({ content: '发布成功!', key, duration: 1.8 });
                        this.props.history.push('/');
                    }, 2000);
                    this.setState({
                        editorState: BraftEditor.createEditorState(null), // 设置编辑器初始内容
                        title:'',
                        description:''
                    });
                       
                }else {
                    const key = 'updatable';
                    message.loading({ content: '发布中...', key ,duration: 1.8});
                    setTimeout(() => {
                        message.error('发布失败!');
                    }, 2000); 
                }
            },
            erro =>{
                message.error(erro.message);
            }
        )
        
    }

    handleClear = () =>{
        this.setState({
            ...this.state,
            editorState:BraftEditor.createEditorState(null)
        })
        
    }
    handleFormChange = (type,e) =>{
        this.setState({
            ...this.state,
            [type]:e.target.value
        })
    }

    render() {
        const { editorState } = this.state;
        const { login_state } = this.props;
        /* const emoticons = defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`)); */
        /* 富文本编辑器添加表情组件 */
        /* BraftEditor.use(Emoticon({
            includeEditors: ['demo-editor-with-emoticon'],
            emoticons: emoticons
          })) */
        if (login_state) {
            return (
                <>
                <Layout style={{height: '880px',backgroundColor:'#fff',borderTop:'1px solid #f0f0f0'}}>
                    <Sider style={{ background: '#f0f2f5',borderRight:'1px solid #f0f0f0',backgroundColor:'#fff'} }width='300px' >
                    {/* Calender By Antd */}
                    <div className="site-calendar-demo-card" style={{position:'absolute',top:'100px'}}>
                    <Calendar fullscreen={false}  />
                    </div>
                    </Sider>
                    <Form style={{padding:'50px 30px 0 30px'}}>
                            <Form.Item>
                                <Input size="large" placeholder="请输入标题" value={this.state.title} name="title" onChange={(e)=>this.handleFormChange('title',e)}/>    
                            </Form.Item>
                            <Form.Item>
                               <Input.TextArea size="large" placeholder="请输入摘要"  value={this.state.description} name="description" onChange={(e)=>this.handleFormChange('description',e)}/>
                            </Form.Item>
                            <Form.Item>
                                <BraftEditor
                                value={editorState}
                                placeholder="请输入正文内容"
                                onChange={this.handleChange}
                                /* media={{uploadFn:uploadImg}} */
                                contentStyle={{height:'650px'}}/>
                            </Form.Item>
                        
                    </Form>
                    <Sider style={{background: '#f0f2f5',borderLeft:'1px solid #f0f0f0',backgroundColor:'#fff'}} width='50px'>
                        <div style={{paddingTop:'60px'}}>
                        <Tooltip placement="left" title={'发布文章'}>
                            <i className='iconfont' 
                            onClick={this.handleSubmit}
                            style={{fontSize:'29px',padding:'10px',position:'absolute',cursor:'pointer'}}
                            >&#xe8a6;</i>
                        </Tooltip>
                        </div>
                        <div style={{paddingTop:'60px'}}>
                        <Tooltip placement="left" title={'清空'}>
                            <i className='iconfont' 
                            onClick={this.handleClear}
                            style={{fontSize:'29px',padding:'10px',cursor:'pointer'}}
                            >&#xe6c3;</i>
                        </Tooltip>
                        </div>
                        <div style={{paddingTop:'30px'}}>
                        <Tooltip placement="left" title={'哎呀，什么都没有呢'}>
                            <i className='iconfont' style={{fontSize:'29px',padding:'10px',cursor:'pointer'}}>&#xe607;</i>
                        </Tooltip>
                        </div>
                    </Sider>
                </Layout>
                </>
                )
        } else {
            return <Redirect to='/login' />
        }
    }
}

const mapStateToProps = (state) =>({
    login_state:state.getIn(['login','login'])
})
 
export default connect(mapStateToProps,null)(Write)