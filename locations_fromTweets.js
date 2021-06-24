words = [];

places = ['bath',  'birmingham', 'bradford', 'brighton and hove', 'bristol', 'cambridge',  'canterbury', 'carlisle', 'chester', 'chichester', 'coventry', 'derby', 'durham', ' ely ', 'exeter', 'gloucester', 'hereford', 'kingston upon hull', 'lancaster', 'leeds', 'leicester', 'lichfield', 'lincoln', 'liverpool', 'london', 'manchester', 'newcastle upon tyne', 'norwich', 'nottingham', 'oxford', 'peterborough', 'plymouth', 'portsmouth', 'preston', 'ripon', 'salford', 'salisbury', 'sheffield', 'southampton', 'st albans', 'stoke-on-trent', 'sunderland', 'truro', 'wakefield', 'wells', 'westminster', 'winchester', 'wolverhampton', 'worcester', 'york', 'bangor', 'cardiff', 'newport', 'st davids', 'swansea', 'aberdeen', 'dundee', 'edinburgh', 'glasgow', 'inverness', 'stirling', 'armagh', 'belfast', 'londonderry', 'lisburn', 'newry', 'aberdeenshire', 'angus',  'antrim', 'argyll', 'armagh',
'ayrshire',
'banffshire',
'berkshire',
'berwickshire',
'bristol',
'buckinghamshire',
' bute ',
'caithness',
'cambridgeshire',
'cheshire',
 'london' ,
'clackmannanshire',
'clwyd',
'cornwall',
'cumbria',
'derbyshire',
'devon',
'dorset',
'county down',
'dumfriesshire',
'dunbartonshire',
'durham',
'dyfed',
'east lothian',
'east riding of yorkshire',
'east sussex',
'essex',
'fermanagh',
'fife',
'gloucestershire',
'greater london',
'greater manchester',
'gwent',
'gwynedd',
'hampshire',
'herefordshire',
'hertfordshire',
'inverness-shire',
'isle of wight',
'kent',
'kincardineshire',
'kinross-shire',
'kirkcudbrightshire',
'lanarkshire',
'lancashire',
'leicestershire',
'lincolnshire',
'londonderry',
'merseyside',
'mid glamorgan',
'midlothian',
'moray',
'nairnshire',
'norfolk',
'north yorkshire',
'northamptonshire',
'northumberland',
'nottinghamshire',
'orkney',
'oxfordshire',
'peeblesshire',
'perthshire',
'powys',
'renfrewshire',
'ross and cromarty',
'roxburghshire',
'rutland',
'selkirkshire',
'shetland',
'shropshire',
'somerset',
'south glamorgan',
'south yorkshire',
'staffordshire',
'stirlingshire',
'suffolk',
'surrey',
'sutherland',
'tyne and wear',
'tyrone',
'warwickshire',
'west glamorgan',
'west lothian',
'west midlands',
'west sussex',
'west yorkshire',
'wigtownshire',
'wiltshire',
'worcestershire']



for(var i =0; i < msg.payload.length; i++){
    var temp = msg.payload[i]
    .replace(/(?:https?|ftp):\/\/[\n\S]+/g, "")
    .replace(/[/.,?!:;&()" ' |@#]/g, "")
    .toLowerCase()
    .replace(/\n/g, " ");
    //.split(" ");

    for(var j = 0; j < places.length; j++){
        var contains = temp.includes(places[j]);
        if(contains){
            words.push(places[j]);
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
  const top_places = [...map].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  // Return array of k most frequent words
   
    msg.payload = top_places.slice(0, 100);
    var loc_object = []; 
    //.map(item => item[0]);
    for(var i = 0; i < msg.payload.length; i++){
        loc_object[i] = {"x": msg.payload[i][0], "value": msg.payload[i][1]};
        
    }

msg.payload = loc_object;

return msg;
