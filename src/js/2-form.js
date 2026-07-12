const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
});

const savedData = localStorage.getItem(`feedback-form-state`); // Перевіряємо чи є дані в localStorage
if (savedData) {
  const parsedData = JSON.parse(savedData); // Перетворюємо рядок JSON назад в об'єкт
  formData.email = parsedData.email; // Заповнюємо форму збереженими даними
  formData.message = parsedData.message; // Заповнюємо форму збереженими даними

  form.elements.email.value = parsedData.email; // Заповнюємо форму збереженими даними
  form.elements.message.value = parsedData.message; // Заповнюємо форму збереженими даними
}
form.addEventListener('submit', event => {
  // Додаємо обробник події submit на форму
  event.preventDefault(); // Зупиняємо стандартну поведінку форми
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    // Перевіряємо чи всі поля заповнені
    alert('Fill please all fields'); // Перевіряємо чи всі поля заповнені
    return;
  }
  console.log(formData); // Виводимо дані форми в консоль
  formData.email = ''; // Очищаємо об'єкт formData після відправки форми
  formData.message = ''; // Очищаємо об'єкт formData після відправки форми
  localStorage.removeItem(`feedback-form-state`); // Видаляємо дані з localStorage після відправки форми
  form.reset(); // Очищаємо форму після відправки
});
