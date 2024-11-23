var arr = [
    { name: "apple", img: "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=Cls30uVAjNB0B_xKbBC2Yu5aM4AB5fGmW7rqLphx3b0=" },
    { name: "banana", img: "https://media.istockphoto.com/id/173242750/photo/banana-bunch.webp?b=1&s=170667a&w=0&k=20&c=0tf5f84ouowwcY08dpp6XrWUTLJLL_dWwjqAlyueU60=" },
    { name: "glass of milk", img: "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "glass of water", img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3MlMjBvZiUyMHdhdGVyfGVufDB8fDB8fHww" },
    { name: "spiderman", img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww" },
    { name: "ironman", img: "https://images.unsplash.com/photo-1623984109622-f9c970ba32fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJvbm1hbnxlbnwwfHwwfHx8MA%3D%3D" }
]
var searchInput = document.querySelector("#searchinput");

function showTheCard() {
    var clutter = "";
    arr.forEach(function (arr) {
        clutter += `<div class="box">
       <img class="cursor-pointer"
           src="${arr.img}"
           alt="image">
           <div class="caption">Lorem ipsum </div>`
        var container = document.querySelector(".container");
        container.innerHTML = clutter;
    })
}
function inputSearchFocus() {
    searchInput.addEventListener("focus", function () {
        var overlay = document.querySelector(".overlay");
        overlay.style.display = "block";
    });
    searchInput.addEventListener("blur", function () {
        var overlay = document.querySelector(".overlay");
        overlay.style.display = "none";
    })
}
function inputSearchHandal() {
    searchInput.addEventListener("input", () => {
        const filteredArray = arr.filter((obj) => obj.name.toLowerCase().startsWith(searchInput.value));
        let clutter = "";
        filteredArray.forEach((obj) => {
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        searchInput.addEventListener('focus',()=>{
            document.querySelector(".searchdata").style.display = "block";
        })
        searchInput.addEventListener('blur',()=>{
            document.querySelector(".searchdata").style.display = "none";
        })
        document.querySelector(".searchdata").innerHTML = clutter;
        });
    
    });
}


inputSearchHandal();
inputSearchFocus();
showTheCard();