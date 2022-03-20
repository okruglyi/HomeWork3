import React, { useState } from "react";
import {Card, List, Avatar, Tag, Timeline} from 'antd';
import dayjs from "dayjs";
import 'dayjs/locale/ru';

import s from './styles.module.css';

export const Post = ({image, title, tags, author: {avatar, name, email}, text, created_at, updated_at}) => {

    const [tagSet, changeTagSet] = useState(tags);

    return (
        <List.Item>
            <Card
                title={
                    <a href="">{title}</a>
                }
                type="inner">
                <div className={s.user}>
                    <Avatar src={avatar}/>
                    <span style={{margin: '0 10px'}}>{name} {
                        <span style={{color: 'gray', fontSize: '12px'}}>{email}</span>
                    }</span>
                </div>
                <p>{text}</p>
                <div>
                    <span>{'Тэги: '}</span>
                    <span> {tagSet.map((it, index) => {
                        return (
                            <Tag key={index}>{it}</Tag>
                        )
                    })}
                    </span>
                </div>
                <Timeline className="ant-timeline">
                    <Timeline.Item color='gray'>
                        Создано {dayjs(created_at).format('YYYY-MM-DD HH:mm:ss')}
                    </Timeline.Item>
                    <Timeline.Item color='blue'>
                        Изменено {dayjs(updated_at).format('YYYY-MM-DD HH:mm:ss')}
                    </Timeline.Item>
                </Timeline>

            </Card>
        </List.Item>
    );
};