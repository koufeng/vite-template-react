import React, { FC, useEffect, useMemo, useState } from 'react';
// UI library Ant Design
import { List, Avatar } from 'antd';
// store
import { testStore } from '../store';
// mock
import { _users, type User } from '../_mock';

// ----------------------------------------------------------------------

const Swap: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const count = testStore((state) => state.count);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.count('fetch');
      setUsers(_users);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const userCount = useMemo(() => users.length + count, [users, count]);

  return (
    <>
      <h1>Swap, 当前人数{userCount}</h1>
      <UserList users={users} />
      <List
        header={<div>我是Swap 来自store:{count}</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={users}
        renderItem={(item) => (
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={`${item.firstName} ${item.lastName}, ${item.email}`}
            description={`${item.sex}, ${item.subscriptionTier}, ${item.birthday}`}
          />
        )}
      />
    </>
  );
};

export default Swap;

// ----------------------------------------------------------------------
type UserListProps = {
  users: User[];
};

const UserList = ({ users }: UserListProps) => (
  <ul>
    {users.map((user) => (
      <li key={user._id}>
        {user.firstName} {user.lastName} : {user._id}
      </li>
    ))}
  </ul>
);
