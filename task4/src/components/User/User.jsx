import { useState, useEffect } from 'react';
import './User.css'

const User = () => {
    const [users, setUsers] = useState([]); // Data store karne ke liye
  const [loading, setLoading] = useState(true); // Loading dikhane ke liye

  useEffect(() => {
    // 1. Data fetch karo
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // JSON mein convert karo
      .then(data => {
        setUsers(data); // State mein save karo
        setLoading(false); // Loading band karo
      });
    }, []); // [] ka matlab: Sirf ek baar jab page load ho

    if (loading) return <h2>Data aa raha hai... Sabr rakhein! ⏳</h2>;

  return (
    <div>
      <h1>My Friends List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default User