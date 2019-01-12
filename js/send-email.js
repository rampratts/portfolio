const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#content");
const sendButton = document.querySelector("#send");

const successMessage = document.querySelector("#email-success");
const failureMessage = document.querySelector("#email-failure");

sendButton.addEventListener("click" ,(e) => {
    e.preventDefault();
    
    if(!successMessage.classList.contains("d-none")){
        successMessage.classList.add("d-none");
    }

    if(!failureMessage.classList.contains("d-none")){
        failureMessage.classList.add("d-none");
    }

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;


    Email.send({
        SecureToken: "1d49d2f5-289c-48e0-a466-ecbf6bfdc1d9",
        To : "rampratts@gmail.com",
        From : email,
        Subject : name+" via rampratts.me",
        Body : message
    }).then(message => {
        if(message === "OK"){
            successMessage.classList.remove("d-none");
        }else{
            successMessage.classList.remove("d-none");
        }
    });
});