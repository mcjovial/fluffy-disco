const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

// Show Quote 
const newQuote = () => {
    // generate a random number from the totaal length of the array
    const index = Math.floor(Math.random() * apiQuotes.length)
    
    // pick a random quote from the array
    const quote = apiQuotes[index];
    
    
    // Check if the author field is blank and replace it with 'Unknown'
    if (!quote.author) {
        // display the quote in the UI 
        quoteText.textContent = quote.text
        quoteAuthor.textContent = '- Unknown Author'
    } else {
        // display the quote in the UI 
        quoteText.textContent = quote.text
        quoteAuthor.textContent = `- ${quote.author}`
    }

    // Check quote to determine its styling
    if (quote.text.length > 120) {
        // add 'long-quote' to the class attribute of the quote element
        quoteText.classList.add('long-quote')
    } else {
        // remove 'long-quote' from the class attribute of the quote element
        quoteText.classList.remove('long-quote')
    }
}

// Get Quote from API
const getQuote = async () => {
    const apiUrl = 'https://type.fit/api/quotes'

    try {
        // response from the quotes api   
        const response = await fetch(apiUrl)

        // convert the response to JSON format to extract data (quotes)
        apiQuotes = await response.json()

        // display a quote by default
        newQuote()
    } catch (error) {
        console.log(error);
    }
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote)

// fetch quotes from API when page renders
getQuote()