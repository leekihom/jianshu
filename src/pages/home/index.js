import React, { PureComponent } from 'react'
import { HomeWrapper,HomeLeft,HomeRight,ImageStyle } from './style'
import { connect } from 'react-redux'
import { Carousel } from 'antd'
import  { actionCreators }  from './store'
import "antd/dist/antd.css";
import Topic from './components/Topic'
import Footer from '../../common/footer'
import List from './components/List'
import Recommed from './components/Recommed'
import Writer from './components/Writer'
import { BackTop } from './style'

class Home extends PureComponent {

    handleSrcollTop(){
        window.scrollTo(0,0)
    }


    render() {
        
        return (
            <div>
               <HomeWrapper>
                  <HomeLeft>
                      <ImageStyle>
                      <Carousel autoplay dots={false} >
                        <img src="assets/kittens.jpeg" alt="imgPic" />
                        <img src="assets/u=262165884.jpg"  alt="imgPic" />
                        <img src="assets/u=371337522.jpg"  alt="imgPic" />
                        <img src="assets/u=2235903830.jpg"  alt="imgPic" />
                      </Carousel>
                      </ImageStyle>
                      <Topic/>
                      <List/>
                  </HomeLeft> 
                  <HomeRight> 
                      <Recommed />
                      <Writer/>
                  </HomeRight>
                  {
                      this.props.showScroll ? <BackTop onClick={this.handleSrcollTop}>
                      <i className="iconfont">&#xe631;</i>
                      </BackTop> : null
                  }
               </HomeWrapper>
               <Footer/>
            </div>
        )
    }
    //组件挂载后执行
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvent();
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state) =>({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatchToProps = (dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(event){
        if (document.documentElement.scrollTop > 300) {
           dispatch(actionCreators.toTop(true)) 
        }else{
            dispatch(actionCreators.toTop(false)) 
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

