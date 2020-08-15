const quotes = "http://staging.quotable.io/random";
const text = document.getElementById("currentQuote");
const refresh = document.querySelectorAll("button")[0];
const copy = document.querySelectorAll("button")[1];

const getQuote = async (url) => {
    let quote = await fetch(url).then(q => q.json());
    return quote;
}

getQuote(quotes).then(q => text.innerHTML = `"${q.content}" - ${q.author}`)

refresh.addEventListener('click', function() {
    const icon = document.querySelectorAll(".icon")[0];
    if(icon.classList.contains("animate")) {
        icon.classList.remove("animate")
    }
    setTimeout(function(){
        icon.classList.add("animate")
    }, 0)
    getQuote(quotes).then(q => text.innerHTML = `"${q.content}" - ${q.author}`);
})

copy.addEventListener('click', function() {
    if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    document.execCommand('copy');
})