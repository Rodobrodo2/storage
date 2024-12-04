// Gestire i cooklie
// 1.0 Salvare il cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log(`Cookie salvato: ${name}=${value}`);
}

// 2.0 Recuperare il cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            const value = cookie.substring(nameEQ.lengthm, cookie.length);
            console.log(`Cookie recuperato: ${name}=${value}`);
            return value;
        }
    }
    console.log(`Cookie non trovato: ${name}`);
    return null;
}

// 3.0 Rimuovere un cookie 
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log(`Cookie rimosso: ${name}`);
} 

setCookie("utente", "SalvatoreAranzulla", 6); // Salva un utente per 6 giormi
getCookie("utente"); // Recupera il valore del cookie
deleteCookie("utente"); // Rimuove il cookie 