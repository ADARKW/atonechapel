/* =========================
   LIVE CONFIGURATION
   ========================= */

// SET NEXT LIVE DATE & TIME (Ghana Time)
const nextLiveDate = new Date("2026-02-01T04:00:00"); // EDIT THIS

// MANUAL LIVE SWITCH (true = live, false = offline)
const isLive = true; // CHANGE THIS WHEN GOING LIVE

/* =========================
   ELEMENTS
   ========================= */
const liveContainer = document.getElementById("liveContainer");
const offlineMessage = document.getElementById("offlineMessage");
const liveStatus = document.getElementById("liveStatus");
const countdownTimer = document.getElementById("countdownTimer");
const whatsappAlert = document.getElementById("whatsappAlert");

/* =========================
   LIVE / OFFLINE LOGIC
   ========================= */
if (isLive) {
  offlineMessage.style.display = "none";
  liveContainer.style.display = "block";
  liveStatus.innerHTML = "🔴 <span class='live-badge'>LIVE NOW</span> — Join Prophet Joseph Adarkwah";
  whatsappAlert.style.display = "inline-block";
} else {
  liveContainer.style.display = "none";
  offlineMessage.style.display = "block";
  liveStatus.innerText = "⚫ Currently Offline";
}

/* =========================
   COUNTDOWN TIMER
   ========================= */
function updateCountdown() {
  const now = new Date().getTime();
  const distance = nextLiveDate - now;

  if (distance < 0) {
    countdownTimer.innerText = "We are live!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownTimer.innerText =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* =========================
   MOBILE MENU
   ========================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

