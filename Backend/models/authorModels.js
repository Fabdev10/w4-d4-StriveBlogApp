import mongoose from "mongoose";


const authorSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  email: String,
  data_di_nascita: String,
  avatar: String,
});

const Author = mongoose.model(
  "authors",
  authorSchema
);

export default Author;