    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    const charCount = document.getElementById('charCount');
    const sentenceCount = document.getElementById('sentenceCount');
    const paragraphCount = document.getElementById('paragraphCount');
    const syllableCount = document.getElementById('syllableCount');

    textInput.addEventListener('input', function() {
      const text = this.value.trim();
      wordCount.textContent = text === '' ? 0 : text.split(/\s+/).length;
      charCount.textContent = text.length;
      sentenceCount.textContent = text === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
      paragraphCount.textContent = text === '' ? 0 : text.split('\n\n').filter(Boolean).length;
      syllableCount.textContent = text === '' ? 0 : countSyllables(text);
    });

    function countSyllables(text) {
      // Simple syllable counter, not perfect but works for many cases
      const words = text.split(/\s+/);
      let syllableCount = 0;
      for (let word of words) {
        word = word.toLowerCase().replace(/[^a-z]/g, ''); // Remove non-alphabetic characters
        if (word.length <= 3) {
          syllableCount += 1;
        } else {
          let wordPartials = word.match(/[aeiouy]+/g);
          syllableCount += wordPartials ? wordPartials.length : 0;
        }
      }
      return syllableCount;
    }
