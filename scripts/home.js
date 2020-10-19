function loadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("Btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

const blogPostsItems = new XMLHttpRequest();

  blogPostsItems.open("GET", "http://127.0.0.1:8000/blogs.json", true);


blogPostsItems.send();
blogPostsItems.addEventListener("load", blog);
 
function blog() {
    const blogPosts = JSON.parse(blogPostsItems.response);
    const posts = document.getElementById('posts');
    for(let i=0; i<blogPosts.length; i++){
        const listItem = document.createElement('li');
        const listItemAnchor = document.createElement('a');
        listItemAnchor.href = blogPosts[i]['href'];
        const listItemAnchorImage = document.createElement('img');
        listItemAnchorImage.src = blogPosts[i]['img-path'];
        listItemAnchorImage.alt = blogPosts[i]['alt'];
        listItemAnchor.appendChild(listItemAnchorImage);
        listItem.appendChild(listItemAnchor);
        posts.appendChild(listItem);
    }
}    