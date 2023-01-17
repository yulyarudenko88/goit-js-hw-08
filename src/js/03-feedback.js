// import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let data = {};

loadForm();

formEl.addEventListener('input', throttle(onSaveFormInput, 500));

formEl.addEventListener('submit', onFormSubmit);

function onSaveFormInput(event) {
  data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  data[event.target.name] = event.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onFormSubmit(event) {
  event.preventDefault();  
  event.target.reset();
  console.log(data);
  localStorage.removeItem(STORAGE_KEY);
}

function loadForm() {
  try {
    let formLoad = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!formLoad) {
      return;
    }

    data = formLoad;
    formEl.email.value = data?.email || '';
    formEl.message.value = data?.message || '';
  } catch (error) {
    console.log('Error.message ', error.message);
  }
}