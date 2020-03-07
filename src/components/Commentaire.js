import Card from "react-bootstrap/Card"

export default function Commentaire({ commentaire }) {
  const cardStyle = { marginTop: "15px" };
  return (
    <Card bg="secondary" text="white" style={cardStyle}>
      <Card.Body>
        <Card.Title>{commentaire.message}</Card.Title>
        <Card.Text>by {commentaire.author}</Card.Text>
      </Card.Body>
    </Card>
  );
}