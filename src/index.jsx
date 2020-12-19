import React from 'react';
import ReactDOM from 'react-dom'
import { Layout, Row, Col} from 'antd';
import { ToDO } from './components/ToDO';

import 'antd/dist/antd.css';
import './index.css';

const { Header, Footer, Content } = Layout;

const App = () => {
    return (
        <Layout>
            <Header></Header>
            <Content>
                <Row>
                    <Col span={12} offset={6}>
                        <ToDO />
                    </Col>
                </Row>
            </Content>
            <Footer></Footer>
        </Layout>
    ) 
}

ReactDOM.render(<App />, document.getElementById('root'));