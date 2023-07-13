let formWrapper = document.querySelector(".form-wrapper");
let form = document.querySelector("#form");
let searchInput = document.querySelector("#searchInput");
let buttonWrapper = document.querySelector(".button-wrapper");
let searchButton = document.querySelector("#searchButton");
let clearButton = document.querySelector("#clearButton");
let imageListWrapper = document.querySelector(".imagelist-wrapper");

runEventLİstener();

function runEventLİstener(){
    form.addEventListener("submit",search);
    clearButton.addEventListener("click",clear)
}

function clear(){
    searchInput.value="";
   // Array.from(imageListWrapper.children).forEach((child)=>child.remove());
   imageListWrapper.innerHTML ="";
}

function search(e){
    let value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
       method : "GET", //karşıdan geri alacağımız için get, bir şey yükleseydim post olurdu.
       headers : {
            Authorization : "Client-ID 3mt_N1d-w2WNmQTGie8c_K7UG-aCa8neNw0Gaxcve1I" 
       }
    })
    .then((res)=> res.json()).then((data)=> {
        //console.log(data)
       Array.from(data.results).forEach((image)=>{
        console.log(image.urls.small)
        addImageToUI(image.urls.small)
        })
    })
    .catch((err)=>console.log(err));
    e.preventDefault();
}

function addImageToUI(url){
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.setAttribute("src",url);
    img.height = '400';
    img.width ='400';

    div.append(img);
    imageListWrapper.append(div);
}

