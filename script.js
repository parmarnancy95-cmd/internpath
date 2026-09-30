const inputName = document.getElementById('input-name');
const inputTitle = document.getElementById('input-title');
const inputEmail = document.getElementById('input-email');
const inputSkills = document.getElementById('input-skills');

const viewName = document.getElementById('view-name');
const viewTitle = document.getElementById('view-title');
const viewEmail = document.getElementById('view-email');
const skillsList = document.getElementById('skills-list');

// (Input Event Listener)
inputName.addEventListener('input', (e) => {
    viewName.innerText = e.target.value || "Your Name";
});

inputTitle.addEventListener('input', (e) => {
    viewTitle.innerText = e.target.value || "Your Profession";
});

inputEmail.addEventListener('input', (e) => {
    viewEmail.innerText = e.target.value || "email@example.com";
});

inputSkills.addEventListener('input', (e) => {
    const skillsArray = e.target.value.split(',');
    skillsList.innerHTML = ''; 
    
    skillsArray.forEach(skill => {
        if(skill.trim() !== "") {
            const li = document.createElement('li');
            li.innerText = skill.trim();
            skillsList.appendChild(li);
        }
    });
});

document.getElementById('download-btn').addEventListener('click', () => {
    window.print(); 
});
function changeTemplate(templateName) {
    const previewContainer = document.getElementById('resume-preview');
    

    previewContainer.classList.remove('template-modern', 'template-classic', 'template-minimal');
    
    previewContainer.classList.add('template-' + templateName);
    
    const buttons = document.querySelectorAll('.tmpl-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
}