let lastTimestamp = 0; 

let textovePole = document.getElementById('zprava');
let tlacitkoSend = document.getElementById('btn-send');

textovePole.addEventListener('keydown', function(event) {
    // Zkontrolujeme, jestli byla zmáčknuta klávesa Enter
    if (event.key === "Enter") {
        
        event.preventDefault();
        // Pokud ano, nasimulujeme kliknutí na odesílací tlačítko
        tlacitkoSend.click();
        
    }
});

document.getElementById('btn-send').addEventListener('click', function() {
    const jmeno = document.getElementById('jmeno').value;
    const roomka = document.getElementById('roomka').value;
    const zprava = document.getElementById('zprava').value;

    if (!jmeno || !roomka || !zprava) {
        alert("Musíš vyplnit jméno, roomku i zprávu!");
        return;
    }

    let formData = new FormData();
    formData.append('akce', 'odeslat');
    formData.append('jmeno', jmeno);
    formData.append('roomka', roomka);
    formData.append('zprava', zprava);

    fetch('server.php', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
      .then(data => {
          if (data.status === 'ok') {
              document.getElementById('zprava').value = '';
              nactiZpravy(); 
          }
      });
});

function nactiZpravy() {
    const roomka = document.getElementById('roomka').value;
    
    if (!roomka) return;

    fetch(`server.php?akce=cist&roomka=${roomka}&timestamp=${lastTimestamp}`)
        .then(response => response.json())
        .then(data => {
            const chatBox = document.getElementById('chat-box');
            
            data.zpravy.forEach(msg => {
                chatBox.innerHTML += `<div><b>${msg.jmeno}</b> <i>(${msg.cas})</i>: ${msg.text}</div>`;
                
                if (msg.timestamp > lastTimestamp) {
                    lastTimestamp = msg.timestamp;
                }
            });

            if (data.zpravy.length > 0) {
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        });
}

setInterval(nactiZpravy, 2000);