document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // You can perform any necessary validation here before showing the confirmation message

  // Show the confirmation message in a new window
  const confirmationMessage = "Form submitted successfully!";
  const newWindow = window.open("", "_blank", "width=400,height=200");
  newWindow.document.write("<h2>" + confirmationMessage + "</h2>");
});