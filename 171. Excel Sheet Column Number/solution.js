var titleToNumber = function(columnTitle) {
    let value = 0;
    for(let i = 0; i<columnTitle.length; i++){
        let temporary = columnTitle[i].charCodeAt(0) - 64;
        value = value*26 + temporary
    }
    return value
};