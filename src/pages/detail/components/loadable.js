import React ,{Component}from 'react'
import { Spin } from 'antd';
import { Loading } from '../style'
import 'antd/dist/antd.css';


class loadable extends Component {
    render() {
        return (
            <Loading>
                <Spin tip="Loading..." size="large" />
            </Loading>
        );
    }
}

export default loadable;
