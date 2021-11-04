let numOfChar = prompt("Unesi broj riječi rečenice koju želiš da ispitaš!");
const rectangles = document.querySelector('.rectangles');
const mainContainer = document.querySelector('.main-container')
const plusSign = document.querySelectorAll('.add-rectangle');
const xSign = document.querySelectorAll('.delete-rectangle');

plusSign.forEach(el => {
    el.addEventListener('click', addRectangle);
});

xSign.forEach(el=>{
    el.addEventListener('click', ()=>{
        rectangles.remove();
    });
});


startProject();

function startProject(){
    rectangleNum(numOfChar);
}

function rectangleNum(numOfChar){
    if(numOfChar != null){
        for(let i=1; i<numOfChar; i++){
           addRectangle();
        }
    } else {
        numOfChar = 1;
    }
}

function addRectangle(){
    /* adding new same div */
    var newDiv = document.createElement("div");
    newDiv.className = "rectangles";
    var newPlusSign = document.createElement("span");
    var newXSign = document.createElement("span");
    var newInput = document.createElement("input");
    newPlusSign.className = "add-rectangle";
    newPlusSign.appendChild(document.createTextNode("+"));
    newXSign.className = "delete-rectangle";
    newXSign.appendChild(document.createTextNode("x"))
    newInput.className = "input-rectangle";
    newInput.maxLength = "1";
    newDiv.appendChild(newXSign);
    newDiv.appendChild(newInput);
    newDiv.appendChild(newPlusSign);
    mainContainer.appendChild(newDiv);
    /*adding event listeners */
    newXSign.addEventListener('click', () => {
        mainContainer.removeChild(newDiv);
    });
    newPlusSign.addEventListener('click', addRectangle);
}

const word = document.querySelectorAll(".input-rectangle");
    word.forEach(el => {
        el.addEventListener('keydown', isValidate)
    });
const result = document.querySelector(".palindrom")
const button = document.querySelector(".submit-button");
button.addEventListener('click', getWord);

function isValidate(event){
    var regex=/[a-zA-Z]/;
    var keyDown = event.key;
    if(keyDown.match(regex) || keyDown === " "){
       return true;
    } else {
        result.innerText ="Dozvoljeno je unositi samo slova!";
        result.style.color = "red";
        return false;
    }
}
 function getWord(){
    let input = document.querySelectorAll(".input-rectangle");
    let inputArr = [];
    for(let i=0; i<input.length; i++){
        inputArr.push(input[i].value);
    }
    let str = inputArr.join("");
    return isPalindrome(str);    
 }

function reverseInput(str){
    let revInput = "";
    for(let i=str.length-1; i>=0; i--){
        revInput+=str[i];
    }
    return revInput;
}

function isPalindrome(str){
    revInput = reverseInput(str);
    var regex=/[a-zA-Z]/;
    if(str.match(regex) || str==" "){
        if(revInput === str){
            result.innerText = "Unijeta riječ je palindrom!"
            result.style.color ="#e07a5f"
        } else {
            result.innerText = "Unijeta riječ nije palindrom!"
            result.style.color="#81b29a"
        }   
    } else {
        return alert("Moguće je koristiti samo slovne karaktere!")
    }
}