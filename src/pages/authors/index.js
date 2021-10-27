import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { AuthorWrapper,Wrap } from './style';


class Authors extends PureComponent {
    render() {
        const {authorslist} = this.props;
        return (
                <AuthorWrapper>
                    <img src="assets/recommend-author.png" alt=""></img>
                    <Row>
                        
                        {/* <Col span={8}>
                            <Wrap>
                                <a href=" ">
                                    <img src="https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt=""></img>
                                    <h4>卢璐说</h4>
                                    <p >欢迎关注我的个人公众号：lulu_blog&lt;...</p>
                                </a>
                                <a className="btn" href=" ">
                                    <span>+关注</span>
                                </a>
                                <hr />
                                <div className="meta">最近更新</div>
                                <div className="recent-update">
                                    <a href=" " className="new">
                                    高调离婚的佟丽娅们，为什么总要拖几年？
                                    </a>
                                    <a href=" " className="new">
                                    45岁我终于明白，女人到中年才开始精彩
                                    </a>
                                    <a href=" " className="new">
                                    “那个只买20块衣服的女孩，还有救吗？”
                                    </a>
                                </div>
                            </Wrap>
                        </Col> */}
                    </Row>
                    <a className="load"  href=" ">加载更多</a>
                </AuthorWrapper>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        authorslist:state.getIn(['home','writerList'])
    }
}
export default Authors;