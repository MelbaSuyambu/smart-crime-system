function openTab(event, tabId) {

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

    if (caseType === "robbery") {
    analysisBox.innerHTML = `
        <h4>AI Robbery Analysis</h4>
        <p><strong>Weapon Detection Confidence:</strong> 91%</p>
        <p><strong>Facial Recognition Match:</strong> 37%</p>
        <p><strong>Vehicle Plate Visibility:</strong> Obscured</p>
        <div class="risk-bar high">
            <div class="risk-fill" style="width:91%"></div>
        </div>
    `;
}

if (caseType === "kidnap") {
    analysisBox.innerHTML = `
        <h4>AI Voice & Location Analysis</h4>
        <p><strong>Voice Stress Level:</strong> High Anxiety</p>
        <p><strong>Background Noise:</strong> Highway Proximity</p>
        <p><strong>Location Probability:</strong> 68% Industrial Zone</p>
        <div class="risk-bar high">
            <div class="risk-fill" style="width:68%"></div>
        </div>
    `;
}

if (caseType === "drugs") {
    analysisBox.innerHTML = `
        <h4>AI Substance Identification</h4>
        <p><strong>Substance:</strong> Heroin Confirmed</p>
        <p><strong>Packaging Consistency:</strong> 95%</p>
        <p><strong>Chain of Custody:</strong> Verified</p>
        <div class="risk-bar">
            <div class="risk-fill" style="width:95%"></div>
        </div>
    `;
}
if (caseType === "faceMatch") {

    let fileNameLower = file.name.toLowerCase();

    let matchedSuspects = [];
    let confidence = "0%";
    let matchColor = "red";

    let authenticity = "Likely Original Image";
    let deepfakeProbability = "6%";

    let facesDetected = 4;

    // ---------- MULTI MATCH SCENARIO ----------

    if (fileNameLower.includes("maya_market")) {
        matchedSuspects.push("Maya V.");
        matchedSuspects.push("Saloni S.");
        matchedSuspects.push("Melba S.");
        confidence = "88%";
        matchColor = "green";
    }

    else {

        if (fileNameLower.includes("maya_original")) {
            matchedSuspects.push("Maya V.");
            confidence = "86%";
            matchColor = "green";
        }

        if (fileNameLower.includes("saloni_original")) {
            matchedSuspects.push("Saloni S.");
            confidence = "82%";
            matchColor = "green";
        }

        if (fileNameLower.includes("melba_original")) {
            matchedSuspects.push("Melba S.");
            confidence = "78%";
            matchColor = "green";
        }

        if (fileNameLower.includes("maya_ai")) {
            matchedSuspects.push("Maya V.");
            confidence = "81%";
            matchColor = "green";
            authenticity = "AI Generated / Deepfake Suspected";
            deepfakeProbability = "87%";
        }

        if (fileNameLower.includes("saloni_ai")) {
            matchedSuspects.push("Saloni S.");
            confidence = "81%";
            matchColor = "green";
            authenticity = "AI Generated / Deepfake Suspected";
            deepfakeProbability = "87%";
        }
    }

    let matchResult;

    if (matchedSuspects.length > 0) {
        matchResult = "✅ Match Found: " + matchedSuspects.join(", ");
    } else {
        matchResult = "❌ No Match Found";
        confidence = "0%";
    }

    analysisBox.innerHTML = `
        <h4>AI Evidence Authentication</h4>
        <p><strong>Deepfake Probability:</strong> ${deepfakeProbability}</p>
        <p><strong>GAN Pattern Detection:</strong> ${deepfakeProbability === "87%" ? "Detected" : "Not Detected"}</p>
        <p><strong>Metadata Integrity:</strong> ${deepfakeProbability === "87%" ? "Altered" : "Verified"}</p>
        <p><strong>Final Verdict:</strong> ${authenticity}</p>

        <hr>

        <h4>Facial Recognition Analysis</h4>
        <p><strong>Faces Detected:</strong> ${facesDetected}</p>
        <p><strong>Suspects Matched:</strong> ${matchedSuspects.length}</p>
        <p><strong>Match Details:</strong> 
            <span style="color:${matchColor}; font-weight:600;">
                ${matchResult}
            </span>
        </p>
        <p><strong>Confidence Score:</strong> ${confidence}</p>

        <div class="risk-bar ${matchColor === 'red' ? 'high' : ''}">
            <div class="risk-fill" style="width:${confidence}"></div>
        </div>
    `;
}
    evidenceResult.classList.remove("hidden");
}

function downloadPDF() {

    const element = document.getElementById("caseReport");
    const sections = document.querySelectorAll(".tab-section");

    let activeSection = document.querySelector(".tab-section.active");
    let activeButton = document.querySelector(".tab-btn.active");

    // Show all sections
    sections.forEach(section => {
        section.style.display = "block";
    });

    // Remove height restriction temporarily
    const tabContent = document.querySelector(".tab-content");
    const originalHeight = tabContent.style.height;
    const originalOverflow = tabContent.style.overflow;

    tabContent.style.height = "auto";
    tabContent.style.overflow = "visible";

    setTimeout(() => {

        const opt = {
            margin: 0.5,
            filename: 'Case_Report_2026-045678.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['css', 'legacy'] }
        };

        html2pdf().set(opt).from(element).save().then(() => {

            // Restore tab visibility
            sections.forEach(section => {
                section.style.display = "none";
                section.classList.remove("active");
            });

            if (activeSection) {
                activeSection.style.display = "block";
                activeSection.classList.add("active");
            }

            if (activeButton) {
                document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
                activeButton.classList.add("active");
            }

            // Restore original layout
            tabContent.style.height = originalHeight;
            tabContent.style.overflow = originalOverflow;

        });

    }, 300);
}