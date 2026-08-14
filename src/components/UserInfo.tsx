import { useEffect, useState } from "react"
import Loader from "./LoaderContainer"

interface User {
  id: number;
  name: string;
  email: string;
}

function UsersInfo() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-xl mb-4">Loading users...</h2>
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Users List</h2>
      <ul className="space-y-2">
        {users?.map(user => (
          <li key={user.id} className="p-2 border rounded">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersInfo;