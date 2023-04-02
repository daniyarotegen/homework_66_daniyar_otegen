console.log("Задание 1")

console.log(document.getElementById('string-3').innerText)
console.log(document.getElementById('string-5').innerText)
console.log(document.getElementById('string-2').innerText)
console.log(document.getElementById('string-6').innerText)
console.log(document.getElementById('string-4').innerText)
console.log(document.getElementById('string-1').innerText)


console.log("Задание 2")

let elements = document.getElementsByClassName('element')

let i = 0
for(element of elements){
    i++
    if(i<4) {
        element.style.color = 'red'
    }
    else {
        element.style.color = 'green'
    }
    console.log(element.innerText)
}


