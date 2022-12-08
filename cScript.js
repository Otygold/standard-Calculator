const userInpNumber = document.querySelectorAll("[data-value]");
const userInpOperator = document.querySelectorAll("[data-operator]");
const delbtn = document.querySelector(".delete");
const clrbtn = document.querySelector(".clear");
const equbtn = document.querySelector(".equal");
const prevOperand = document.querySelector(".first_number");
const operator = document.querySelector(".symbol")
const nextOperand = document.querySelector(".second_number");

let newOperand = "";
let oldOperand = "";
let operates;

// Assigning User Inputed Number into the declared variable. 
const inputvalues = () => {
     nextOperand.textContent = newOperand;
     prevOperand.textContent = oldOperand;
     operator.textContent = operates;
}

// Computing of result by performing the due action of the selected operator. 
const computeValues = (sign) => {
    prevNumber = Number(oldOperand)
    nextNumber = Number(newOperand)

    let result;
    if (sign == "+"){
        result =  prevNumber + nextNumber;
    } else if (sign == "-" ){
        result = prevNumber -nextNumber;
    } else if (sign == "*") {
        result = prevNumber * nextNumber;
    } else if (sign == "?"){
        result = prevNumber / nextNumber;
    }
   return result;
}

// Valid Operand Seleection along with the dot issue. 
userInpNumber.forEach((number) => {
    number.addEventListener("click", () => {
        if (number.dataset.value == "."){
            if (newOperand == ""){
                newOperand = "0."
            }else if (!newOperand.includes(".")){
                newOperand += number.dataset.value;
            }
        }else{
            newOperand +=  number.dataset.value;
        }
        nextOperand.textContent = newOperand;
    });
});

// Opertor Selection and Valid Operand Input. 

userInpOperator.forEach((operate) => {
    operate.addEventListener("click", () => {
        if (newOperand !== "" && oldOperand == ""){
            oldOperand = newOperand;
            newOperand =""
        }
        if (newOperand !== "" && oldOperand !==""){
            oldOperand = computeValues(operates);
            newOperand ="";
        }
        operates = operate.dataset.operator;
        inputvalues();
    });
});


// Function for deleting unwanted number. 

delbtn.addEventListener("click", function() {
    newOperand = newOperand.slice(0, -1);
    nextOperand.textContent = newOperand;
});

// Function for clearing the whole screen. 

clrbtn.addEventListener("click", () => {
    newOperand = "";
    oldOperand = "";
    operates = "";
    inputvalues();
});

// Function for creating and dispalying the answer. 
equbtn.addEventListener("click", () => {
    if (newOperand !== "" && oldOperand !== "")
     newOperand = computeValues(operates);
     oldOperand= "";
     operates = "";
     inputvalues();
});


