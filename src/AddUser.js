import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./actions";

const AddUser = () => {
  const usersFromStore = useSelector((state) => state.users);
  // eslint-disable-next-line
  const [user, setUser] = useState(usersFromStore);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    let newUser = {
      id: id + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    dispatch(add(newUser));

    handleReset();
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setId(id + 1);
  };

  useEffect(() => {
    setUser(usersFromStore);
  }, [usersFromStore]);

  return (
    <Container className="mt-5">
      <Form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicName1">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={firstName}
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={lastName}
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button className="mx-auto" variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddUser;
