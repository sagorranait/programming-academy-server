const express = require("express");
const cors = require("cors");
const blogs = require("./data/blogs.json");
const courses = require("./data/courses.json");
const testimonial = require("./data/testimonial.json");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.get("/", (req, res)=>{
   res.send({});
});

app.get("/blogs", (req, res)=>{
   res.send(blogs);
});

app.get("/blog/details/:id", (req, res)=>{
   const id = req.params.id;
    const selectedBlog = blogs.find(blog => blog.id === id);
    res.send(selectedBlog);
});

app.get("/courses", (req, res)=>{
   res.send(courses);
});

app.get("/course/details/:id", (req, res)=>{
   const id = req.params.id;
    const selectedCourses = courses.find(blog => blog.id === id);
    res.send(selectedCourses);
});

app.get("/testimonial", (req, res)=>{
   res.send(testimonial);
});

app.listen(port, ()=>{
   console.log("Server is running", port);  // https://programming-academy.vercel.app
});