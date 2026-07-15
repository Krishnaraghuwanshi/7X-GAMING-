// 7X GAMING

document.addEventListener("DOMContentLoaded", function () {

    alert("🔥 Welcome to 7X GAMING 🔥");

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.querySelector('input[type="text"]').value;
            const email = document.querySelector('input[type="email"]').value;
            const phone = document.querySelector('input[type="tel"]').value;

            if (name === "" || email === "" || phone === "") {
                alert("Please fill all details.");
                return;
            }

            alert(
                "Registration Successful!\n\n" +
                "Player: " + name +
                "\nTournament Time: 9:00 PM - 11:00 PM" +
                "\nEntry Fee: ₹20"
            );

            form.reset();
        });

    }

});
