function showMessage() {
    const message = document.getElementById("message");

    message.textContent =
        "✅ Deployment is working! Jenkins → Docker → AWS EC2";

    console.log("Application successfully deployed.");
}