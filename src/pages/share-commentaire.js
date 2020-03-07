import Form from "react-bootstrap/Form";
import Router from "next/router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const { useState } = require("react");

export default function ShareCommentaire() {
  const [message, setMessage] = useState("");

  async function submit(event) {
    event.preventDefault();
    await fetch("/api/commentaires", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    });
    Router.push("/");
  }

  return (
    <Container>
      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>A quoi pensez-vous ?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Dire quelque chose"
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Share
        </Button>
      </Form>
    </Container>
  );
}
