// Funktion zur Auswertung des Rabattcodes
function evaluiereRabattcode() {
    const codeEingabe = document.getElementById("rabattCodeInput").value.trim().toUpperCase();
    
    // Wenn das Feld leer ist, direkt abbrechen
    if (!codeEingabe) {
        zeigeFehlermeldung("Bitte gib einen Code ein.");
        return;
    }

    switch (codeEingabe) {
        case "SOMMER20":
            oeffneOverlay(
                "20% Sommer-Rabatt!", 
                "https://example.com"
            );
            break;

        case "WELCOME10":
            oeffneOverlay(
                "Willkommen! Du sparst 10 € auf deinen Einkauf.", 
                "https://example.com"
            );
            break;

        case "GRATISVERSAND":
            oeffneOverlay(
                "Versandkostenfreie Lieferung für dich!", 
                "https://example.com"
            );
            break;

        default:
            // Fallback: Externe Auswertung aufrufen (deine Funktion)
            verarbeiteAlternativenCode(codeEingabe);
            break;
    }
}

// Funktion zum Anzeigen des Overlays mit Text und Bild
function oeffneOverlay(text, bildUrl) {
    const overlay = document.getElementById("rabattOverlay");
    const overlayText = document.getElementById("overlayText");
    const overlayBild = document.getElementById("overlayBild");

    overlayText.textContent = text;
    overlayBild.src = bildUrl;
    overlayBild.alt = text;

    overlay.style.display = "flex"; 
}

// Funktion zum Schließen des Overlays
function schliesseOverlay() {
    document.getElementById("rabattOverlay").style.display = "none";
}

// Optionale Hilfsfunktion für einfache Fehler
function zeigeFehlermeldung(nachricht) {
    alert(nachricht); 
}
