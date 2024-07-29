function validateForm() {
    //Get inputs by using id
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    //reset error message
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';

    //Validate name
    if (name === '') {
        document.getElementById('nameError').innerHTML = 'Name is Required';
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    {
        document.getElementById('emailError').innerHTML = "Email is Required";
        return false;
    }

}