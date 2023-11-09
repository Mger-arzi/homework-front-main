type AddressType = {
  street: string
  city: string
};

type UserType = {
  id: number
  name: string
  age: number
  address: AddressType
};

type UserListPropsType = {
  users: Array<UserType>

};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'s1'}>
      <h1>userList</h1>
      <ul>
        {props.users.map((user, index) => {
          return (

            <li key={user.id}>{user.id}
              {user.name}
              {user.age}
              {user.address.street}, {user.address.city}
            </li>

          )

        })}
      </ul>

      

    </div>

  );
};
