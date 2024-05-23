const blogData = JSON.parse(localStorage.getItem("blogData")) || [];

const postContainer =document.querySelector('#postsContainer');

for(let i=0; i < blogData.length; i++){

    const postDiv = document.createElement("div");
    postDiv.classList.add("blog-post");

    const plUserName = document.createElement("p");
    const plTitle = document.createElement("p");
    const plContent = document.createElement("p");
   
    plUserName.textContent = "Username: " + blogData[i].username;
    plTitle.textContent = "Title: " + blogData[i].title;
    plContent.textContent = "Content: " + blogData[i].content;

    postDiv.append(plUserName, plTitle, plContent);

    postContainer.appendChild(postDiv);
}