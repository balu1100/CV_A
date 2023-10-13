document.addEventListener('DOMContentLoaded', function () {

    const genderCheckboxes = document.querySelectorAll('input[type="checkbox"][name="gender"]');
    

    genderCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            genderCheckboxes.forEach(function (otherCheckbox) {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        });
    });
});
function submitForm() {
    // Get form values
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dateOfBirth = document.getElementById("date-of-birth").value;
    var country = document.getElementById("country").value;
    var genderElements = document.getElementsByName("gender");
    var selectedGender = Array.from(genderElements).filter(el => el.checked).map(el => el.value).join(", ");
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobile-number").value;

    // Validation logic can be added here

    // Display a popup with the collected data
    if (
        firstName === "" ||
        lastName === "" ||
        dateOfBirth === "" ||
        country === "" ||
        selectedGender === "" ||
        profession === "" ||
        email === "" ||
        mobileNumber === ""
    ) {
        alert("Please fill in all required fields before submitting.");
        return;
    }

    var popupMessage = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dateOfBirth}
        Country: ${country}
        Gender: ${selectedGender}
        Profession: ${profession}
        Email: ${email}
        Mobile Number: ${mobileNumber}
    `;
    alert(popupMessage);
    document.getElementById("survey-form").reset();
}

function resetForm() {
    document.getElementById("survey-form").reset();
}

