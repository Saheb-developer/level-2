var product = [
    {name: "iphone 15", image: "https://images.unsplash.com/photo-1694570149728-b1011c2a772b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lMTV8ZW58MHx8MHx8fDA%3D", headline:"iphone 15 with white",  price: "100"},
    {name: "laptop", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D", headline:"gaming laptop",  price: "150"},
    {name: "chair", image: "https://media.istockphoto.com/id/1160551657/photo/new-office-chair-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=SE47UaeSWS3KgGx4n_pDngRocNt-crXo1AdX9eEULSs=",  headline:"gaming chair",price: "25"}
]
var cart = []
function showProducts(){
    var clutter = "";
    product.forEach((product, index) => {
        clutter += `            <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                    <img class="w-full h-full object-cover " src="${product.image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">&dollar;${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
                                data-index="${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
         document.querySelector(".products").innerHTML = clutter;
        })
}
function addToCart() {
    document.querySelector(".products")
    .addEventListener("click", function (details) {
        cart.push(details.target.dataset.index)
    })
}
addToCart()
showProducts();