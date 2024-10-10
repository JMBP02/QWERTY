document.addEventListener('keydown', function(event) {
    const keyMap = {
        'q': '.letter1',
        'w': '.letter2',
        'e': '.letter3',
        'r': '.letter4',
        't': '.letter5',
        'y': '.letter6',
        'u': '.letter7',
        'i': '.letter8',
        'o': '.letter9',
        'p': '.letter10',
        'a': '.letter11',
        's': '.letter12',
        'd': '.letter13',
        'f': '.letter14',
        'g': '.letter15',
        'h': '.letter16',
        'j': '.letter17',
        'k': '.letter18',
        'l': '.letter19',
        'z': '.letter20',
        'x': '.letter21',
        'c': '.letter22',
        'v': '.letter23',
        'b': '.letter24',
        'n': '.letter25',
        'm': '.letter26',
        ' ': '.space',
    };

    const letterClass = keyMap[event.key.toLowerCase()];
    if (letterClass) {
        const letterDiv = document.querySelector(letterClass);
        if (letterDiv) {
            letterDiv.style.transform = 'translateY(200px)';
            letterDiv.style.paddingTop = '100';
            setTimeout(() => {
                letterDiv.style.transform = 'translateY(0)';
                letterDiv.style.paddingTop = '6';
            }, 300);
        }
    }
});
