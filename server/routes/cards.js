const express = require("express");
const router = express.Router();
const Card = require("../models/cards");

// Get all cards
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get specific cards
router.get("/:id", getSpecificCard, async (req, res) => {
  try {
    res.json(res.card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Create card
router.post("/", async (req, res) => {
  const card = new Card({
    name: req.body.name,
    question: req.body.question,
    answer: req.body.answer,
    author: req.body.author,
    tags: req.body.tags,
  });

  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Update card (I have to find a better way to check the != null)
router.patch("/:id", getSpecificCard, async (req, res) => {
  if (req.body.name != null) {
    res.card.name = req.body.name;
  }
  if (req.body.question != null) {
    res.card.question = req.body.question;
  }
  if (req.body.answer != null) {
    res.card.answer = req.body.answer;
  }
  if (req.body.author != null) {
    res.card.author = req.body.author;
  }
  if (req.body.tags != null) {
    res.card.tags = req.body.tags;
  }
  try {
    const updatedCard = await res.card.save();
    res.json(updatedCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Delete card
router.delete("/:id", getSpecificCard, async (req, res) => {
  try {
    await res.card.deleteOne();
    res.send({ message: "Card removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSpecificCard(req, res, next) {
  let card;
  try {
    card = await Card.findById(req.params.id);
    if (card == null) {
      return res.status(404).json({ message: "Cant find the card" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.card = card;
  next();
}

module.exports = router;
