var clickExperience = false;
function infoToggleExperience() {
    if(!clickExperience) {
        clickExperience = true;
        document.getElementById('info-toggle-experience').innerHTML = 'Less Info';
    } else {
        clickExperience = false;
        document.getElementById('info-toggle-experience').innerHTML = 'More Info';
    }
}

var clickEducation = false;
function infoToggleEducation() {
    if(!clickEducation) {
        clickEducation = true;
        document.getElementById('info-toggle-education').innerHTML = 'Less Info';
    } else {
        clickEducation = false;
        document.getElementById('info-toggle-education').innerHTML = 'More Info';
    }
}

var clickSkillsAndCertifications = false;
function infoToggleSkillsAndCertifications() {
    if(!clickSkillsAndCertifications) {
        clickSkillsAndCertifications = true;
        document.getElementById('info-toggle-skills-and-certifications').innerHTML = 'Less Info';
    } else {
        clickSkillsAndCertifications = false;
        document.getElementById('info-toggle-skills-and-certifications').innerHTML = 'More Info';
    }
}
