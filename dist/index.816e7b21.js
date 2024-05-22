document.addEventListener("DOMContentLoaded", ()=>{
    const productsWrapper = document.querySelector(".products-wrapper");
    function getProducts() {
        fetch("http://localhost:8000/products").then((res)=>{
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.json();
        }).then((data)=>{
            console.log("Fetched products:", data);
            renderProducts(data);
        }).catch((error)=>{
            console.error("Error fetching products:", error);
        });
    }
    function currencyFormatted(price) {
        return price.toLocaleString("bn-BD", {
            style: "currency",
            currency: "BDT"
        });
    }
    function renderProducts(products) {
        console.log("Rendering products:", products);
        productsWrapper.innerHTML = ""; // Clear any existing content
        products.forEach((product)=>{
            const html = `
            <div class="product flex flex-col justify-between overflow-hidden w-full max-w-xs bg-white/50 backdrop-blur-lg rounded-xl shadow-lg shadow-gray-200">
                <div class="product-img flex justify-center items-center overflow-hidden max-h-56">
                    <img src="${product.image}" alt="${product.title}" class="w-full block">
                </div>
                <div class="product-texts p-5 flex flex-col gap-1 flex-grow">
                    <p class="text-sm uppercase font-bold tracking-widest text-sky-500">${product.category}</p> 
                    <h3 class="text-xl font-semibold truncate">${product.title}</h3> 
                    <p class="text-2xl font-semibold text-rose-500"> ${currencyFormatted(product.price)} <span class="text-sm font-semibold text-gray-700">(${product.review})</span></p>
                    <button class="bg-violet-500 self-start font-semibold text-violet-50 p-2 px-5 rounded-md shadow-lg shadow-violet-200 hover:bg-rose-500 hover:shadow-rose-200 hover:text-rose-50 duration-300 mt-2">Add to cart</button>
                </div>
            </div>
            `;
            productsWrapper.insertAdjacentHTML("afterbegin", html);
        });
    }
    getProducts();
});

//# sourceMappingURL=index.816e7b21.js.map
