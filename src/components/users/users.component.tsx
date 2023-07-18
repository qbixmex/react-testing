import { useState, useEffect } from "react";
import { User } from "./users";

const Users = () => {

  const [ users, setUsers ] = useState<User[]>([]);
  const [ error, setError ] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json() as User[];
      setUsers(data.map(user => user));
    } catch(error) {
      setError('Error fetching users');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Users</h1>
      { error && <p>{ error }</p> }
      <ul>
        { users.map(({id, name}) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
