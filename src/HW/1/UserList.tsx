type AddressType = {
  street: string
  city: string
};

type UserType = {
  id: number
  name: string
  age: number
  address: Array<AddressType>
};

type UserListPropsType = {
  users: Array<UserType>

};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'s1'}>
      <h1>userList</h1>

      {props.users.map((user, index) => {
        return (
          <ul>
            <li key={index}>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>  {user.address.street}, {user.address.city}</li>
          </ul>
        )

      })}

    </div>

  );
};
