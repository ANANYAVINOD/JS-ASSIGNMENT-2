const blogPostsItems = new XMLHttpRequest();
if (window.location.href  == "http://127.0.0.1:5500/about.html") {
  blogPostsItems.open("GET", "apis/blogAbout.json", true);
}
else {
  blogPostsItems.open("GET", "apis/blogs.json", true);
}

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