const acesskey="nO0S_-E2Gyfp6Ms0vpswKRmWf5rWlZS-qAKzXum2dhU"
const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMore=document.getElementById("show-more");

let key="";
let page =1;
async function searchImages(){
    key=searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${key}&client_id=${acesskey}&per_page=12`;
    const response= await fetch(url);
    const data= await response.json();
    if(page==1) {
        searchResult.innerHTML=" ";
    }
    const results =data.results;

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target="_blank";

        imagelink.appendChild(image);
        searchResult.appendChild(imagelink);
    })
    showMore.style.display="block";
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})
showMore.addEventListener("click",()=>{
    page++;
    searchImages();
})