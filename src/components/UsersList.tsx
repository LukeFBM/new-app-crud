import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { User, UserListFilter } from "../lib/types";
import { useState } from "react";

const getUsers = async (filter?: UserListFilter) => {
  const getQueryParams = (): string => {
    if (!filter) return "";
    const filterArr = Object.entries(filter)
      .map(([k, v]) => {
        if (!v) return null;
        return `${k}=${v}`;
      })
      .filter(Boolean);
    const queryParam = filterArr.join("&"); // join trasforma array in una stringa ed attacca i valori con un simbolo, in questo cas "&"
    return `?${queryParam}`;
  };

  const url = `https://jsonplaceholder.typicode.com/users${getQueryParams()}`;
  const res = await axios.get(url);
  return res.data;
};

const UsersList = () => {
  const [filter, setFilter] = useState<UserListFilter>({
    name: "",
    email: "",
    username: "",
    phone: "",
  });

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(filter),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center">All Users</h1>
      <div className="flex justify-center gap-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={filter.name}
          className="border-orange-800"
          aria-label="name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={filter.email}
          onChange={handleChange}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={filter.username}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          value={filter.phone}
          onChange={handleChange}
        />
        <button onClick={() => refetch()}>Filter</button>
      </div>

      <ul className="flex flex-col gap-8 mt-8">
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

/* Esercizio: creare un modal diGimmy */
