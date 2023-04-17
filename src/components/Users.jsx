import { IconAccessible } from '@tabler/icons-react';

const allUsers = ['John', 'Paul', 'Gab'];

const Users = () => {
  return (
    <div className="my-users" id="my-users-id">
      <ul>
        {allUsers.map((user) => {
          const lastName = 'ShakeAndBake';
          return (
            <li className="list-item" key={user}>
              {user}
              <span>{<IconAccessible />}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
