let emails = ["ghi@hotmail.com", "def@yahoo.com", "ghi@gmail.com", "abc@channelier.com", "abc@hotmail.com", "def@hotmail.com", "abc@gmail.com","abc@yahoo.com","def@channelier.com","jkl@hotmail.com","ghi@yahoo.com","def@gmail.com"]

function sendMail(value){
    return value;
}

emails.sort().map((value) => {
    const result = sendMail(value);
    console.log(result);
})