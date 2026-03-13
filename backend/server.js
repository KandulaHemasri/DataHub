//LEVEL-1
// const express = require("express");

// const app = express();
// const PORT = 5000;

// app.use(express.json());

// /*GET ALL POSTS*/
// app.get("/posts", (req, res) => {
//   res.json({ message: "GET all posts route working" });
// });

// /*GET SINGLE POST*/
// app.get("/posts/:id", (req, res) => {
//   const id = req.params.id;

//   res.json({
//     message: `GET post with id ${id} route working`
//   });
// });

// /*CREATE POST*/
// app.post("/posts", (req, res) => {
//   res.json({
//     message: "POST create post route working"
//   });
// });

// /*UPDATE POST*/
// app.put("/posts/:id", (req, res) => {
//   const id = req.params.id;

//   res.json({
//     message: `PUT update post ${id} route working`
//   });
// });

// /*DELETE POST*/
// app.delete("/posts/:id", (req, res) => {
//   const id = req.params.id;

//   res.json({
//     message: `DELETE post ${id} route working`
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


//LEVEL-2

// const express = require("express");

// const app = express();
// const PORT = 5000;

// app.use(express.json());

// // Mock Database
// let blogPosts = [];

// /*GET all posts*/
// app.get("/posts", (req, res) => {
//   res.json(blogPosts);
// });

// /*GET single post*/
// app.get("/posts/:id", (req, res) => {
//   const id = parseInt(req.params.id);

//   const post = blogPosts.find(p => p.id === id);

//   if (!post) {
//     return res.status(404).json({ message: "Post not found" });
//   }

//   res.json(post);
// });

// /*CREATE new post*/
// app.post("/posts", (req, res) => {

//   const { title, content } = req.body;

//   const newPost = {
//     id: blogPosts.length + 1,
//     title: title,
//     content: content
//   };

//   blogPosts.push(newPost);

//   res.json({
//     message: "Post created successfully",
//     post: newPost
//   });
// });

// /*UPDATE post*/
// app.put("/posts/:id", (req, res) => {

//   const id = parseInt(req.params.id);
//   const { title, content } = req.body;

//   const post = blogPosts.find(p => p.id === id);

//   if (!post) {
//     return res.status(404).json({ message: "Post not found" });
//   }

//   post.title = title || post.title;
//   post.content = content || post.content;

//   res.json({
//     message: "Post updated successfully",
//     post: post
//   });
// });

// /*DELETE post*/
// app.delete("/posts/:id", (req, res) => {

//   const id = parseInt(req.params.id);

//   blogPosts = blogPosts.filter(p => p.id !== id);

//   res.json({
//     message: "Post deleted successfully"
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });









//LEVEL-3
const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

// Custom Middleware (Logger)
app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toLocaleTimeString();

  console.log(`[${method}] ${url} - ${time}`);

  next();
});


// Mock Database
let blogPosts = [];


// Home Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Data Hub API" });
});


// LOGIN (Fake Authentication)
app.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password required"
    });
  }

  // Fake token
  const fakeToken = "mock-jwt-token-123456";

  res.json({
    message: "Login successful",
    token: fakeToken
  });
});

// GET all posts
app.get("/posts", (req, res) => {
  res.json(blogPosts);
});


// GET single post
app.get("/posts/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({
      message: "Post not found"
    });
  }

  res.json(post);
});


// CREATE post
app.post("/posts", (req, res) => {

  const { title, content } = req.body;

  const newPost = {
    id: blogPosts.length + 1,
    title,
    content
  };

  blogPosts.push(newPost);

  res.json({
    message: "Post created",
    post: newPost
  });
});


// UPDATE post
app.put("/posts/:id", (req, res) => {

  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({
      message: "Post not found"
    });
  }

  post.title = title || post.title;
  post.content = content || post.content;

  res.json({
    message: "Post updated",
    post
  });
});


// DELETE post
app.delete("/posts/:id", (req, res) => {

  const id = parseInt(req.params.id);

  blogPosts = blogPosts.filter(p => p.id !== id);

  res.json({
    message: "Post deleted"
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//For login : https://datahub-vok7.onrender.com/login
//for posts : https://datahub-vok7.onrender.com/posts