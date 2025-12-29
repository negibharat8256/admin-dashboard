import { useState } from "react";

const MOCK_USERS = [
  { id: 1, name: "John Doe", email: "john@test.com", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@test.com", status: "Pending" },
  { id: 3, name: "Mike Brown", email: "mike@test.com", status: "Inactive" },
  { id: 4, name: "Sara Lee", email: "sara@test.com", status: "Active" },
];

const UsersTable = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = MOCK_USERS.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-card">
      <h3>Users</h3>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}

          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan="3" style={{ padding: "20px" }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
