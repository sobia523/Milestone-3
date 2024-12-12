var form = document.getElementById('resume-form');
var dynamicResume = document.getElementById('dynamic-resume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeBuilder = "\n    <h2>Resume</h2>\n    <h3>Personal Information</h3>\n    <p>Name: ".concat(name, "</p>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    if (dynamicResume) {
        dynamicResume.innerHTML = resumeBuilder;
    }
    else {
        console.error('The resume element is missing.');
    }
});
