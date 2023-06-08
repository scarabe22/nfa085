const sizes= {1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight'}

const defaultFavorites = [
    {title: 'JetBrains', url: 'https://jetbrains.com'},
    {title: 'GitHub', url: 'https://github.com'},
    {title: 'StackOverflow', url: 'https://stackoverflow.com'},
    {title: 'LinkedIn', url: 'https://linkedin.com'},
    {title: 'Wikipedia', url: 'https://wikipedia.org'},
    {title: 'Apple', url: 'https://apple.com'},
    {title: 'Microsoft', url: 'https://microsoft.com'},
    {title: 'WordPress', url: 'https://wordpress.com'},
    {title: 'IMDB', url: 'https://imdb.com'},
    {title: 'Trello', url: 'https://trello.com'},
    {title: 'Slack', url: 'https://slack.com'},
    {title: 'BitBucket', url: 'https://bitbucket.org'},
    {title: 'GitLab', url: 'https://gitlab.com'},
    {title: 'Bitly', url: 'https://bitly.com'},
    {title: 'CodePen', url: 'https://codepen.io'},
    {title: 'JSFiddle', url: 'https://jsfiddle.net'},
    {title: 'JSBin', url: 'https://jsbin.com'},
    {title: 'JS.do', url: 'https://js.do'},
    {title: 'CodeAnywhere', url: 'https://codeanywhere.com'},
    {title: 'CodeSandbox', url: 'https://codesandbox.io'},
    {title: 'Repl.it', url: 'https://repl.it'},
    {title: 'Glitch', url: 'https://glitch.com'},
    {title: 'JSitor', url: 'https://jsitor.com'},
];
// Generate a random color
function getRandomDarkColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i <6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Extract domain from url
function getDomainFromUrl(url){
    url=hasProtocol(url)?url:`https://${url}`;
    const urlObject = new URL(url);
    return urlObject.hostname;
}

// Remove protocol from url
function removeProtocol(url){
    return url.replace(/(^\w+:|^)\/\//, '');
}

// Check if url has protocol
function hasProtocol(url){
    return url.indexOf('http')===0;
}

// Convert hex to rgb
const hexToRgb = hex => {
    // turn hex val to RGB
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
        : null
}

// calc to work out if it will match on black or white better
const getForegroundColor = rgb =>
    (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? '000' : 'fff'

// get the image from clearbit API
function scrapWebsiteLogo(url) {
    url=removeProtocol(url);
    const apiUrl = `https://logo.clearbit.com/${encodeURIComponent(url)}`;
    const imageElement = document.createElement('img');

    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then(response => response.blob())
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);

                imageElement.src = imageUrl;

                resolve(imageElement);
            })
            .catch(error => {
                const bgColor = getRandomDarkColor();
                const color= getForegroundColor(hexToRgb(bgColor));
                const defaultImageUrl=`https://dummyimage.com/300x300/${bgColor.substring(1,4)}/${color}.png&text=${url}`;
                imageElement.src = defaultImageUrl;
                resolve(imageElement);
            });
    });
}