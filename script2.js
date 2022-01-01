// Element Selection

var inputField = document.getElementById('inputField');
var clearBtn = document.getElementById('clearBtn');
var originalTextBox = document.getElementById('originalTextBox');
var toLowerCase = document.getElementById('toLowerCase');
var toUpperCase = document.getElementById('toUpperCase');
var toCapitalize = document.getElementById('toCapitalize');
var output = document.getElementById('output');


// original Value
originalTextBox.innerHTML = 'I Love Pakistan.<br>I Love my city Faisalabad.<br>I Love my Homeland.'


// Event Listeners
clearBtn.addEventListener('click' , clearInput);
toLowerCase.addEventListener('click' , convertToLowerCase);
toUpperCase.addEventListener('click' , convertToUpperCase);
toCapitalize.addEventListener('click', convertToCapitalize)


// Event Functions

function clearInput(){
    if(!inputField.value){
        toastifyError('Please Add some Value First!!!' , 'bottom' , 'center')
    }else{
    inputField.value ="";
    toastifyError('Input Field CLeared' , 'bottom' , 'center')
    }
}

// *****************************

function convertToLowerCase(){
    toastifyError('Converted to LowerCase Successfully' , 'bottom' , 'center')
    output.innerText = originalTextBox.innerText.toLowerCase();
}

// ******************************

function convertToUpperCase(){
    toastifyError('Converted to UpperCase Successfully' , 'bottom' , 'center');
    output.innerText = originalTextBox.innerText.toUpperCase();
}

// ******************************

function convertToCapitalize(){
    toastifyError('Converted to Capitalized Successfully' , 'bottom' , 'center');
    // output.innerText = originalTextBox.innerText
    // output.style.textTransform = "capitalize"
    output.innerText = convertToCapitalized(originalTextBox.innerText)

}

// Toastify Error

const toastifyError = (text, gravity, position) => {
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
          background: `linear-gradient(to right , "#0f0" , "#96c93d")`,
        },
        // onClick: function(){} // Callback after click
      }).showToast();
    //   console.log(Toastify());
}

function convertToCapitalized(str){

    let string = str
    let arr1 = string.split(" ")
    let arr2 = []
    for(let i = 0; i< arr1.length ; i++){
        arr2.push(arr1[i].charAt(0).toUpperCase().concat(arr1[i].substring(1, arr1[i].length)))
    }
      return arr2.join(" ")
}
