import { UserType } from './HW2';


type AddessType_2 = {
  street: string
  city: string
}

type UserList_2Type = {
  id: number
  name: string
  age: number
  address: AddessType_2
};
type CurrentUserPropsType = {
  user: UserList_2Type // пропиши типизацию
};


export const CurrentUser = (props: CurrentUserPropsType) => {
  return (
    <li key={props.user.id} id={`hw02-user-${props.user.id}`}>
      <strong>{props.user.name}</strong> (Age: {props.user.age})<strong> Address: </strong>
      {props.user.address.street}, {props.user.address.city}
    </li>
  );
};
