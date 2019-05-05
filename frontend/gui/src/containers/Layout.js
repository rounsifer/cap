import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, message } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import index from '../styling/index.css';

const { Header, Content, Footer } = Layout;
class CustomLayout extends React.Component {

    render() {

        return (
            <Layout className="layout" >
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '70px' }}
                    >
                        {
                            this.props.isAuthenticated ?
                                <Menu.Item key="1" onClick={this.props.logout}><Link to="/login">Logout</Link></Menu.Item>
                                :
                                <Menu.Item key="1"><Link to="/login">Login</Link></Menu.Item>
                        }
                        {
                            this.props.isAuthenticated ?
                                <Menu.Item key="2"><Link to="/play">Play</Link></Menu.Item>
                                :
                                <Menu.Item key="2"><Link to="/login">Play</Link></Menu.Item>
                        }
                        {
                            this.props.isAuthenticated ?
                                <Menu.Item key="3"><Link to="/problems/">Problems</Link></Menu.Item>
                                :
                                <Menu.Item key="3"><Link to="/login">Problems</Link></Menu.Item>
                        }

                    </Menu>
                </Header>
                <Content style={{ background: 'lightgreen', padding: '0 50px' }}>

                    <div style={{ background: 'lightgreen', padding: 24, minHeight: 280 }}>
                        {
                            console.log(this.props.children.values)
                        }
                        <center>
                            {this.props.children}
                        </center>
                    </div>
                </Content>
            </ Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}
//<div style={{ background: 'lightgreen', padding: 24, minHeight: 280 }}>
export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));