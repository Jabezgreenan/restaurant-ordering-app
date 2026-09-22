
import {menuArray} from '/data.js'


const addPizzaButton = document.getElementById("add-pizza")
const addBurgerButton = document.getElementById("add-burger")
const addBeerButton = document.getElementById("add-beer")
const payForm = document.getElementById("pay-form")
const completeOrder = document.getElementById("complete-order")
const orders = document.getElementById("orders")
const totalEl = document.getElementById("total")
const payWindow = document.getElementById('pay-window')
const orderList = document.getElementById("order")


let total = 0 
let orderItems = []


addPizzaButton.addEventListener("click", () => {
    total += menuArray[0].price
    orderItems.push(menuArray[0])
    
    orderList.classList.remove("hide")

    orders.innerHTML += `
        <div class="item-total">
            <div class="order-item">   
                <p>${menuArray[0].name}</p>
                <button class="remove" data-id="${menuArray[0].id}">remove</button>
            </div>
            <p>$${menuArray[0].price}</p>
        </div>
    `

    totalEl.textContent = `$${total}`
})


addBurgerButton.addEventListener("click", () => {
    total += menuArray[1].price
    orderItems.push(menuArray[1])
    
    orderList.classList.remove("hide")

    orders.innerHTML += `
        <div class="item-total">
            <div class="order-item">   
                <p>${menuArray[1].name}</p>
                <button class="remove" data-id="${menuArray[1].id}">remove</button>
            </div>
            <p>$${menuArray[1].price}</p>
        </div>
    `

    totalEl.textContent = `$${total}`
})


addBeerButton.addEventListener("click", () => {
    total += menuArray[2].price
    orderItems.push(menuArray[2])
    
    orderList.classList.remove("hide")

    orders.innerHTML += `
        <div class="item-total">
            <div class="order-item">   
                <p>${menuArray[2].name}</p>
                <button class="remove" data-id="${menuArray[2].id}">remove</button>
            </div>
            <p>$${menuArray[2].price}</p>
        </div>
    `

    totalEl.textContent = `$${total}`
})


completeOrder.addEventListener("click", () => {
    payWindow.classList.remove("hide")
})


orders.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {

        const id = Number(event.target.dataset.id)

        const index = orderItems.findIndex(item => item.id === id)

        if (index !== -1) {
            total -= orderItems[index].price
            orderItems.splice(index, 1)

            event.target.closest(".item-total").remove()

            totalEl.textContent = `$${total}`

            if (orderItems.length === 0) {
                orderList.classList.add("hide")
            }
        }
    }
})


payForm.addEventListener("submit", (event) => {
    event.preventDefault()
    
    orderList.innerHTML = ` 
        <section id="thank-you" class="thank-you">
            <p>Thank you ${payForm.name.value}, for your order!</p>
            <p>Total: $${total}</p>
        </section>
    `

    payWindow.classList.add("hide")
})