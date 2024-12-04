 // 1.0 Salvare un valore nel sessionStorage
 function saveSession(key, value) {
    sessionStorage.setItem(key, value);
    console.log(`Valore salvato nel sessionStorage: ${key}=${value}`);
 }

 // 2.0 Recuperare un valore dal sessionStorage
 function getSession(key) {
    const value = sessionStorage.getItem(key);

    if (value !== null) {
        console.log(`Valore recuperato dal sessionStorage: ${key}=${value}`)
    } else {
        console.log(`Valore non trovato nel sessionStorage: ${key}`);
    }

    return value;
 }

 // 3.0 Rimuovere un valore dal sessionStorage
 function removeSession(key) {
    sessionStorage.removeItem(key);
    console.log(`Valore rimosso dal sessionStorage: ${key}`)
 }

 saveSession("token", "abc123");
 getSession("token");
 removeSession("token");