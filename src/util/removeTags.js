
// this function parses through the summary html 
//  and removes all html tags from the string.
// to use, just wrap this function around the string you wanna alter.
removeTags = (rawString) => {
    parseArray = [...rawString];
    newArray = [];
    newString = "";
    inProcess = false;

    parseArray.forEach( (item) => {
        if ( item === "<" ) { 
            inProcess = true; 
        }; 

        if ( !inProcess ) { 
            newArray.push(item); 
        };

        if (item === ">") {
             inProcess = false; 
        }; 
    });

    newArray.forEach ( (item) => {
        newString += item; 
    });
    
    return(newString);
} // removeTags