import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Commentaire from "./Commentaire";

export default function Commentaires(props) {
  return (
    <Row>
      <Col xs={12}>
        <h2>Derniers Commentaires</h2>
      </Col>
      {props.commentaires &&
        props.commentaires.map(commentaire => (
          <Col key={commentaire._id} xs={12} sm={6} md={4} lg={3}>
            <Commentaire commentaire={commentaire} />
          </Col>
        ))}
      {!props.commentaires && <Col xs={12}>Loading...</Col>}
    </Row>
  );
}