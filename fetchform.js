const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    submitform(formData);
});






function submitform(formData) {
    const formUrl = "https://formspree.io/f/xjvqvnaj";

    fetch(formUrl, {
        method: "POST",
        body: formData,
    })
    .then((response) => {
        if(response.ok) {
            console.log("Form sucessfully submitted!");
            formData.reset();
        } else {
            console.error("Form submission failed.");
        }
    })
    .catch((error) => {
        console.error("Error submitting form:", error);
    });
}
