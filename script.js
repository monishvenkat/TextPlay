// Input Field
const inputField = document.getElementById("input-field");
// Output Field
const outputField = document.getElementById("output-field");
// Buttons
const buttons = document.querySelectorAll("button");

// Store the original text
let originalText = "";

inputField.addEventListener("input", () => {
    originalText = inputField.value;
    outputField.textContent = originalText;
    // Reset text transformations
    outputField.style.fontWeight = "normal";
    outputField.style.fontStyle = "normal";
    outputField.style.textDecoration = "none";
    buttons.forEach(btn => btn.classList.remove("active"));
});

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // UPPERCASE
        if (btn.classList.contains("uppercase-btn")) {
            if (btn.classList.contains("active")) {
                outputField.textContent = originalText;
                btn.classList.remove("active");
            } else {
                outputField.textContent = originalText.toUpperCase();
                buttons.forEach(b => {
                    if (
                        b.classList.contains("lowercase-btn") ||
                        b.classList.contains("capitalize-btn")
                    ) {
                        b.classList.remove("active");
                    }
                });
                btn.classList.add("active");
            }
        }
        else if (btn.classList.contains("lowercase-btn")) {
            if (btn.classList.contains("active")) {
                outputField.textContent = originalText;
                btn.classList.remove("active");
            } else {
                outputField.textContent = originalText.toLowerCase();
                buttons.forEach(b => {
                    if (
                        b.classList.contains("uppercase-btn") ||
                        b.classList.contains("capitalize-btn")
                    ) {
                        b.classList.remove("active");
                    }
                });
                btn.classList.add("active");
            }
        }

        // Capital
        else if (btn.classList.contains("capitalize-btn")) {
            if (btn.classList.contains("active")) {
                outputField.textContent = originalText;
                btn.classList.remove("active");
            } else {
                outputField.textContent = originalText
                    .toLowerCase()
                    .replace(/\b\w/g, char => char.toUpperCase());
                buttons.forEach(b => {
                    if (
                        b.classList.contains("uppercase-btn") ||
                        b.classList.contains("lowercase-btn")
                    ) {
                        b.classList.remove("active");
                    }
                });
                btn.classList.add("active");
            }
        }

        // Bold
        else if (btn.classList.contains("bold-btn")) {
            btn.classList.toggle("active");
            outputField.style.fontWeight =
                btn.classList.contains("active") ? "bold" : "normal";
        }

        // Italic
        else if (btn.classList.contains("italic-btn")) {
            btn.classList.toggle("active");
            outputField.style.fontStyle =
                btn.classList.contains("active") ? "italic" : "normal";
        }

        // Underline
        else if (btn.classList.contains("underline-btn")) {
            btn.classList.toggle("active");
            outputField.style.textDecoration =
                btn.classList.contains("active") ? "underline" : "none";
        }

        //Copy Button
        else if (btn.classList.contains("copy-btn")) {
    navigator.clipboard.writeText(outputField.textContent)
        }

        // Reset Button
        else if (btn.classList.contains("reset-btn")) {
    outputField.textContent = originalText;
    outputField.style.fontWeight = "normal";
    outputField.style.fontStyle = "normal";
    outputField.style.textDecoration = "none";
    buttons.forEach(b => b.classList.remove("active"));
    }
    });
});