
const form = document.getElementById('jobApplicationForm');
const applicationsTable = document.getElementById('applicationsTable');
const tableBody = applicationsTable.querySelector('tbody');
const applications = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate phone number (Pakistani format)
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^03\d{9}$/; // Must start with 03 and be exactly 11 digits
    if (!phonePattern.test(phoneNumber))
     {
        alert("Invalid Phone number")
        phoneError.textContent = "Invalid Pakistani phone number. Must be 11 digits and start with 03.";
        return; // Stop form submission if phone validation fails
    }
     else
    {
        phoneError.textContent = ""; // Clear error if phone number is valid
    }

    // Validate email format
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
// Updated email pattern to include a check for .com at the end
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email) || !email.endsWith('.com'))
     {
       alert("Invalid email")
       emailError.textContent = "Please enter a valid email that ends with .com.";
       return; // Stop form submission if email validation fails
    } 
    else
     {
      emailError.textContent = ""; // Clear error if email is valid
     }


    // Collect data from the form (assuming validation passes)
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: email,
        phoneNumber: phoneNumber,
        resume: document.getElementById('resume').value,
        coverLetter: document.getElementById('coverLetter').value
       
    };

    applications.push(formData);

    // Log the data (simulate storing it)
    console.log('Application submitted:', formData);

    // Clear form
    form.reset();
});

document.getElementById('viewApplicationsBtn').addEventListener('click', function() {
    tableBody.innerHTML = '';
    applications.forEach(app => {
        const row = `<tr>
            <td>${app.firstName} ${app.lastName}</td>
            <td>${app.email}</td>
            <td>${app.phoneNumber}</td>
            <td>${app.resume}</td>
            <td>${app.coverLetter}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
    applicationsTable.style.display = 'table';
});
