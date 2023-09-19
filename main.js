const choice = (arr) => arr[Math.random() * arr.length | 0];

String.prototype.format = function(...params) {
  return this.replace(/{(\d+)}/g, (match, i) => !params[i] ? match : params[i]);
};

const getCurrentYear = (mode = "full") => {
  let year = String(new Date().getUTCFullYear());
  return mode == "short" ? ["year", year.slice(2)].join(" ") : year;
}

const adj = ["Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even","Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Square", "Steep", "Straight", "Thick", "Thin", "Cooing", "Deafening", "Faint", "Harsh", "High-pitched", "Hissing", "Hushed", "Husky", "Loud", "Melodic", "Moaning", "Mute", "Noisy", "Purring", "Quiet", "Raspy", "Screeching", "Shrill", "Silent", "Soft", "Squeaky", "Squealing", "Thundering", "Voiceless", "Whispering"];
const object = ["ProjectMaster", "TopicMaster", "CommittedLearner", "BrilliantMind", "HelpingHand", "SweetHeart", "Benefactor", "BountyHunter", "HintsNerd", "CommentHintNoMatter", "SpamCommentor", "SelfSolutionPraiser", "NoPythonDeveloper", "OneLiner", "JavaStreamer", "EverywhereCoolWriter", "SelfUpVoter", "DescriptionNonUnderstander", "GoPointer", "SQLrowAffector", "DjangoSavior", "FlaskWrapper", "HTMLhacker", "CSSteamLeader", "JSobjecter", "KotlinCompiler", "ImpicitCaster", "ExplicitCopyPastor", "BitwiseOperator", "BinaryMathematician"];


const botName = [adj, object].map(arr => choice(arr)).join("");
const creationYear = getCurrentYear();

console.log("Hello! My name is {0}.\nI was created in {1}.".format(botName, creationYear));
