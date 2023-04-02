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


console.log("Задание 3")

container = document.getElementById('container')
colors = ['red', 'green', 'blue', 'cyan', 'magenta']
for(let i = 0; i < 5; i++) {
    container.innerHTML += `<div class="element">Element <span style="color: ${colors[i]}">${i+1}</span></div>`
}
console.log(container.innerText)


