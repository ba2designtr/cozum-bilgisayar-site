/* ---- WhatsApp Pulse ---- */
@keyframes whatsappPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
  50%       { box-shadow: 0 0 0 12px rgba(34,197,94,0); }
}

/* ---- Hero Animations ---- */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-fade-in {
  animation: fadeIn 0.8s ease-out both;
}

.hero-slide-up {
  animation: slideUp 0.8s ease-out 0.2s both;
}

.hero-slide-up-delay {
  animation: slideUp 0.8s ease-out 0.4s both;
}

.hero-slide-up-delay2 {
  animation: slideUp 0.8s ease-out 0.6s both;
}

.hero-slide-up-delay3 {
  animation: slideUp 0.8s ease-out 0.8s both;
}

/* ---- Smooth scroll ---- */
html {
  scroll-behavior: smooth;
}

/* ---- Scrollbar ---- */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0f172a;
}
::-webkit-scrollbar-thumb {
  background: #2563eb;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #06b6d4;
}

/* ---- Default body font ---- */
body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* ---- Font utilities (for Tailwind classes) ---- */
.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
