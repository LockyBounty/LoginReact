
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
router.use(bodyParser.json());

const commentaires = [
  { _id: 123, message: "I love pepperoni pizza!", author: "unknown" },
  { _id: 456, message: "I'm watching Netflix.", author: "Luke" },
  { _id: 459, message: "I'm watching yo ass.", author: "Luke" }
];

router.get("/api/commentaires", (req, res) => {
  const commentairesTri = commentaires.sort((t1, t2) => t2._id - t1._id);
  res.send(commentairesTri);
});

router.post("/api/commentaires", (req, res) => {
  const { message } = req.body;
  const newCommentaires = {
    _id: new Date().getTime(),
    message,
    author: "unknown"
  };
  commentaires.push(newCommentaires);
  res.send({ message: "Thanks!" });
});

module.exports = router;
