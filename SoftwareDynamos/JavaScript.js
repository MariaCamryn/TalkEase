    document.getElementById('sentence-formation').classList.add('hidden');
    document.getElementById('pictures').classList.remove('hidden');
}

function saveSettings() {
    alert('Settings saved!');
}

function saveData() {
    alert('Data saved!');
}

function shareData() {
    alert('Data shared!');
}

function speakDescription() {
    const description = document.getElementById('description').textContent;
    const utterance = new SpeechSynthesisUtterance(description);
    speechSynthesis.speak(utterance);
}


