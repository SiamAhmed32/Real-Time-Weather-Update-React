export function getFormattedDate(value, type, inMs){
    if(!type) return value
    if (!inMs){
        value = value * 1000 // 1751141386 * 100
    }
    const date = new Date(value)
    let options;
    if(type === 'date'){
        options = {
            weekday : 'long',
            year : 'numeric',
            month : "long",
            day : 'numeric'
        }
    }
    else if(type === 'time'){
        options = {
            hour : 'numeric',
            minute : 'numeric',
            second: "numeric",
        }
    }
    return new Intl.DateTimeFormat('en-us', options).format(date)
}