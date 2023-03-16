const numbers = document.querySelectorAll('.number');


const otpLenght = 6;

const generateOTP = () =>{
    let otp = "";
    for (let i = 0; i < otpLenght; i++) {
        otp += Math.floor(Math.random() * 10);
    }


    for(let i = 0; i < numbers.length; i++){
        numbers[i].innerHTML = otp.charAt(i)
    }
    return otp;
}


