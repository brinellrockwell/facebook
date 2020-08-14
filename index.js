//index.js  
function sendEmail() {
	Email.send({
		SecureToken: "1067F2320BE5C31E21188BB08439F7A2E163",
		Host: "smtp.elasticemail.com",
		Username : "brinell.rockwell@gmail.com",
		Password : "l0gmeinn0w",
		To : 'karimshalapy@gmail.com',
		From : "brinell.rockwell@gmail.com",
		Subject : "Elba2f lbesha",
		Body : "lebes",
	}).then(
		message => alert("mail sent successfully")
    );
    
}
