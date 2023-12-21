const connectDB = require("./src/db");

const createUser = async (tarea) => {
  const db = await connectDB()
  const userColletion = db.collection('tareas')
  try {
    const res = await userColletion.insertOne(tarea)
    console.log("🚀 ~ file: app.js:9 ~ createUser ~ res:", res)
    return res
  } catch (err) {
    console.log("🚀 ~ file: app.js:11 ~ createUser ~ err:", err)
    throw err
  }
};

const findUsers = async () => {
  const db = await connectDB()
  const userColletion = db.collection('tareas')
  try {
    const res = userColletion.find({})
    return res
  } catch (err) {
    console.log("🚀 ~ file: app.js:11 ~ createUser ~ err:", err)
    throw err
  }
};

const findUserById = async (id) => {
  const db = await connectDB()
  const userColletion = db.collection('tareas')
  try {
    const res = userColletion.findOne({ _id: id })
    return res
  } catch (err) {
    console.log("🚀 ~ file: app.js:11 ~ createUser ~ err:", err)
    throw err
  }
};

const deleteUserById = async (id) => {
  const db = await connectDB()
  const userColletion = db.collection('tareas')
  try {
    const res = userColletion.deleteOne({ _id: id })
    return res
  } catch (err) {
    console.log("🚀 ~ file: app.js:11 ~ createUser ~ err:", err)
    throw err
  }
};

const updateUser = async (id,data) => {
  const db = await connectDB()
  const userColletion = db.collection('tareas')
  try {
    const updateData = ({ $set: { ...data } })
    const res = userColletion.updateOne({ _id: id }, updateData)
    return res
  } catch (err) {
    console.log("🚀 ~ file: app.js:11 ~ createUser ~ err:", err)
    throw err
  }
};

const CRUD = {
  createUser,
  findUsers,
  findUserById,
  deleteUserById,
  updateUser,
};

module.exports = CRUD;
