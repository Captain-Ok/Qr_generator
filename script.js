document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("text-input");
    const generateBtn = document.getElementById("generate-btn");
    const qrCodeCanvas = document.getElementById("qr-code");
    const errorMessage = document.getElementById("error-message");
    const themeToggle = document.getElementById("theme-toggle");

    const generateQRCode = (text) => {
        QRCode.toCanvas(qrCodeCanvas, text, { width: 250 }, (error) => {
            if (error) {
                console.error(error);
                errorMessage.textContent = "Failed to generate QR code.";
            } else {
                errorMessage.textContent = "";
            }
        });
    };


    generateBtn.addEventListener("click", () => {
        const inputText = textInput.value.trim();
        if (inputText === "") {
            errorMessage.textContent = "Please enter some text or a link.";
            return;
        }
        generateQRCode(inputText);
    });

    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }
    });

    document.body.classList.add("light");
});
