const boton = document.querySelector("#boton")
boton.onclick = () => {
  Toastify({
    text: "Hotmail",
    duration: 3000,
    destination: "https://outlook.live.com/owa/",
    newWindow: true,
    close: true,
    gravity: "bottom",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { }
  }).showToast();
}
const boton2 = document.querySelector("#botonDos")
boton2.onclick = () => {
  Toastify({
    text: "Gmail",
    duration: 3000,
    destination: "https://www.google.com/intl/es-419/gmail/about/",
    newWindow: true,
    close: true,
    gravity: "bottom",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { }
  }).showToast();
}
const boton3 = document.querySelector("#botonTres")
boton3.onclick = () => {
  Toastify({
    text: "Yahoo",
    duration: 3000,
    destination: "https://espanol.yahoo.com/?p=us&guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAACcKaIkfcrb1c7wm0azSW5oPOExyqIGSOnvFqLBYYjSJmgPpV_b3tbfRefbi2ksFL-lWDLbVFMnvVGY3aznOliVM7FICYEGAdIO4Ji7094V6vZpm-Y2P4juS_Thbn0i-7r5wzP20fdFzK8lFT-2VRCGBuSmPipCk4MjG8FGNwHPL",
    newWindow: true,
    close: true,
    gravity: "bottom",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { }
  }).showToast();
}