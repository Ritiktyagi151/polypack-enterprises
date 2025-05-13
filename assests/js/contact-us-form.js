
        document.getElementById("contactForm").addEventListener("submit", async function (event) {
          event.preventDefault(); // Prevent the default form submission
      
          // Collect form data
          const formData = new FormData(this);
          const data = Object.fromEntries(formData); // Convert FormData to a plain object
      
          try {
            // Send data to the backend (replace '/submit' with your actual endpoint)
            const response = await fetch("/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
      
            if (response.ok) {
              alert("Form submitted successfully!");
              this.reset(); // Clear the form
            } else {
              alert("Error submitting form. Please try again.");
            }
          } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
          }
        });
      