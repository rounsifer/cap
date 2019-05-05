import React from 'react';
import { Form, Icon, Input, Button, Spin, Carousel, message } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import '../styling/Carousel.css';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const loading_indicator = () => {
    const hide = message.loading('Logging in...', 3);
    setTimeout(hide, 500);

};

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // authenticate user here
                this.props.onAuth(values.userName, values.password)
            }
        });
        this.props.history.push('/play');
    }

    render() {

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                {errorMessage}
                {
                    this.props.loading ?

                        <Spin indicator={antIcon} />

                        :
                        <React.Fragment>
                            <Carousel autoplay autoplaySpeed='100'>
                                <div><h1>AIHPI</h1><h2>All-Inclusive Health and Present Illness Report</h2><h2>Textbook Companion.</h2></div>
                                <div><h1>AIHPI</h1><h1>Real cases. Real results.</h1><h2>Train on 25+ cases that have already been solved by Doctors with 30+ years experience.</h2></div>
                                <div><h1>AIHPI</h1><h1>Expedite the decision making process.</h1><h2>Learn how to generete a Differential Diagnosis (DDx) quickly.</h2></div>
                                <div><h1>AIHPI</h1><h1>Practice. Practice. Practice.</h1><h2>Crafting a concise AIHPI can not only save the hospital money, it could save a life.</h2></div>
                            </Carousel>

                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    )}
                                </Form.Item>

                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    )}
                                </Form.Item>

                                <Form.Item>
                                    <Button onClick={loading_indicator} type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                                        Login
                            </Button>
                                    Or
                            <NavLink
                                        style={{ marginRight: '10px' }}
                                        to='/signup/'> signup
                            </NavLink>
                                </Form.Item>
                            </Form>
                        </React.Fragment>
                }
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);