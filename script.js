document.addEventListener("DOMContentLoaded", function () {
  // NFC Toggle
  const enableNfcCheckbox = document.getElementById("enable-nfc");

  enableNfcCheckbox.addEventListener("change", () => {
    const isEnabled = enableNfcCheckbox.checked;
    console.log("NFC Business Card is " + (isEnabled ? "enabled" : "disabled"));
  });

  // Password Update
  const updatePasswordButton = document.getElementById("update-password");
  const passwordStatus = document.getElementById("password-status");

  updatePasswordButton.addEventListener("click", () => {
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword && newPassword === confirmPassword) {
      passwordStatus.textContent = "Password updated successfully!";
      passwordStatus.style.color = "green";
      // Logic to update password in backend would go here
    } else {
      passwordStatus.textContent = "Passwords do not match!";
      passwordStatus.style.color = "red";
    }
  });

  // Privacy Settings
  const showEmailCheckbox = document.getElementById("show-email");
  const showPhoneCheckbox = document.getElementById("show-phone");
  const saveSettingsButton = document.getElementById("save-settings");
  const settingsStatus = document.getElementById("settings-status");

  saveSettingsButton.addEventListener("click", () => {
    const showEmail = showEmailCheckbox.checked;
    const showPhone = showPhoneCheckbox.checked;

    // Display the save status
    settingsStatus.textContent = "Settings saved successfully!";
    settingsStatus.style.color = "green";

    // Log privacy settings for debugging
    console.log("Show Email on Profile:", showEmail);
    console.log("Show Phone on Profile:", showPhone);

    // Logic to save settings to backend would go here
  });
});
