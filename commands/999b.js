const Discord = require('discord.js')
const SCP_999B = new Discord.MessageEmbed()
	.setColor('#010000')
	.setTitle('SCP-999')
	.setURL('http://www.scp-wiki.net/scp-999')
	.setAuthor('SCP Foundation')
	.setDescription('SCP-999 is released into SCP-682’s containment area. SCP-999 immediately slithers towards SCP-682.\n\n999: (elated gurgles)\n\n682: (unintelligible groans, growling) What is that?\n\nSCP-999 moves in front of SCP-682, jumping up and down in a dog-like manner while calling out in a high-pitched squealing noise.')
	.setThumbnail('https://cdn.discordapp.com/attachments/692738250514890773/713418940734505010/download_7.jpg')
	.addField('\u200b',`682: (groans) Disgusting…\n\nSCP-682 immediately steps on SCP-999, completely flattening SCP-999. Observers were about to abort the experiment when SCP-682 started talking again.`,'\u200b')
	.addField('\u200b',`682: (grunts) Hmmm? (unintelligible) what is this… (low noise, similar to light chuckle) I feel… good…\n\nSCP-999 can be seen crawling up from between SCP-682’s toes, up along its side and around its neck, where it clings on and begins gently nuzzling with its pseudopod.`,'\u200b')
	.addField('\u200b',` A wide grin slowly spreads across SCP-682’s face.\n\n682: (deep chuckling) Feel… so… happy. Happy… (laughs) happy… happy…\n\nSCP-682 repeats the word “happy” for several minutes, laughing occasionally before escalating into nonstop laughter. As laughter continues, SCP-682 rolls around on its back, slamming its tail upon the floor with dangerous force.`,'\u200b')
	.addField('\u200b',`682: (bellowing laughter) Stop! No tickling! (continues laughing)\n\nSCP-682 and SCP-999 continue the “tickle fight” until SCP-682 finally wears down and appears to fall asleep with what would appear to be a smile on its face. After fifteen minutes with no activity, two D-Class personnel enter the room to retrieve SCP-999. When SCP-999 is removed, SCP-682 immediately wakes up and unleashes an unidentifiable wave of energy from its body, all the while laughing maniacally.`,'\u200b')
	.addField('\u200b',`All persons within the wave’s range collapse into crippling fits of laughter, allowing SCP-682 to escape and slaughter all in its path. Meanwhile, SCP-999 quickly rescues as many persons as it can, taking them to a safe place to recover from SCP-682’s "laughter wave" while agents suppress and re-contain SCP-682.`,'\u200b')
	.addField('\u200b',`Despite the tragedy that SCP-682 had brought upon the facility, SCP-999 has not shown any fear towards the creature and in fact has made gestures suggesting it wants to “play” with SCP-682 again. SCP-682, however, has stated, “That feculent little [unintelligible] can [DATA EXPUNGED] and die."`,'\u200b')
	
	.setTimestamp('Foundation Information')






module.exports = {
	name: '999b',
    cooldown: 5,
    description: 'Information on Addendum SCP-999-B',
	execute(message, args) {
		message.channel.send(SCP_999B);
	},
};
