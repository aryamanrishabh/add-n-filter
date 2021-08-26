import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.users);
  return (
    <Table className="mt-5 px-5 text-center" striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Users;
