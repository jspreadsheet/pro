title: Welcome
keywords: Jspreadsheet, JavaScript plugin,
description: Welcome to Jspreadsheet.

![Contact example](img/taylor/welcome.png){.left}

# Welcome to Jspreadsheet

## Verify your email address

To access your profile and get the free trial license key, click the verification button in the email we just sent to <span id="registration"></span>. This helps to keep your account secure.<br><br>

No email in your inbox? Please verify your spam folder.

<script>
document.getElementById('registration').textContent = localStorage.getItem('registration-email')||'you';

document.addEventListener("DOMContentLoaded", () => {
    rdt('track', 'Lead', {
      "products": [
          {
              "id": "Jspreadsheet Pro",
              "name": "Jspreadsheet Pro",
              "category": "Jspreadsheet Pro"
          }
      ]
    });
});
</script>
