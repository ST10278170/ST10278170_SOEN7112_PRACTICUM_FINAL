// ======================================================
// Horizon Private Training College
// Student Information System Prototype
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------------------------
    // 1. Automatically highlight current navigation page
    // --------------------------------------------------

    const navLinks = document.querySelectorAll(".nav-link");

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        link.classList.remove("active");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });


    // --------------------------------------------------
    // 2. Student Record Search
    // --------------------------------------------------

    const studentSearch =
        document.getElementById("studentSearch");

    if (studentSearch) {

        studentSearch.addEventListener("input", function () {

            const searchValue =
                studentSearch.value.toLowerCase().trim();

            const rows =
                document.querySelectorAll(
                    ".student-table tbody tr"
                );

            rows.forEach(function (row) {

                const rowText =
                    row.textContent.toLowerCase();

                row.style.display =
                    rowText.includes(searchValue)
                        ? ""
                        : "none";

            });

        });

    }


    // --------------------------------------------------
    // 3. Student Status Filter
    // --------------------------------------------------

    const studentStatus =
        document.getElementById("studentStatus");

    if (studentStatus) {

        studentStatus.addEventListener("change", function () {

            const selectedStatus =
                studentStatus.value;

            const rows =
                document.querySelectorAll(
                    ".student-table tbody tr"
                );

            rows.forEach(function (row) {

                const statusElement =
                    row.querySelector(".status");

                if (!statusElement) {
                    return;
                }

                const statusText =
                    statusElement.textContent
                        .toLowerCase()
                        .trim();

                if (selectedStatus === "all") {

                    row.style.display = "";

                }
                else if (
                    selectedStatus === "active" &&
                    statusText === "active"
                ) {

                    row.style.display = "";

                }
                else if (
                    selectedStatus === "pending" &&
                    statusText === "pending"
                ) {

                    row.style.display = "";

                }
                else {

                    row.style.display = "none";

                }

            });

        });

    }


    // --------------------------------------------------
    // 4. Fee Reminder Prototype
    // --------------------------------------------------

    const reminderButtons =
        document.querySelectorAll(".reminder-button");

    reminderButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.textContent = "Reminder Sent";
            button.disabled = true;

        });

    });


    // --------------------------------------------------
    // 5. Record Payment Prototype
    // --------------------------------------------------

    const recordPaymentButton =
        document.getElementById("recordPaymentButton");

    const paymentMessage =
        document.getElementById("paymentMessage");

    if (recordPaymentButton && paymentMessage) {

        recordPaymentButton.addEventListener(
            "click",
            function () {

                paymentMessage.textContent =
                    "Payment recorded successfully. " +
                    "The prototype represents the student's fee " +
                    "balance and payment status being updated.";

                paymentMessage.classList.add(
                    "success-message"
                );

                recordPaymentButton.textContent =
                    "Payment Recorded";

                recordPaymentButton.disabled = true;

            }
        );

    }


    // --------------------------------------------------
    // 6. Report Selection Prototype
    // --------------------------------------------------

    const reportButtons =
        document.querySelectorAll(".report-card");

    reportButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const reportName =
                button.querySelector("strong");

            if (reportName) {

                alert(
                    reportName.textContent +
                    " selected.\n\n" +
                    "This prototype represents a report " +
                    "generated from recorded Horizon student, " +
                    "enrolment and academic information."
                );

            }

        });

    });


    // --------------------------------------------------
    // 7. Announcement Prototype
    // --------------------------------------------------

    const publishAnnouncementButton =
        document.getElementById(
            "publishAnnouncementButton"
        );

    if (publishAnnouncementButton) {

        publishAnnouncementButton.addEventListener(
            "click",
            function () {

                publishAnnouncementButton.textContent =
                    "Announcement Ready";

                publishAnnouncementButton.disabled = true;

            }
        );

    }


    // --------------------------------------------------
    // 8. Prototype Console Confirmation
    // --------------------------------------------------

    console.log(
        "Horizon Student Information System prototype loaded successfully."
    );

});