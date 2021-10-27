import React, { PureComponent } from 'react'
import { connect } from 'react-redux' 
import { TopicWapper,TopicItem } from '../style'

class Topic extends PureComponent {
    
    render() {
        const {list} = this.props;
        return (
                <TopicWapper>
                {
                 list.map((item) => {
                     return(
                        <TopicItem key={item.get('id')}>   
                        <img className="top-pic" src={item.get('imgUrl')}  alt="toppic" />
                        {item.get('title')}
                        </TopicItem>
                        )
                     })
                }
                </TopicWapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        list:state.getIn(['home','topicList'])
    }
}

export default connect(mapStateToProps,null)(Topic)