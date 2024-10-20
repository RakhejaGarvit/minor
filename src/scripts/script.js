let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');
let form = document.querySelector('#loginform')

let checkSignUp = true;

function changeButtonType(){
    signUpBtn.setAttribute("type", checkSignUp ? "submit" : "button");
    signInBtn.setAttribute("type", checkSignUp ? "button" : "submit");
}

signInBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform ='translateX(35px)';
    if(checkSignUp === false){
        form.submit();
    }
    checkSignUp = false;
    changeButtonType();
});
signUpBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    nameField.style.maxHeight ='60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform ='translateX(0)';
    if(checkSignUp === true){
        console.log("here");
        form.submit();
    }
    checkSignUp = true;
    changeButtonType();

});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form); // Collect form data

    // Convert formData to a JSON object
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    };
    console.log(data);

    // Send the data to the backend
    // fetch('http://localhost/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(result => {
    //     console.log('Success:', result);
    //     // Optionally, redirect to the dashboard or another page
    //     window.location.href = 'dashboard.html';
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
});