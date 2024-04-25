


/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    try {
        const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
        const data = await res.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching quote:', error);
        throw error; // Esto puede ser útil si quieres propagar el error para manejarlo fuera de esta función.
    }
};



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async(element) =>{
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = 'Loading...';
    

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3'); 
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerHTML = 'Next Quote'
    
    const renderQuote = async(data) =>{
        quoteLabel.innerHTML = `${data.quote}`;
        authorLabel.innerHTML = `${data.author}`;
        element.innerHTML = ''
        element.append(quoteLabel, authorLabel, nextQuoteButton);
    }

    // Añadir listener
    nextQuoteButton.addEventListener('click', async() => {
        nextQuoteButton.disabled = true
        element.innerHTML = 'Loading...';
        await renderQuote(await fetchQuote());
        nextQuoteButton.disabled = false
    })

    fetchQuote()
        .then(data => renderQuote(data));
}