const adviceText = document.querySelector(".text")
const advice_ID = document.querySelector(".ID")
let btn = document.querySelector(".btn")



async function getAndShowAdvice(){

    const url =  "https://api.adviceslip.com/advice"

    // awaiting the url response
    const response = await fetch(url)
    
    // converting the response to a json and awaiting the result
    const result = await response.json()


    // appending the advice and the advice number to the Dom
    adviceText.innerText = `"${ result.slip.advice}"`
    advice_ID.innerText =`Advice    #${result.slip.id}`

    // removimg the loading effect when the advice shows on the Dom
    advice_ID.classList.remove("loading")
    adviceText.classList.remove("loading")

}
getAndShowAdvice()



// function that calls the async function on a button click
btn.addEventListener("click", callAdvice)
function callAdvice(){
    getAndShowAdvice()

}

// function that calls the async function after 2 seconds when page loads or button clicks
setTimeout(() => {
    getAndShowAdvice
}, 2000)


