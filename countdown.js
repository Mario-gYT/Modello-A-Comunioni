// =================================================================
// COUNTDOWN.JS
// Questo script gestisce il conto alla rovescia per l'invito.
// =================================================================

// 1. IMPOSTA LA DATA E L'ORA DEL BATTESIMO
// La data è impostata su: 28 / 06 / 2026 alle ore 11:00 (come da tuo HTML)
// Formato: Anno, Mese (0-11), Giorno, Ora, Minuto, Secondo
// Mese 5 = Giugno (il conteggio parte da 0)
const countdownDate = new Date("2026-06-28T11:00:00").getTime(); 

// Elemento DOM dove verrà visualizzato il conto alla rovescia
const countdownElement = document.getElementById("countdown");

// Funzione per aggiornare il conto alla rovescia
function updateCountdown() {
    // Ottieni la data e l'ora correnti
    const now = new Date().getTime();
    
    // Calcola la distanza tra la data di destinazione e adesso
    const distance = countdownDate - now;

    // Logica se la data è già passata
    if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "Il Battesimo è in corso! 🎉";
        return;
    }

    // Calcola i tempi per giorni, ore, minuti e secondi
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Funzione helper per formattare i valori con due cifre (es. 05 invece di 5)
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }

    // Visualizza il risultato nell'elemento HTML
    countdownElement.innerHTML = 
        `<span class="time-value">${days}</span> Giorni` +
        `<span class="time-value">${formatTime(hours)}</span> Ore` +
        `<span class="time-value">${formatTime(minutes)}</span> Minuti` +
        `<span class="time-value">${formatTime(seconds)}</span> Secondi`;
}

// Chiama la funzione updateCountdown immediatamente per evitare un ritardo di 1 secondo
updateCountdown();

// Aggiorna il conto alla rovescia ogni 1 secondo (1000 millisecondi)
const interval = setInterval(updateCountdown, 1000);
