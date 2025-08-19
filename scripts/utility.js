function hideElementById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    showElementById('play-ground');
}