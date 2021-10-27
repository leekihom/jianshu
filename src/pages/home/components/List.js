import React, { PureComponent } from 'react'
import { connect } from 'react-redux' 
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import { ListItem,ListInfo,LoadMore } from '../style'
import { actionCreators } from '../store'
class List extends PureComponent {
    checkImg(item){
        if(item.get('imgUrl')){
          return  <img className='pic' src={item.get('imgUrl')} alt='' /> 
        }
    }
    render() {
        const { list,getMoreList,page } = this.props;
        return (
            <div>
                {
                list&& list.map((item)=>{
                    //当item是Map对象时
                    
                    if(item.get){
                        return(
                            <Link key={nanoid(10)} to={'/detail/'+item.get('id')}>
                                <ListItem >
                                    {this.checkImg(item)}
                                    <ListInfo >
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('description')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    }else{
                        return null
                    }
                })
                }
                <LoadMore onClick={()=>{getMoreList(page)}}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
        list:state.getIn(['home','articleList']),
        page:state.getIn(['home','articlePage'])
});

const mapDispatchToProps = (dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(List)
