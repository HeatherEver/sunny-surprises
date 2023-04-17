const db = require("./firebase")

const fetchBlogs = () => {
    const response = db.collection('blogs');
    console.log(response.get())
}