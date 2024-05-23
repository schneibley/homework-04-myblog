const usernameEl = document.querySelector('#username')
const titleEl = document.querySelector('#title')
const contentEl = document.querySelector('#content')
const submitEl = document.querySelector('#submit')

const blogData = JSON.parse(localStorage.getItem("blogData")) || []

submitEl.addEventListener('click', submitHandler)

function submitHandler (event){
    event.preventDefault()
const newBlogPost = {
    username:usernameEl.value,
    title:titleEl.value,
    content:contentEl.value

}
blogData.push(newBlogPost)
localStorage.setItem("blogData", JSON.stringify(blogData))

window.location.href = "blog.html";

clearForm();
}

function clearForm() {
    usernameEl.value = "";
    titleEl.value = "";
    contentEl.value = "";
}