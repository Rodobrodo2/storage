// Utilizzare il localStorage

// 1.0 Salvare un valore nel localStorage
function saveLocal(key, value) {
    localStorage.setItem(key, value);
    console.log(`Valore salvato nel local storage ${key}=${value}`);
}

// 2.0 Recuperare un valore dal localStorage
function getLocal(key) {
    const value = localStorage.getItem(key);

    if (value !== null) {
        console.log(`Valore recuperato dal localStorage: ${key}=${value}`);
    } else {
        console.log(`Valore non trovato nel localStorage: ${key}`);
    }

    return value;
}

// 3.0 Rimuovere un valore dal localStorage
function removeLocal(key) {
    localStorage.removeItem(key);
    console.log(`Valore rimosso dal localStorage: ${key}`);
}

saveLocal("utente", "SalvatoreAranzulla");
getLocal("utente");
removeLocal("utente");