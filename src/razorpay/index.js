
import './index.css';

var options = {
    "key": "",
    "amount": "500", // 2000 paise = INR 20
    "name": "Foodie Store",
    "description": "Purchase Description",
    "image": "https://avatars2.githubusercontent.com/u/20366345?s=100&v=4",
    "handler": function (response){
        console.info(response);
        alert(response.razorpay_payment_id);
    },
    "prefill": {
        "name": "Sarath ",
        "email": "sarathtvmala@gmail.com"
    },
    "notes": {
        "address": "Hello World"
    },
    "theme": {
        "color": "#5755d9"
    }
};
var rzp1 = null;
try {

      rzp1 = new Razorpay(options);
}

catch(e) {
    alert(e)
    console.log(e);
}

document.querySelector('button').onclick = function(e){

    try {
        rzp1.open();

    }
    catch(e) {
        alert(e)
    }
    e.preventDefault();
}
