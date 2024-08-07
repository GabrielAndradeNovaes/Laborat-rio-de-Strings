function analyzeText() {
    const text = document.getElementById('inputText').value;
    const wordArray = text.match(/\b\w+\b/g);
    
    const wordCount = wordArray ? wordArray.length : 0;
    const letterCount = wordArray ? wordArray.join('').length : 0;
    
    const wordOccurrences = {};
    if (wordArray) {
        wordArray.forEach(word => {
            word = word.toLowerCase();
            if (wordOccurrences[word]) {
                wordOccurrences[word]++;
            } else {
                wordOccurrences[word] = 1;
            }
        });
    }
    
    let occurrencesText = '';
    for (const word in wordOccurrences) {
        occurrencesText += `${word}: ${wordOccurrences[word]}<br>`;
    }
    
    document.getElementById('results').innerHTML = `
        <p>Total de palavras: ${wordCount}</p>
        <p>Total de letras: ${letterCount}</p>
        <p>Ocorrência de palavras:<br>${occurrencesText}</p>
    `;
}

function highlightWord() {
    const text = document.getElementById('inputText').value;
    const searchWord = document.getElementById('searchWord').value;
    const highlightedText = text.replace(new RegExp(`(${searchWord})`, 'gi'), '<span class="highlight">$1</span>');
    document.getElementById('results').innerHTML = `
        <h3>Texto com palavra destacada:</h3>
        <p>${highlightedText}</p>
    `;
}

function replaceWord() {
    const text = document.getElementById('inputText').value;
    const searchWord = document.getElementById('searchWord').value;
    const replaceWord = document.getElementById('replaceWord').value;
    const newText = text.replace(new RegExp(`\\b${searchWord}\\b`, 'gi'), replaceWord);
    document.getElementById('inputText').value = newText;
    document.getElementById('results').innerHTML = `
        <h3>Texto atualizado:</h3>
        <p>${newText}</p>
    `;
}