
function change_display(x){
  document.getElementById("display").innerHTML += x;
}

let numbers = document.getElementsByName("numbers");
console.log(numbers);

for (let i=0; i<numbers; i++){
  numbers[i].addEventListener("click", fucntion() {
    change_display(numbers[i].value);
  })
}