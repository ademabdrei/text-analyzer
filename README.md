
# Text Analyzer

A simple web-based tool that allows users to analyze the text they input, providing various statistics such as word count, character count, sentence count, paragraph count, and syllable count.

## Demo
You can try the Text Analyzer live at: [https://text-analyzer-tool.netlify.app](https://text-analyzer-tool.netlify.app)

## Features
- Analyze the text entered by the user
- Display the word count, character count, sentence count, paragraph count, and syllable count
- Automatically updates the statistics as the user types or pastes text

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Use
1. Type or paste your text into the provided text area.
2. The text analyzer will automatically display the statistics for the entered text.

## Code Explanation
The code consists of an HTML structure, a CSS stylesheet, and a JavaScript file that handles the text analysis functionality.

### HTML Structure
The HTML file sets up the basic structure of the webpage, including:
- A container div to hold the content
- A text area for the user to input text
- Div elements to display the various text statistics

### CSS Styling
The CSS file styles the webpage, including:
- Setting the font and background colors
- Centering the content on the page
- Styling the text area and result containers

### JavaScript Functionality
The JavaScript code handles the text analysis functionality:

1. The event listener on the text area:
   - Retrieves the text entered by the user
   - Calls the appropriate functions to calculate the various text statistics
   - Updates the corresponding result elements with the calculated values

2. The `countSyllables()` function:
   - Implements a simple syllable counting algorithm
   - Splits the text into words and counts the syllables for each word
   - Returns the total syllable count for the given text

The JavaScript code updates the word count, character count, sentence count, paragraph count, and syllable count in real-time as the user types or pastes text into the text area.

## Getting Started
To use the Text Analyzer, simply copy the HTML, CSS, and JavaScript code provided and save them in your project directory. You can then open the HTML file in a web browser to start using the application.

## Contributions
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to open a new issue or submit a pull request on the [GitHub repository](https://github.com/ademabdrei/text-analyzer.git).
