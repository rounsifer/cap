import React from 'react';
import { List, Avatar, Icon } from 'antd';
import ProblemListStyle from '../styling/ProblemList.css';
// all of this will be rendered inside of a container

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

const Problems = (props) => {

    return (
        <List

            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 5,
            }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item
                    style={{ background: '#fff', padding: '50px' }}
                    key={item.title}
                    //actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={
                            <a href={'/problems/' + item.id}
                                onMouseOver="this.style.color='lightgreen'"
                                onMouseOut="this.style.color='#fff'">
                                {item.title}
                            </a>
                        }
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    );
};

export default Problems;