function btn () {
    let text;
    let input = document.getElementById("input").value;
    if (input=="100"){
        text = "Buzz!";
    }else if (input =="89") {
        text = input;
    }else if (input =="0" || input=="") {
        text = "invalid input";
    }else if (input%2===0) {
        text = "Fizz!"
    }else if (input%2!==0) {
        text = "FizzBuzz!";
    }
    document.getElementById("result").innerHTML = text;
    console.log(input);
}