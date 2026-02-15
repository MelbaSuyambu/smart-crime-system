function openTab(tabId) {

    const sections = document.querySelectorAll(".tab-section");
    const buttons = document.querySelectorAll(".tab-btn");

    sections.forEach(section => {
        section.style.display = "none";
        section.classList.remove("active");
    });

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(tabId).style.display = "block";
    document.getElementById(tabId).classList.add("active");

    event.target.classList.add("active");
}


function revealEvidence(caseType) {

    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file first.");
        return;
    }

    const previewImage = document.getElementById("previewImage");
    const fileName = document.getElementById("fileName");
    const evidenceResult = document.getElementById("evidenceResult");
    const analysisBox = document.querySelector(".evidence-analysis");

    fileName.innerHTML = "<strong>File Name:</strong> " + file.name;

    // Image Preview
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
        }
        reader.readAsDataURL(file);
    } else {
        previewImage.style.display = "none";
    }

    // 🔥 DIFFERENT ANALYSIS BASED ON CASE

    if (caseType === "homicide") {
        analysisBox.innerHTML = `
            <h4>AI Authenticity Report</h4>
            <p><strong>Manipulation Risk:</strong> 12%</p>
            <p><strong>Deepfake Probability:</strong> 3%</p>
            <p><strong>Lighting Consistency:</strong> Verified</p>
            <p><strong>Timestamp Integrity:</strong> Valid</p>
            <div class="risk-bar">
                <div class="risk-fill" style="width:12%"></div>
            </div>
        `;
    }

    if (caseType === "cyber") {
        analysisBox.innerHTML = `
            <h4>AI Fraud Detection Report</h4>
            <p><strong>Domain Spoof Score:</strong> 89%</p>
            <p><strong>Header Manipulation:</strong> Detected</p>
            <p><strong>IP Masking:</strong> VPN Suspected</p>
            <p><strong>Sender Reputation:</strong> Blacklisted</p>
            <div class="risk-bar">
                <div class="risk-fill" style="width:89%"></div>
            </div>
        `;
    }

    evidenceResult.classList.remove("hidden");
}

