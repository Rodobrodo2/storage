// Utilizzare localStorage e sessionStorage insieme

function handleStorage(storageType, action, key, value = null) {
    const storage = storageType === 'localStorage' ? localStorage : sessionStorage;

    if (action === 'save') {
        storage.setItem(key, value);
        console.log(`[${storageType}] Valore salvato: ${key}=${value}`);
    } else if (action === 'get') {
        const result = storage.getItem(key);
        if (result !== null) {
            console.log(`[${storageType}] Valore recuperato: ${key}=${result}`);
        } else {
            console.log(`[${storageType}] Valore non trovato: ${key}`);
        }
    } else if (action === 'remove') {
        storage.removeItem(key);
        console.log(`[${storageType}] Valore rimosso: ${key}`);
    }
}

handleStorage('localStorage', 'save', 'utente', 'MarioRossi');
handleStorage('sessionStorage', 'save', 'token', 'abc123');

handleStorage('localStorage', 'get', 'utente');
handleStorage('sessionStorage', 'get', 'token');

handleStorage('localStorage', 'remove', 'utente');
handleStorage('sessionStorage', 'remove', 'token');

