// PvPEAUEL Event Shop - Code Decryption System
// Neon Matrix Terminal Style

// Definiere verschiedene Cases für Codes
const CODE_CASES = {
    'PEAV-INFO-001': {
        title: 'SYSTEM INFORMATION',
        type: 'info',
        text: 'Welcome to the PvPEAUEL Event Shop.\nThis is an exclusive marketplace for special items and rewards.',
        image: null
    },
    'PEAV-EVENT-2024': {
        title: 'EVENT ANNOUNCEMENT',
        type: 'event',
        text: 'A new event is starting soon!\nStay tuned for more information.\n\nEvent Date: Coming Soon\nReward Pool: Unknown',
        image: null
    },
    'PEAV-WELCOME-001': {
        title: 'WELCOME',
        type: 'welcome',
        text: 'Thank you for visiting the Black Market Terminal.\nYour access has been verified.\n\nPlease enter a valid access code to proceed.',
        image: null
    },
    'PEAV-IMAGE-TEST': {
        title: 'IMAGE DISPLAY TEST',
        type: 'image',
        text: 'This is a test window with an image.\nThe image should display above this text.',
        image: 'https://via.placeholder.com/300x200?text=Event+Shop+Image'
    }
};

// Modal-Fenster erstellen und anzeigen
function showCodeModal(title, text, imageUrl = null, type = 'info') {
    // Existierendes Modal entfernen, falls vorhanden
    const existingModal = document.getElementById('code-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Modal erstellen
    const modal = document.createElement('div');
    modal.id = 'code-modal';
    modal.className = 'code-modal';

    // Modal-Inhalt
    let modalContent = `
        <div class="modal-header">
            <div class="modal-dots">
                <div class="dot r"></div>
                <div class="dot y"></div>
                <div class="dot g"></div>
            </div>
            <span class="modal-title">${title}</span>
            <button class="modal-close" onclick="closeCodeModal()">&times;</button>
        </div>
        <div class="modal-body">
    `;

    // Bild hinzufügen, falls vorhanden
    if (imageUrl) {
        modalContent += `<img src="${imageUrl}" alt="Modal Image" class="modal-image" onerror="handleImageError(this)">`;
    }

    // Text hinzufügen
    modalContent += `
            <p class="modal-text">${text.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="modal-footer">
            <button class="modal-btn" onclick="closeCodeModal()">CLOSE TERMINAL</button>
        </div>
    `;

    modal.innerHTML = modalContent;

    // Modal zum DOM hinzufügen
    document.body.appendChild(modal);

    // Overlay-Backdrop hinzufügen
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.onclick = closeCodeModal;
    document.body.insertBefore(backdrop, modal);

    // CSS-Styles hinzufügen, falls nicht vorhanden
    addModalStyles();
}

// Modal schließen
function closeCodeModal() {
    const modal = document.getElementById('code-modal');
    const backdrop = document.querySelector('.modal-backdrop');

    if (modal) {
        modal.style.animation = 'slideOutModal 0.3s ease forwards';
        setTimeout(() => modal.remove(), 300);
    }
    if (backdrop) {
        backdrop.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => backdrop.remove(), 300);
    }
}

// Fehlerbehandlung für Bilder
function handleImageError(imgElement) {
    imgElement.style.display = 'none';
    const text = imgElement.nextElementSibling;
    if (text) {
        text.innerHTML = '⚠ IMAGE LOAD FAILED<br><br>' + text.innerHTML;
    }
}

// Modal-Styles hinzufügen
function addModalStyles() {
    if (document.getElementById('modal-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'modal-styles';
    styles.textContent = `
        /* Modal-Backdrop */
        .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(2, 2, 8, 0.8);
            backdrop-filter: blur(5px);
            z-index: 1998;
            animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }

        /* Modal-Container */
        .code-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 600px;
            max-height: 80vh;
            background: rgba(6, 15, 30, 0.95);
            border: 2px solid #00f3ff;
            border-radius: 12px;
            box-shadow: 0 0 40px rgba(0, 243, 255, 0.4),
                        inset 0 0 20px rgba(0, 243, 255, 0.1);
            z-index: 1999;
            display: flex;
            flex-direction: column;
            animation: slideInModal 0.3s ease forwards;
            overflow: hidden;
        }

        @keyframes slideInModal {
            from {
                opacity: 0;
                transform: translate(-50%, -45%);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }

        @keyframes slideOutModal {
            from {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -55%);
            }
        }

        /* Modal-Header */
        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            border-bottom: 1px solid #00f3ff;
            background: linear-gradient(135deg, rgba(0, 243, 255, 0.1), transparent);
        }

        .modal-dots {
            display: flex;
            gap: 6px;
        }

        .modal-title {
            flex: 1;
            text-align: center;
            color: #00f3ff;
            font-family: 'Orbitron', sans-serif;
            font-size: 1.2rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-shadow: 0 0 10px #00f3ff;
        }

        .modal-close {
            background: none;
            border: none;
            color: #ff0055;
            font-size: 2rem;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .modal-close:hover {
            color: #00f3ff;
            transform: scale(1.2);
            text-shadow: 0 0 10px #00f3ff;
        }

        /* Modal-Body */
        .modal-body {
            flex: 1;
            padding: 30px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .modal-body::-webkit-scrollbar {
            width: 6px;
        }

        .modal-body::-webkit-scrollbar-track {
            background: rgba(0, 243, 255, 0.1);
        }

        .modal-body::-webkit-scrollbar-thumb {
            background: #00f3ff;
            border-radius: 10px;
        }

        .modal-image {
            max-width: 100%;
            height: auto;
            max-height: 300px;
            border: 1px solid #00f3ff;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 243, 255, 0.3);
        }

        .modal-text {
            color: #8da2bb;
            font-family: 'Fira Code', monospace;
            font-size: 0.95rem;
            line-height: 1.6;
            text-align: center;
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        /* Modal-Footer */
        .modal-footer {
            padding: 20px;
            border-top: 1px solid #00f3ff;
            display: flex;
            gap: 10px;
            background: linear-gradient(135deg, transparent, rgba(0, 243, 255, 0.1));
        }

        .modal-btn {
            flex: 1;
            padding: 12px;
            background: transparent;
            border: 1px solid #00f3ff;
            border-radius: 6px;
            color: #00f3ff;
            font-family: 'Orbitron', sans-serif;
            font-size: 0.9rem;
            font-weight: bold;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .modal-btn:hover {
            background: #00f3ff;
            color: #020208;
            box-shadow: 0 0 20px #00f3ff;
        }

        /* Responsive */
        @media (max-width: 600px) {
            .code-modal {
                width: 95%;
                max-height: 90vh;
            }

            .modal-header {
                flex-direction: column;
                gap: 10px;
            }

            .modal-title {
                font-size: 1rem;
            }

            .modal-body {
                padding: 20px;
            }

            .modal-text {
                font-size: 0.85rem;
            }
        }
    `;
    document.head.appendChild(styles);
}

// Haupt-Decryption-Funktion
function decryptShop() {
    const input = document.getElementById('shopCode').value.toUpperCase().trim();

    // Input-Validierung
    if (input.length === 0) {
        showNotification('ERROR: EMPTY CHECKSUM. PLEASE ENTER A CODE.', 'error');
        return;
    }

    // Überprüfe ob der Code in den vordefinierten Cases existiert
    if (CODE_CASES[input]) {
        const codeCase = CODE_CASES[input];
        showCodeModal(codeCase.title, codeCase.text, codeCase.image, codeCase.type);
    } else {
        // Code ist nicht vordefiniert - externe Funktion aufrufen
        evaluateCustomCode(input);
    }
}

// Externe Funktion für benutzerdefinierte Codes
// Diese Funktion sollte von dir implementiert werden
function evaluateCustomCode(code) {
    console.log('[CUSTOM CODE EVALUATION] Processing code:', code);
    
    // Hier kannst du deine eigene Logik implementieren
    // z.B. API-Call, Datenbank-Abfrage, etc.
    
    // Beispiel:
    showNotification(`CUSTOM CODE PROCESSING: ${code}`, 'info');
    
    // Rufe deine benutzerdefinierte Funktion auf
    // handleCustomCode(code);
}

// Benachrichtigungs-System (optional, wenn nicht vorhanden)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `custom-overlay ${type}`;
    notification.innerHTML = `
        <div class="overlay-content">
            <h3>${type === 'success' ? '✓ SUCCESS' : type === 'error' ? '✗ ERROR' : 'ℹ INFO'}</h3>
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()">CLOSE</button>
        </div>
    `;
    document.body.appendChild(notification);

    // Auto-remove nach 5 Sekunden
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Enter-Taste zum Absenden aktivieren
document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('shopCode');
    if (codeInput) {
        codeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                decryptShop();
            }
        });
    }
});

// Console-Ausgabe für Testing
console.log('%c[SYSTEM] Verfügbare Test-Codes:', 'color: #00f3ff; font-weight: bold;');
Object.keys(CODE_CASES).forEach(code => {
    console.log(`%c${code}`, 'color: #ff0055;');
});
console.log('%c\nAlle anderen Codes werden zur Custom-Evaluation weitergeleitet.', 'color: #2ecc71;');
