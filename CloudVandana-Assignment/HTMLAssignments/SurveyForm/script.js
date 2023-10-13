const surveyForm = document.getElementById('surveyForm');
const popup = document.getElementById('popup');
const popupData = document.getElementById('popupData');
const closePopup = document.getElementById('closePopup');
const resetBtn = document.getElementById('resetBtn');

surveyForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (!firstName || !lastName || !dob || !country || (!genderMale && !genderFemale) || !profession || !email || !mobile) {
        alert('Please fill in all fields.');
        return;
    }

    let popupHTML = `<p><strong>First Name:</strong> ${firstName}</p>`;
    popupHTML += `<p><strong>Last Name:</strong> ${lastName}</p>`;
    popupHTML += `<p><strong>Date of Birth:</strong> ${dob}</p>`;
    popupHTML += `<p><strong>Country:</strong> ${country}</p>`;
    popupHTML += `<p><strong>Gender:</strong> ${genderMale ? 'Male' : 'Female'}</p>`;
    popupHTML += `<p><strong>Profession:</strong> ${profession}</p>`;
    popupHTML += `<p><strong>Email:</strong> ${email}</p>`;
    popupHTML += `<p><strong>Mobile Number:</strong> ${mobile}</p>`;

    popupData.innerHTML = popupHTML;
    popup.style.display = 'block';
});

closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
    surveyForm.reset();
});

resetBtn.addEventListener('click', function () {
    surveyForm.reset();
});
