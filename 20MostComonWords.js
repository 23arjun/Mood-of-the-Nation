words = [];

stopwords = ["a", "able", "about",
        "across", "after", "all", "almost", "also", "am", "among", "an",
        "and", "any", "are", "as", "at", "b", "be", "because", "been",
        "but", "by", "c", "can", "cannot", "could", "d", "dear", "did",
        "do", "does", "e", "either", "else", "ever", "every", "f", "for",
        "from", "g", "get", "got", "h", "had", "has", "have", "he", "her",
        "hers", "him", "his", "how", "however", "i", "if", "in", "into",
        "is", "it", "its", "j", "just", "k", "l", "least", "let", "like",
        "likely", "m", "may", "me", "might", "most", "must", "my",
        "neither", "n", "no", "nor", "not", "o", "of", "off", "often",
        "on", "only", "or", "other", "our", "own", "p", "q", "r", "rather",
        "s", "said", "say", "says", "she", "should", "since", "so", "some",
        "t", "than", "that", "the", "their", "them", "then", "there",
        "these", "they", "this", "tis", "to", "too", "twas", "u", "us",
        "v", "w", "wants", "was", "we", "were", "what", "when", "where",
        "which", "while", "who", "whom", "why", "will", "with", "would",
        "x", "y", "yet", "you", "your", "z", "rt"];

for(var i =0; i < msg.payload.length; i++){
    var temp = msg.payload[i]
    .replace(/[0-9]/g, "")
    .replace(/(?:https?|ftp):\/\/[\n\S]+/g, "")
    .replace(/[/.,?!:;&()"'%@|]/g, "")

    .toLowerCase()
    .replace(/\n/g, " ")
    .replace(/-/g, "")
    .replace(/_/g, "")
    .split(" ");
    
    for(var j = 0; j < temp.length; j++){
        var stopword = stopwords.includes(temp[j]);
        if(stopword){
            temp[j] = "";
        }
        if(temp[j] != ""){

            words.push(temp[j]);
        }

    }
}

const map = words.reduce((acc, word) => {

    let count = acc.get(word) || 0;
    acc.set(word, ++count)
    return acc;
  }, new Map());
  // Sort by counter first from higher to lower. If counter is the same,
  // then sort by alphabetical order
  const topk = [...map].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  // Return array of k most frequent words
   
    msg.payload = topk.slice(0, 20);
    //.map(item => item[0]);
    
    var loc_object = []; 
    //.map(item => item[0]);
    for(var i = 0; i < msg.payload.length; i++){
        loc_object[i] = {"x": msg.payload[i][0], "value": msg.payload[i][1]};
        
    }



msg.payload = loc_object;




//msg.payload = words
return msg;




