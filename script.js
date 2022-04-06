let name = document.getElementById('contact-name')
let statusOfName = document.getElementById('form-validation1')
name.addEventListener('focusout', leaveName)
function leaveName(){
  if(name.value ==''){
    statusOfName.textContent = 'The text field is requied'
  }
}
let phone = document.getElementById('contact-phone')
let statusOfPhone = document.getElementById('form-validation2')
phone.addEventListener('focusout', leavePhone)
function leavePhone(){
  if(phone.value ==''){
    statusOfPhone.textContent = 'The text field is requied'
  }
}
let email = document.getElementById('contact-email')
let statusOfEmail = document.getElementById('form-validation3')
email.addEventListener('focusout', leaveMail)
function leaveMail(){
  if(email.value ==''){
    statusOfEmail.textContent = 'The email is requied'
  }
}
let message = document.getElementById('contact-message')
let statusOfMesage = document.getElementById('form-validation4')
massage.addEventListener('focusout', leaveMessage)
function leaveMessage(){
  if(message.value ==''){
    statusOfMessage.textContent = 'The text area is requied'
  }
}