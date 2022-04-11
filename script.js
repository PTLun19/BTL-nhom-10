let name = document.getElementById('contact-name')
let statusOfName = document.getElementById('form-validation1')
name.addEventListener('focusout', leaveName)
function leaveName(){
  if(name.value == ''){
    statusOfName.textContent = 'The text field is requied'
  }else{
    statusOfName.textContent = undefined
  }
}
let phone = document.getElementById('contact-phone')
let statusOfPhone = document.getElementById('form-validation2')
phone.addEventListener('focusout', leavePhone)
function leavePhone(){
  if(phone.value ==""){
    statusOfPhone.textContent = 'The text field is requied'
  }else{
    var PhoneRegex = /^[0-9]+$/
    if(PhoneRegex.test(phone.value)){
     statusOfPhone.textContent = undefined
    }else{
     statusOfPhone.textContent = 'Only numbers are required'
    }
  }
}
let email = document.getElementById('contact-email')
let statusOfEmail = document.getElementById('form-validation3')
email.addEventListener('focusout', leaveMail)
function leaveMail(){
  if(email.value ==''){
    statusOfEmail.textContent = 'The email is requied'
  }else{
    var emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    if(emailRegex.test(email.value)){
     statusOfEmail.textContent = undefined
    }else{
     statusOfEmail.textContent = 'The email is not a valid email'
    }
  }
}
let message = document.getElementById('contact-message')
let statusOfMessage = document.getElementById('form-validation4')
message.addEventListener('focusout', leaveMessage)
function leaveMessage(){
  if(message.value ==''){
    statusOfMessage.textContent = 'The text area is requied'
  }else{
    statusOfMessage.textContent = undefined
  }
}
