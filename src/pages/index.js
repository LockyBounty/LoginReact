import Container from "react-bootstrap/Container";
import fetch from "isomorphic-fetch";
import Commentaires from "../components/Commentaires";
import Head from 'next/head';



function Index(props) {
  return (
    <Container>
      <Commentaires commentaires={props.commentaires} />
    </Container>
  );
}

Index.getInitialProps = async ({ req }) => {
  const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
  const res = await fetch(`${baseURL}/api/commentaires`);
  return {
    commentaires: await res.json()
  };
};

export default Index;