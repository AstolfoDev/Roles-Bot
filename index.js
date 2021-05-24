const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.ALL] });

const chID = "846456675186901055";
const msgID = "846469778268356636";

const roles = {
  "st": {
    "pvt": "835942273862729779",
    "nco": "835942180992319569",
    "co": "835942031746400336",
    "cmdr": "835941978923204628"
  },
  
  "501st": {
    "pvt": "835920727567499324",
    "nco": "835920550907740191",
    "co": "835920441582288906",
    "cmdr": "835920346465042433"
  },
  
  "shk": {
    "pvt": "835921860662919198",
    "nco": "835921736436154388",
    "co": "835921621863891045",
    "cmdr": "835921522291113995"
  },
  
  "224th": {
    "pvt": "835924950426320896",
    "nco": "835924827457978368",
    "co": "835924767852068904",
    "cmdr": "835924706745122887"
  },
  
  "medics": {
    "pvt": "835935226105430087",
    "nco": "835935012967809094",
    "co": "835934842944094228",
    "cmdr": "835934619429371955"
  },
  
  
  
  "sfc": {
    "pvt": "835927025767546910",
    "nco": "835926789259132948",
    "co": "835926535248412742",
    "cmdr": "835926403719233536"
  },
  
  "eng": {
    "pvt": "835922271078973512",
    "nco": "835922202204700672",
    "co": "835922140712140800",
    "cmdr": "835922050191065099"
  },
  
  "navy": {
    "pvt": "835918913001881620",
    "nco": "835918875748466698",
    "co": "835918801911676938",
    "cmdr": "835918760611020820",
    "ihc": "835918707070992416"
  },
  
  
  "isb": {
    "pvt": "835918605735952414",
    "nco": "835918557501063229",
    "co": "835918511636217907",
    "cmdr": "835918378296279091"
  },
  
  "dt": {
    "pvt": "835919831798382604",
    "nco": "835919767785177098",
    "co": "835919461893799967",
    "cmdr": "835919273330999326"
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.get(chID).messages.fetch(msgID);
});

client.on('messageReactionAdd', async (reaction, user) => {

	if (reaction.partial) {
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			return;
		}
	}
	
	if (reaction.message.id != msgID) return;
	
	let reg;
	let gm;
	
	switch (reaction.emoji.name) {
	    
	    // Army
	    
	    case "🤍": // Stormtroopers
	        reg = reaction.message.guild.roles.cache.get(roles["st"]["pvt"]);
	        
	        gm = reaction.message.guild.members.cache.get(user.id);
	     
	        if (gm.roles.cache.has(reg)) return;
	        gm.roles.add(reg);
	        
	        break;
	    case "💙": // 501st
	        reg = reaction.message.guild.roles.cache.get(roles["501st"]["pvt"]);
	        
	        gm = reaction.message.guild.members.cache.get(user.id);
	     
	        if (gm.roles.cache.has(reg)) return;
	        gm.roles.add(reg);
	        
	        break;
	    case "❤️": // Shock
	        reg = reaction.message.guild.roles.cache.get(roles["shk"]["pvt"]);
	        
	        gm = reaction.message.guild.members.cache.get(user.id);
	     
	        if (gm.roles.cache.has(reg)) return;
	        gm.roles.add(reg);
	        break;
	    case "🧡": // 224th
	        reg = reaction.message.guild.roles.cache.get(roles["224th"]["pvt"]);
	        
	        gm = reaction.message.guild.members.cache.get(user.id);
	     
	        if (gm.roles.cache.has(reg)) return;
	        gm.roles.add(reg);
	        break;
	    case "💚": // Medics
	        reg = reaction.message.guild.roles.cache.get(roles["medics"]["pvt"]);
	        
	        gm = reaction.message.guild.members.cache.get(user.id);
	     
	        if (gm.roles.cache.has(reg)) return;
	        gm.roles.add(reg);
	        break;
	        
	   
	    // Navy
	    
	    case "🚀": // SFC
	        reg = reaction.message.guild.roles.cache.get(roles["sfc"]["pvt"]);
	        
	        gm = reaction.message.guild.members.cache.get(user.id);
	     
	        if (gm.roles.cache.has(reg)) return;
	        gm.roles.add(reg);
	        break;
	    case "🔧": // Engineers
	        reg = reaction.message.guild.roles.cache.get(roles["eng"]["pvt"]);
	        
	        gm = reaction.message.guild.members.cache.get(user.id);
	     
	        if (gm.roles.cache.has(reg)) return;
	        gm.roles.add(reg);
	        break;
	    case "⚓": // Navy
	        reg = reaction.message.guild.roles.cache.get(roles["navy"]["pvt"]);
	        
	        gm = reaction.message.guild.members.cache.get(user.id);
	     
	        if (gm.roles.cache.has(reg)) return;
	        gm.roles.add(reg);
	        break;
	        
	        
	    // Intelligence
	    case "🖤": // DT
	        reg = reaction.message.guild.roles.cache.get(roles["dt"]["pvt"]);
	        
	        gm = reaction.message.guild.members.cache.get(user.id);
	     
	        if (gm.roles.cache.has(reg)) return;
	        gm.roles.add(reg);
	        break;
	        
	    /*
	    
	    // Donator
	    
	    case "⚔️": // Knights
	        break;
	    case "♥️": // Charlie Company
	        break;
	        
	   */
	    
	    
	}

});

client.login(process.env.TOKEN);