let activeDomain='Home';

const APP_PARAMS_KEY='favorites-params';


//**********************************************************************************************************************
//**************************************************** LocalStorage ****************************************************
//**********************************************************************************************************************
function getAppParams(){
    return JSON.parse(localStorage.getItem(APP_PARAMS_KEY)||'{}');
}
function setLocalStorageParam(key,value){
    const params = getAppParams();
    params[key]=value;
    localStorage.setItem(APP_PARAMS_KEY, JSON.stringify(params));
}

function getLocalStorageParam(key){
    const params = getAppParams();
    return params[key];
}

function getCountPerRow(domain){
    return getLocalStorageParam(`countPerRow_${domain}`)||8;
}

  
function getDomainsFromLocalStorage(){
    return JSON.parse(localStorage.getItem("domains")||'["Home"]');
}

function addDomainToLocalStorage(domain){
    const domains = getDomainsFromLocalStorage();
    if(!domains.includes(domain)) {
        domains.push(domain);
        localStorage.setItem("domains", JSON.stringify(domains));
    }
}

function removeDomainFromLocalStorage(domain){
    if(domain!=='Home') {
        const domains = getDomainsFromLocalStorage();
        const index = domains.indexOf(domain);
        if (index > -1) {
            domains.splice(index, 1);
            localStorage.setItem("domains", JSON.stringify(domains));
        }
    }
}

function getDomainKey(domain){
    return `domain_${domain}`;
}

function getFavoritesFromLocalStorage(domain){
    return JSON.parse(localStorage.getItem(getDomainKey(domain))||'[]');
}

function favoriteExists(favorite,favorites){
    return favorites.some(f=>f.url===favorite.url);
}

function getFavoriteIndex(favorite,favorites){
    return favorites.findIndex(f=>f.url===favorite.url);
}
function addFavoriteToLocalStorage(favorite,domain){
    const favorites = getFavoritesFromLocalStorage(domain);
    if(!favoriteExists(favorite,favorites)) {
        favorites.push(favorite);
        localStorage.setItem(getDomainKey(domain), JSON.stringify(favorites));
    }
}

function removeFavoriteFromLocalStorage(favorite,domain){
    const favorites = getFavoritesFromLocalStorage(domain);
    const index = getFavoriteIndex(favorite,favorites);
    if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem(getDomainKey(domain), JSON.stringify(favorites));
    }
}