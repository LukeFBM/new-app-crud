import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { User } from "../lib/types";

export const users = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  const res = await axios.get(users);
  return res.data;
};

const UsersList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center">All Users</h1>
      <ul className="flex flex-col gap-8">
        {data.map((user: User) => {
          return (
            <li className="flex gap-48 justify-center" key={user.id}>
              <h5>{user.name}</h5>
              <h5>{user.email}</h5>
              <h5>{user.username}</h5>
              <h5>{user.phone}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
