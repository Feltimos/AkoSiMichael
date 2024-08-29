document.querySelector('form').addEventListener('submit', function(event) {

    event.preventDefault();


    const userName = document.getElementById('userName').value;
    const userAge = document.getElementById('userAge').value;
    const userHobbies = document.getElementById('userHobbies').value;
    const isStudent = document.querySelector('.verify input[type="checkbox"]').checked;


    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'p-4 bg-light mb-3 rounded';

    summaryDiv.innerHTML = `
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Age:</strong> ${userAge}</p>
        <p><strong>Hobbies:</strong> ${userHobbies}</p>
        <p><strong>Student:</strong> ${isStudent ? 'Yes' : 'No'}</p>
    `;

    
    document.getElementById('summary-container').appendChild(summaryDiv);

    this.reset()});