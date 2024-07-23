function submitSubscribeForm(form) {
  alert(`You are subscribed with \n\n Email: ${form.email.value}`);
  return false;
}

function submitForm(form) {
  alert(`
    You registered with the following information:

    
    Name: ${form.name.value}

    Email: ${form.email.value}

    Phone: ${form.phone.value}

    Service: ${form.service.value}`);
  return false;
}
