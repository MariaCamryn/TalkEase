let selectedSentence = [];
let authenticatedUser = null;

function showLogin() {
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}

function showSignup() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('signup').classList.remove('hidden');
}

function goBack() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('signup').classList.add('hidden');
    document.querySelector('.auth-options').classList.remove('hidden');
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simple client-side authentication
    if (username === "user" && password === "password") {
        authenticatedUser = username;
        document.getElementById('auth').classList.add('hidden');
        document.getElementById('category').classList.remove('hidden');
    } else {
        alert("Invalid credentials");
    }
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Simple client-side signup (storing in local storage)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    authenticatedUser = username;
    document.getElementById('auth').classList.add('hidden');
    document.getElementById('category').classList.remove('hidden');
}

function logout() {
    authenticatedUser = null;
    document.getElementById('category').classList.add('hidden');
    document.getElementById('auth').classList.remove('hidden');
    document.querySelector('.auth-options').classList.remove('hidden');
}

function selectCategory(category) {
    document.getElementById('category').classList.add('hidden');
    document.getElementById('pictures').classList.remove('hidden');

    const pictureList = document.getElementById('picture-list');
    pictureList.innerHTML = '';

    let pictures;
    switch (category) {
        case 'CreateCard':
            pictures = ['Create your own card'];
            break;
        case 'Want':
            addPictureToSentence('Want');
            return;
        case 'Food':
            pictures = ['Idly', 'Dosa', 'Chapati', 'Rice', 'Chocolates', 'Juice', 'Water'];
            break;
        case 'People':
            pictures = ['I', 'We', 'My', 'He', 'She', 'It', 'They'];
            break;
        case 'Animals':
            pictures = ['Dog', 'Cat', 'Crow', 'Cow', 'Goat', 'Squirrel', 'Lion'];
            break;
        case 'Body':
            pictures = ['Eyes', 'Ears', 'Nose', 'Hair', 'Hands', 'Legs', 'Mouth'];
            break;
        case 'Clothes':
            pictures = ['Shirt', 'Frock', 'Pants', 'Skirt', 'Top', 'Churidar', 'Saree'];
            break;
        case 'Location':
            pictures = ['House', 'School', 'Restaurant', 'Park', 'Temple', 'Toilet', 'Bathroom'];
            break;
        case 'Time':
            pictures = ['Morning', 'Afternoon', 'Evening', 'Midnight', 'Midday', 'Dawn', 'Dusk'];
            break;
        case 'Feeling':
            pictures = ['Happy', 'Sad', 'Scared', 'Surprised', 'Angry', 'Confused', 'Sleepy'];
            break;
        case 'Action':
            pictures = ['Run', 'Talk', 'Play', 'Eat', 'Walk', 'Drink', 'Reading'];
            break;
        default:
            pictures = [];
            break;
    }

    pictures.forEach(pic => {
        const img = document.createElement('img');
        img.alt = pic;
        img.onclick = () => addPictureToSentence(pic);
        pictureList.appendChild(img);
    });
}

function goBackToCategory() {
    document.getElementById('pictures').classList.add('hidden');
    document.getElementById('category').classList.remove('hidden');
}

function addPictureToSentence(picture) {
    const sentenceDiv = document.getElementById('sentence');
    const img = document.createElement('img');
    img.alt = picture;
    img.onclick = () => removePictureFromSentence(img);
    sentenceDiv.appendChild(img);
    selectedSentence.push(picture);

    document.getElementById('sentence-formation').classList.remove('hidden');
}

function removePictureFromSentence(img) {
    img.remove();
    const index = selectedSentence.indexOf(img.alt);
    if (index > -1) {
        selectedSentence.splice(index, 1);
    }
}

function playSentence() {
    const sentence = selectedSentence.join(' ');
    const utterance = new SpeechSynthesisUtterance(sentence);
    speechSynthesis.speak(utterance);
}

function clearSentence() {
    const sentenceDiv = document.getElementById('sentence');
    sentenceDiv.innerHTML = '';
    selectedSentence = [];
    document.getElementById('sentence-formation').classList.add('hidden');
}

function goBackToPictures() {
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
