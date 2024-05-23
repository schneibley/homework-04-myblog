const blogData = JSON.parse(localStorage.getItem("blogData")) || []

const postContainer =document.querySelector('#postsContainer')

for(let i=0; i < blogData.length; i++){
    const plUserName = document.createElement("p")
    const plTitle = document.createElement("p")
    const plContent = document.createElement("p")
    plUserName.textContent = blogData[i].username
    plTitle.textContent = blogData[i].title
    plContent.textContent = blogData[i].content
    postContainer.append(plUserName,plTitle,plContent)
}