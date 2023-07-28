function displayFormData(event) {
    event.preventDefault(); // Prevent form submission

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var formData = {
      Name: name,
      Email: email,
      Password: password
    };
    var formOutput = document.getElementById('formOutput');
      formOutput.innerHTML = JSON.stringify(formData, null, 2);
    }
