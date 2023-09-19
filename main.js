const input = require('prompt-sync')();

const choice = (arr) => arr[Math.random() * arr.length | 0];

String.prototype.format = function(...params) {
  return this.replace(/{(\d+)}/g, (match, i) => !params[i] ? match : params[i]);
};

const getCurrentYear = (mode = "full") => {
  let year = String(new Date().getUTCFullYear());
  return mode == "short" ? ["year", year.slice(2)].join(" ") : year;
}

const adj = ["Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Square", "Steep", "Straight", "Thick", "Thin", "Cooing", "Deafening", "Faint", "Harsh", "Pitched", "Hissing", "Hushed", "Husky", "Loud", "Melodic", "Moaning", "Mute", "Noisy", "Purring", "Quiet", "Raspy", "Screeching", "Shrill", "Silent", "Soft", "Squeaky", "Squealing", "Thundering", "Voiceless", "Whispering"];
const object = ["ProjectMaster", "TopicMaster", "CommittedLearner", "BrilliantMind", "HelpingHand", "SweetHeart", "Benefactor", "BountyHunter", "HintsNerd", "CommentHintNoMatter", "SpamCommentor", "SelfSolutionPraiser", "NoPythonDeveloper", "OneLiner", "JavaStreamer", "EverywhereCoolWriter", "SelfUpVoter", "DescriptionNonUnderstander", "GoPointer", "SQLrowAffector", "DjangoSavior", "FlaskWrapper", "HTMLhacker", "CSSteamLeader", "JSobjecter", "KotlinCompiler", "ImpicitCaster", "ExplicitCopyPastor", "BitwiseOperator", "BinaryMathematician"];


const botName = [adj, object].map(arr => choice(arr)).join("");
const creationYear = getCurrentYear();

console.log("Hello! My name is {0}.\nI was created in {1}.".format(botName, creationYear));

console.log("Please, remind me your name.");
const userName = input(">> ");

console.log(`What ${"an".slice(0, +!userName + 1)} ${["undefined", "great"][+!!userName]} name you have, ${userName ? userName : "anonymousUser"}!`);


const multipliers = {3: 70, 5: 21, 7: 15}, ageCeil = 105;
const joinLastAnd = (arr) => arr.join(", ").replace(/\,(?=[^,]*$)/, " and");

console.log(`Let me guess your age.\nEnter remainders of dividing your age by ${joinLastAnd(Object.keys(multipliers))}.`);

const userAge = new Array(3).fill()
  .map(_ => input(">> ")).map((el, i) => el * Object.values(multipliers)[i])
  .reduce((acc, x) => acc + x) % ageCeil;

console.log(`Your age is ${userAge}; that's a good time to start programming!`);
