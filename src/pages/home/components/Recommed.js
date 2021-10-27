import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommedWrapper, RecommedItem} from '../style'

class Recommed extends PureComponent {
    render() {
        const {list} = this.props;
        console.log(list);
        return (
            <RecommedWrapper>
               {
                list.map((item) => {
                    return(
                        <RecommedItem key={item.get('id')} imgUrl={item.get('Url')}/>
                    )
                })
            }
            </RecommedWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        list:state.getIn(['home','recommedList'])
    }
}
export default connect(mapStateToProps,null)(Recommed)
