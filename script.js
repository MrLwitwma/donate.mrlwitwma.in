const coffee = document.getElementById('coffee');
const cookies = document.getElementById('cookie');


let numCoffee = 0
const removeCoffee = document.getElementById('remove-coffee');
const addCoffee = document.getElementById('add-coffee');
removeCoffee.addEventListener('click', ()=>{
    if (numCoffee > 0){
        numCoffee = numCoffee - 1
        coffee.textContent = numCoffee
    } else{
        window.alert('Minimum is 0')
    }
})
addCoffee.addEventListener('click', ()=>{
    if (numCoffee < 10){
        numCoffee = numCoffee + 1
        coffee.textContent = numCoffee
    } else{
        window.alert('Maximum is 10')
    }
})


let numCookies = 0
const removeCookies = document.getElementById('remove-cookie');
const addCookies = document.getElementById('add-cookie');
removeCookies.addEventListener('click', ()=>{
    if (numCookies > 0){
        numCookies = numCookies - 1
        cookies.textContent = numCookies
    } else{
        window.alert('Minimum is 0')
    }
})
addCookies.addEventListener('click', ()=>{
    if (numCookies < 20){
        numCookies = numCookies + 1
        cookies.textContent = numCookies
    } else{
        window.alert('Maximum is 20')
    }
})

const buy = document.getElementById('submit');
const amount = document.getElementById('amount');

buy.addEventListener('click', ()=>{
    finalValue = numCookies * 0.5 + numCoffee * 1
    if (finalValue > 0){
        amount.textContent = `₹${finalValue * 90}`
        proceed_pay()
        setTimeout(function(){
            redirectPayment(true)
        }, 2000)
    } else{
        window.alert('No items found!')
    }
})

function proceed_pay(){
    const container = document.getElementById('container')
    const handle = document.getElementById('holder')

    container.style.rotate = '5deg'
    container.style.marginTop = '-100px'
    setTimeout(function(){
        container.style.rotate = '-5deg'
        container.style.marginTop = '0px'
    }, 1000)
    if (window.innerWidth > 650){
        handle.style.rotate = '5deg'
        handle.style.marginLeft = '180px'
        setTimeout(function(){
            handle.style.rotate = '-5deg'
            handle.style.marginLeft = '200px'
        }, 1000)
    } else{
        handle.style.rotate = '5deg'
        handle.style.marginLeft = '130px'
        setTimeout(function(){
            handle.style.rotate = '-5deg'
            handle.style.marginLeft = '150px'
        }, 1000)
    }

    numCookies = 0
    numCoffee = 0
    coffee.textContent = 0
    cookies.textContent = 0
}
function redirectPayment(ready){
    const paymentWindow = document.getElementById('paymentWindow')
    const container = document.getElementById('container')
    const handle = document.getElementById('holder')

    if (ready){
        container.style.display = 'none'
        handle.style.display = 'none'
        paymentWindow.style.display = 'block'
    } else{
        container.style.display = 'unset'
        handle.style.display = 'unset'
        paymentWindow.style.display = 'none'
    }
}


const back = document.getElementById('back')
back.addEventListener('click', ()=>{
    redirectPayment(false);
});

const finalPay = document.getElementById('pay');

finalPay.addEventListener('click', ()=>{
    const name = document.getElementById('name');
    const paymentMethod = document.getElementById('paymentMethod')
    if (name.value.length > 5){
        if (paymentMethod.value === 'qrcode'){
            window.location.href = '/pay/';
        }
    } else{
        window.alert('Enter your real full name!')
    }
})