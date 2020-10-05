document.addEventListener("DOMContentLoaded", function () {
    var homeContent = "";
    var searchWord = "";
    document.getElementById("search").addEventListener("keydown", function (e) {
        if (searchWord == "") {
          searchWord = document.getElementsByTagName("p");
    }
    if (e.key === "Enter") {
        for (var values of searchWord) {
            searchedTag = values;
            searchWord = values.innerHTML;
            searchWord = searchWord.toString();
            homeContent = searchWord;
            highlightWord(homeContent);
        }
          searchWord = "";
    }
});
},
    false
);
  
  function highlightWord(searchWord) {
    var text = document.getElementById("search").value;
    if (text) {
      let newsearch = searchWord;
      var pattern = new RegExp("(" + text + ")", "g");
      var newText = newsearch.replace(
        pattern,
        "<span class='highlight'>" + text + "</span>"
      );
      searchedTag.innerHTML = newText;
    } else {
      console.log(searchWord);
      searchedTag.innerHTML = searchWord;
    }
}
  