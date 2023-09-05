function tap(){

    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    if(email==='admin@admin.com' && password==='123456'){
        alert('Login Successful');
    }
    else{
        alert('Incorrect email or password');
    }
}