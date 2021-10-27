import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { WriterWrapper,WriteHeader,WriteItem,WriteDetail } from '../style'


class Writer extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <WriterWrapper>
                <WriteHeader>
                    <div className="left">推荐作者</div>
                    <div className="right">
                    <i  className="iconfont spin">&#xe71d;</i>
                        换一批</div>
                    </WriteHeader>
                    {
                        list.map((item)=>{
                            return(
                            <WriteItem key={item.get('id')}>
                            <img className="pic" src={item.get('writerImgUrl')} alt="" />
                                <WriteDetail>
                                 <div className="left">
                                    <h1 className="name">{item.get('name')}</h1>
                                    <p className="info">{item.get('info')}</p>
                                    </div>
                                <div className="right">+关注</div>
                                </WriteDetail>
                            </WriteItem>
                            )
                        })
                    }
                    <Link to='/authors'>
                        <i className="recommended-authors" >
                        查看全部
                        </i>
                    </Link>
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        list:state.getIn(['home','writerList'])
    }
}
export default connect(mapStateToProps,null)(Writer)