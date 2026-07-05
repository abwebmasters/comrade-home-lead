// const form = document.getElementById("leadForm");
// const webhookUrl = "https://ai-agent.gwebit.com/webhook-test/920691de-b312-4c8f-a663-a2f8634ecab0";

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   console.log("🚀 Form submission started");

//   const fullName = form.querySelector('[name="fullName"]').value.trim();
//   const email = form.querySelector('[name="email"]').value.trim();
//   const phone = form.querySelector('[name="phone"]').value.trim();

//   if (!fullName || !email) {
//     alert("Full Name and Email are required!");
//     return;
//   }

//   const payload = {
//     fullName,
//     email,
//     phone,
//     timestamp: new Date().toISOString(),
//     source: "website-optin",
//   };

//   console.log("📤 Sending payload:", payload);

//   try {
//     const button = form.querySelector("button");
//     button.disabled = true;
//     button.textContent = "Sending...";

//     // Updated fetch block to force cross-origin delivery
//     await fetch(webhookUrl, {
//       method: "POST",
//       mode: "no-cors",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     console.log("✅ Sent!");
//     alert("🎉 Thank you! Your FREE Guide is on its way.");
//     form.reset();
//   } catch (err) {
//     console.error("❌ Error:", err);
//     alert("Something went wrong. Please check your browser console.");
//   } finally {
//     const button = form.querySelector("button");
//     button.disabled = false;
//     button.textContent = "Send Me The FREE Guide";
//   }
// });

const form = document.getElementById("leadForm");

const webhookUrl = "https://ai-agent.gwebit.com/webhook-test/920691de-b312-4c8f-a663-a2f8634ecab0";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("🚀 Form submission started");

  const fullName = form.querySelector('[name="fullName"]').value.trim();

  const email = form.querySelector('[name="email"]').value.trim();

  const phone = form.querySelector('[name="phone"]').value.trim();

  if (!fullName || !email) {
    alert("Full Name and Email are required!");

    return;
  }

  const payload = {
    fullName,

    email,

    phone,

    timestamp: new Date().toISOString(),

    source: "website-optin",
  };

  console.log("📤 Sending payload:", payload);

  try {
    const button = form.querySelector("button");

    const originalText = button.textContent;

    button.disabled = true;

    button.textContent = "Sending...";

    const response = await fetch(webhookUrl, {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(payload),
    });

    console.log("📥 Response status:", response.status);

    if (response.ok) {
      console.log("✅ Success!");

      alert("🎉 Thank you! Your FREE Guide is on its way.");

      form.reset();
    } else {
      throw new Error("Server responded with error");
    }
  } catch (err) {
    console.error("❌ Error:", err);

    alert("Failed to send. Please check browser console (F12) and tell me what error you see.");
  } finally {
    const button = form.querySelector("button");

    button.disabled = false;

    button.textContent = "Send Me The FREE Guide";
  }
});
