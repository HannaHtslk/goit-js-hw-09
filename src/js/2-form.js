const form = document.querySelector('.feedback-form');
const userData = {};


const fillInForm = () => {
    try {
        const savedData = JSON.parse(localStorage.getItem('feedback-form-state')); 
        
        if (savedData === null) {
            return;
        }
        console.log(savedData);

        for (const key in savedData) {
            form.elements[key].value = savedData[key];
        }
        
  
    } catch (error) {
        console.log(error);
    }
}
fillInForm();


const onFormInput = event => {
    const { target: clickedElement } = event;
    
    const clickedElementName = clickedElement.name;
    const clickedElementValue = clickedElement.value;
   
    userData[clickedElementName] = clickedElementValue;
    console.log(userData)

    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

const onFormSubmit = event => {
    event.preventDefault();
    
    
    // for (const element of form.elements) {
    //     if (element.value.trim() === '') {
    //         return;
    //     }
    // }

localStorage.removeItem('feedback-form-state');
form.reset();
}

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);