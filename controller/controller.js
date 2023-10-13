const todoModel = require("../Model/todo.model");

async function getTODO(req, res) {
  const todo = await todoModel.findAll();

  res.json({
    todos: todo,
  });
}

async function postTODO(req, res) {
  const text = req.body.text;

  console.log(text);
  const todo = new todoModel(text);

  const result = await todo.save();

  console.log(result);

  const insertedId = result.insertedId;

  res.status(200).json({
    message: "successfully Added!",
    insertedId: insertedId,
  });

  // if(!result.ok) {
  //     return;
  // };

  // res.json({
  //     response: result
  // });
}

async function updateTODO(req, res) {
  const text = req.body.text;
  const id = req.params.id;

  // console.log(id);
  const todo = new todoModel(text, id);

  const result = await todo.save();

  console.log(result);

  res.status(200).json({
    message: "successfully updated!",
  });
}

async function deleteTODO(req, res) {
  try {
    const id = req.params.id;
    const todo = new todoModel(null, id);

    const result = await todo.delete();

    console.log(result);

    res.status(200).json({
      message: "successfully deleted!",
    });
  } catch (error) {console.log(error);}
}

module.exports = {
  getTODO: getTODO,
  postTODO: postTODO,
  updateTODO: updateTODO,
  deleteTODO: deleteTODO,
};
