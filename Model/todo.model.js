const db = require("../data/database");
const mongodb = require('mongodb')

class TODO {
  constructor(text, id) {
    this.text = text;
    this.id = id;
  }

  save() {
    if (this.id) {
        const todoId = new mongodb.ObjectId(this.id)
        return db.getDB().collection("todos").updateOne({ _id: todoId }, {$set: {text: this.text}});
    } else {
      return db.getDB().collection("todos").insertOne({ text: this.text });
    }
  }

  static async findAll() {
    try {
      const data = db.getDB(); // Assuming you have a valid database connection
      const todosCollection = data.collection("todos");
      const sortedTodos = await todosCollection
        .find()
        .sort({ timestamp: -1 })
        .toArray();
      return sortedTodos;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async delete() {
    try {
        const todoId = new mongodb.ObjectId(this.id)
        const data = db.getDB(); // Assuming you have a valid database connection
        const todosCollection = data.collection("todos");
        const deleteTODO = await todosCollection
          .deleteOne({_id: todoId});
        return deleteTODO
      } catch (error) {
        console.error("Error:", error);
      }
  }
}

module.exports = TODO;
