import React from "react";
import { Post } from "../Post";
import { List } from "antd";


export const PostsList = ({entity}) => {
  return (
      <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={entity}
          renderItem={item => (
              <Post {...item}/>
          )}
      />
  );
};
