let content= document.querySelector(".content");
let product = [
    {
        id:1,
        image:"img 1.jpg",
        name: "cold Berw",
        price: "10$"

    },
    {
        id:2,
        image:"img 2.jpg",
        name: "Latte Frape",
        price: "12$"

    },
    {
        id:3,
        image:"img 3.jpg",
        name: "Ice Latte",
        price: "11$"

    },
    {
        id:4,
        image:"img 4.jpg",
        name: "Macchiato",
        price: "10$"

    },
    {
        id:5,
        image:"img 5.jpg",
        name: "Hot Latte",
        price: "9$"

    },
    {
        id:6,
        image:"img 6.jpg",
        name: "Cappuccino",
        price: "9$"

    },
    {
        id:7,
        image:"img 7.jpg",
        name: "Cafe Mocha",
        price: "11$"

    },
    {
        id:8,
        image:"img 8.jpg",
        name: "Espresso",
        price: "8$"

    },
    
   
    {
        id:9,
        image:"img 9.png",
        name: "Hot Chocolate",
        price: "8$"

    }

]
function initApp(){
    product.forEach((value)=>{
        let newDiv = document.createElement("div")
        newDiv.classList.add("product-box")
        newDiv.innerHTML = `
        <img src="img/${value.image}">
        <div class="details"><h2 class="title">${value.name}</h2>
        <span class="price">${value.price}</span>
        <button class="btn">Buy Now</button></div>
        `
        content.appendChild(newDiv)
    })
   
}
initApp()

let card = document.querySelector(".card");
let button = document.querySelectorAll(".btn");
let closed = document.querySelector(".close");
button.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        card.classList.add("active")
    })
})

    closed.addEventListener("click",()=>{
        card.classList.remove("active")
    })
    

