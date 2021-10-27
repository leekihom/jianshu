import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;

`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
`;

export const ImageStyle = styled.div`
    overflow: hidden;
    width: 100%;
    height: 300px;  
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    /* margin-left: -18px; */
    border-bottom: 1px solid #f0f0f0;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    padding-right: 10px;
    margin-right: 18px;
    margin-bottom: 18px;
    line-height: 32px;
    background: #f7f7f7;
    font-size: 15px;
    color: #000;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    .top-pic{
        display: block;
        float: left;
        width: 32px;
        height: 100%;
        margin-right: 10px;
        
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 4px;
    }
`;
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    padding-right: 10px;
    .title{
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
    }
    .desc{
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommedWrapper = styled.div`
    margin:40px 0;
    height:210px;
    width: 280px;
`;

export const RecommedItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props)=> props.imgUrl});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    width: 278px;
    border-radius: 3px;
    height: 300px;
    .recommended-authors{
        padding:7px 7px 7px 12px;
        width:276px;
        color:#787878;
        font-size:13px;
        background-color:#f7f7f7;
        border:1px solid #dcdcdc;
        border-radius:4px;
        text-align:center;
        position:absolute;
    }
`;

export const WriteHeader = styled.div`
    width: 100%;
    height: 40px;
    .left{
        float: left;
        line-height: 40px;
        font-size: 14px;
        color: #969696;
    }
    .right{
        float: right;
        line-height: 40px;
        font-size: 14px;
        color: #969696;
    }
    .spin{
        display: block;
        float: left;
        font-size: 15px;
        margin-right: 2px;
        margin-top: 1px;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        trasform-orgin: center center;
    }
`;

export const WriteItem = styled.div`
    width: 100%;
    height: 48px;
    margin-bottom: 15px;
    .pic{
        width: 48px;
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 50%;
        float: left;
    }
`;

export const WriteDetail = styled.div`
    font-size: 16px;
    
    .left{
        margin-top: 10px;
        padding-left: 10px;
        float: left;
    }
    .info{
        color: #969696;
        font-size: 12px;
        margin-top: 5px;
    }
  
    .right{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px auto;
    font-size: 15px; 
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 45px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
/*     border: 1px solid #ccc;
    background:#f0f0f0; */
    .iconfont{
        font-size: 60px;
    }
`;