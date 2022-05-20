var click = false;
function infoToggleExperience() {
    if(!click) {
        click = true;
        document.getElementById('info-toggle-experience').innerHTML = 'Less Info';
    } else {
        click = false;
        document.getElementById('info-toggle-experience').innerHTML = 'More Info';
    }
}

var click = false;
function infoToggleEducation() {
    if(!click) {
        click = true;
        document.getElementById('info-toggle-education').innerHTML = 'Less Info';
    } else {
        click = false;
        document.getElementById('info-toggle-education').innerHTML = 'More Info';
    }
}

var click = false;
function infoToggleSkillsAndCertifications() {
    if(!click) {
        click = true;
        document.getElementById('info-toggle-skills-and-certifications').innerHTML = 'Less Info';
    } else {
        click = false;
        document.getElementById('info-toggle-skills-and-certifications').innerHTML = 'More Info';
    }
}