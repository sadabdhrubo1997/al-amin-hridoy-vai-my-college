// form toggle //

// toggler buttons
const btnToggleToCourse = document.querySelector('#form-toggle-to-course');
const btnToggleToEINN = document.querySelector('#form-toggle-to-einn');

// forms selection
const searchFormCourse = document.querySelector('#find_college_course');
const searchFormEINN = document.querySelector('#find_college_einn');

btnToggleToCourse.addEventListener('click', () => {
  searchFormCourse.classList.add('show');
  searchFormEINN.classList.remove('show');
});

btnToggleToEINN.addEventListener('click', () => {
  searchFormCourse.classList.remove('show');
  searchFormEINN.classList.add('show');
});

/**************************************************************/
