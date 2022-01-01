// Elements selection

var originalTextBox = document.getElementById("originalTextBox")
originalTextBox.innerText = ""
var output = document.getElementById("output")
var inputField = document.querySelector("#inputField")
var clearBtn = document.querySelector("#clearBtn")

// buttons selection
let toLowerCase = document.getElementById("toLowerCase")
let toUpperCase = document.getElementById('toUpperCase');




// event listeners
toLowerCase.addEventListener("click", convertToLowerCase)
toUpperCase.addEventListener("click", convertToUpperCase)
inputField.addEventListener("input", addInputValue)

clearBtn.addEventListener("click", clearInput)



// event functions
function addInputValue(e)  {
    inputField.value = e.target.value
    if(inputField.value){
        // clearBtn.innerText = "Clear"
    }
}

function convertToLowerCase(){
toastifyError("Converted to lower case", "bottom" , "center", [])
    output.innerText = originalTextBox.innerText.toLowerCase()
}

function convertToUpperCase(){
    output.innerText = originalTextBox.innerText.toUpperCase()
toastifyError("Converted to upper case", "top" , "center", [])

}

function clearInput(){
//     if(!inputField.value){
// toastifyError("Field is empty already", "top" , "center", ["#f00", "#722f37"])
//     }
    // inputField.value = ""
    console.log(clearBtn.innerText);
    if(clearBtn.innerText === "Add"){
        originalTextBox.innerText = inputField.value
        clearBtn.innerText = "Clear"
    }else if(clearBtn.innerText === "Clear"){
        inputField.value = ""
        clearBtn.innerText= "Add"
    }
}


const toastifyError = (text, gravity, position, colors) => {
    Toastify({
        text,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity, // `top` or `bottom`
        position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: `linear-gradient(to right, ${colors[0] || "#00b09b"}, ${colors[1] || "#96c93d"})`,
        },
        // onClick: function(){} // Callback after click
      }).showToast();
      console.log(Toastify());
}
