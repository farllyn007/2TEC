// script.js
function generatePrompt() {
    const title = document.getElementById('title').value || "[Title]";
    const setting = document.getElementById('setting').value || "[Setting]";
    const mc = document.getElementById('mc').value || "[Main Character]";
    const sc = document.getElementById('sc').value || "[Supporting Character]";
    const antagonist = document.getElementById('antagonist').value || "[Antagonist]";
    
    const incitingIncident = document.getElementById('incitingIncident').value || "[Inciting Incident]";
    const event1 = document.getElementById('event1').value || "[First Event]";
    const event2 = document.getElementById('event2').value || "[Second Event]";
    const event3 = document.getElementById('event3').value || "[Third Event]";
    const resolution = document.getElementById('resolution').value || "[Resolution]";
    const moral = document.getElementById('moral').value || "[Moral/Message]";
    
    const output = `
        Title: ${title}
        Setting: ${setting}
        Main Character: ${mc}
        Supporting Character: ${sc}
        Antagonist: ${antagonist}
        Inciting Incident: ${incitingIncident}
        First Challenge/Event: ${event1}
        Second Challenge/Event: ${event2}
        Third Challenge/Event: ${event3}
        Resolution: ${resolution}
        Moral/Message: ${moral}
    `;

    document.getElementById('output').innerText = output;
}
