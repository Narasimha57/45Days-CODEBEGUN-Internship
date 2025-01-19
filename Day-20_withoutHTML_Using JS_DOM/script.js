
const createFormField = (labelText, inputType, inputName, container = form) => {
  const label = document.createElement('label');
  label.textContent = `${labelText}: `;
  container.appendChild(label);

  const input = document.createElement('input');
  input.type = inputType;
  input.name = inputName;
  container.appendChild(input);

  container.appendChild(document.createElement('br'));
  container.appendChild(document.createElement('br'));

  return input;
};

const form = document.createElement('form');
document.body.appendChild(form);

const firstNameInput = createFormField('First Name', 'text', 'firstName');
const lastNameInput = createFormField('Last Name', 'text', 'lastName');
const emailInput = createFormField('Email', 'email', 'email');
const phoneInput = createFormField('Phone Number', 'tel', 'phone');

const createRadioButtons = (labelText, name, values) => {
  const label = document.createElement('label');
  label.textContent = labelText;
  form.appendChild(label);

  values.forEach(value => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = name;
    input.value = value;
    form.appendChild(input);

    const optionLabel = document.createElement('label');
    optionLabel.textContent = value;
    form.appendChild(optionLabel);
  });

  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));
};

createRadioButtons('Gender:', 'gender', ['Male', 'Female', 'Other']);

const createCheckboxes = (labelText, name, values) => {
  const label = document.createElement('label');
  label.textContent = labelText;
  form.appendChild(label);

  values.forEach(value => {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = name;
    input.value = value;
    form.appendChild(input);

    const optionLabel = document.createElement('label');
    optionLabel.textContent = value;
    form.appendChild(optionLabel);
  });

  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));
};

createCheckboxes('Hobbies:', 'hobbies', ['Reading', 'Sports', 'Music', 'Traveling']);

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
submitButton.id = 'formSubmitBtn';
form.appendChild(submitButton);

const editBtn = document.createElement("button")
editBtn.textContent = "Update";
form.appendChild(editBtn);
editBtn.style = "display:none";

const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.width = '80%';
table.style.margin = '20px auto';

const headers = ["ID", "First Name", "Last Name", "Email", "Phone", "Gender", "Hobbies", "Actions"];
const headerRow = document.createElement('tr');
headers.forEach(header => {
  const th = document.createElement('th');
  th.textContent = header;
  th.style.border = '1px solid black';
  th.style.padding = '8px';
  th.style.textAlign = 'center';
  headerRow.appendChild(th);
});

table.appendChild(headerRow);
document.body.appendChild(table);

const formDataArray = [];

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = {
    id: Math.round(Math.random() * 3000),
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    gender: document.querySelector('input[name="gender"]:checked')?.value || '',
    hobbies: Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(
      (hobby) => hobby.value
    ),
  };

  formDataArray.push(formData);

  [firstNameInput, lastNameInput, emailInput, phoneInput].forEach(input => input.value = '');
  document.querySelectorAll('input[name="gender"], input[name="hobbies"]').forEach(el => el.checked = false);

  const row = document.createElement('tr');
  Object.values(formData).forEach(value => {
    const cell = document.createElement('td');
    cell.style.border = '1px solid black';
    cell.style.padding = '8px';
    cell.style.textAlign = 'center';
    cell.textContent = Array.isArray(value) ? value.join(', ') : value;
    row.appendChild(cell);
  });

  const actionsCell = document.createElement('td');
  actionsCell.style.border = '1px solid black';
  actionsCell.style.padding = '8px';
  actionsCell.style.textAlign = 'center';

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.style.marginRight = '5px';
  editButton.addEventListener('click', () => handleEdit(formData, row));

  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => row.remove());

  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);
  row.appendChild(actionsCell);

  table.appendChild(row);
});

const handleEdit = (formData, row) => {
  submitButton.style = "display:none";
  editBtn.style = "display:block";

  firstNameInput.value = formData.firstName;
  lastNameInput.value = formData.lastName;
  emailInput.value = formData.email;
  phoneInput.value = formData.phone;

  document.querySelectorAll('input[name="gender"]').forEach(el => {
    el.checked = el.value === formData.gender;
  });

  document.querySelectorAll('input[name="hobbies"]').forEach(el => {
    el.checked = formData.hobbies.includes(el.value);
  });

  editBtn.addEventListener('click', (e) => {
    e.preventDefault();

    formData.firstName = firstNameInput.value;
    formData.lastName = lastNameInput.value;
    formData.email = emailInput.value;
    formData.phone = phoneInput.value;
    formData.gender = document.querySelector('input[name="gender"]:checked')?.value || '';
    formData.hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(
      (hobby) => hobby.value
    );

    Object.values(formData).forEach((value, index) => {
      row.cells[index].textContent = Array.isArray(value) ? value.join(', ') : value;
    });

    [firstNameInput, lastNameInput, emailInput, phoneInput].forEach(input => input.value = '');
    document.querySelectorAll('input[name="gender"], input[name="hobbies"]').forEach(el => el.checked = false);

    submitButton.style = "display:block";
    editBtn.style = "display:none";
  });
};
