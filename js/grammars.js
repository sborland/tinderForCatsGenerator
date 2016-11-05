 var rawGrammars = {
 	tinderButForCats: {
    
    //*************style formatting**********//
    "bottomimg": ["<img src='images/123.JPG' width=400 /><br>"],
	"topimg": ["<img src='images/321.JPG' width=400 /><br>"],
	"overallstyle": 'style="display:inline-block;background-color:white;padding:20px;width:400px;"',
 	//**************************************//
    
    //Create the cat character's age, name etc
    "setCharacter": [ "[mainCat:#name#][mainCatAge:#age#][mainCatImg:#img#]"],
	"age":["#num#","1#num#"],
    "name": ["#firstSyl##middleSyl.capitalize##lastSyl#"],
    
    //starts the tinder profile at origin with the image of the cat and generates
    //profile at start, starting with age, how far the cat is etc. The actual
    //message starts at 'message'
	"origin": ["<div #overallstyle#> #topimg# #start# #bottomimg#</div>",],
	"start": ["#setCharacter# <div #style#> #mainCatImg#  </div> <h2>#mainCat#,\
    #mainCatAge# </h2> <h4> #number#  #unitsAway#s away, Active #number# #time#s ago </h4><p>#message#  </p>"],
    
	
    "message":["#greet#, #me# #mainCat#. #pickup# #starttopic#"," #pickup# #greet#, #me# #mainCat#. #starttopic#"],
	
	"me": ["I am", "you may call me", "I'm called", "thou shall refer to me as", "bow down to the #adjectives# ", "me name is "],
	"greet": ["Greetings", "Hello","Mee-YOW","Puuuurrrr", "'ello","Hey baby"],
	
	/***Conversation Starters***/
    
    "starttopic" : ["#emojiConvo# #topic.capitalize#. #topicSentence#"],
	
	"topicSentence": ["#continueConvo# #topic#. #topicSentence#", "#continueConvo# #topic#.", " ", "#emojiConvo# #topicSentence#", "#pickup#", "#emojiConvo#"],
    
    "continueConvo": ["Also, have I mentioned that", "Just to let you know,", "Before I fur-get,", "By the way,", "Also,", ],
	
	"topic": ["#hobbiesConvo#","#homeConvo#","#complimentConvo#","#occupationConvo#"],
    
    /***List of all Conversation topics*********/
    
    
    //Conversation about hobbies
	"hobbiesConvo": [" I like #hobbies#", "my hobbies include: #hobbies#", "my favorite pasttimes includes #hobbies#"],
	"hobbies":["#hobby# and #hobbies#", "#hobby#"],
	"hobby":["hanging out at #genName# #location#", "eating my #owner#'s #food#", "sleeping for #number# #time#s","conquering various #location#s",
	"#noun# in the #genName# #location#s", "grooming my #bodyPart#s", "spitting out #adjectives# hairballs", "#noun# with my best furr-iend, #name# the #animal#"  ],
			
	//Conversation about home life
	"homeConvo": ["in my home, we have the most #adjectives# #toy#","I wish to have #color# fur #emoji#", "every #time#, you can see my humans #noun#. It's quite the #negadject# sight", "my #owner# thinks they are the #rank# of the home LOL #emoji#"], 
	
    //Conversation that compliments reader
	"complimentConvo":["any kitty that has a #toy# will drive me wild!", "don't bother if you don't have a #color# #bodyPart# #emojiConvo#","I can tell that you have #adjectives# #bodyPart# #emojiConvo#","you should look at how #adjectives# my #bodyPart#s are #emoji#", "you'll be #noun# once you realize how #adjectives# my #bodyPart#s are", "I only consider cats that have #adjectives# #bodyPart#s like me"],
	
    //Conversation about their "occupation"--More of their fake rank 
    "occupationConvo":["I am #occupation#", "my furr-iends all know me as #occupation#","they call me '#occupation#'","I am very #animal#-like in my behavior"],
	"occupation": [
		"the #rank# of my house",
		"the #adjectives# #rank# of the #genName# #location#",
		"my #owner#'s #rank#",
		
	],
    
    //Generates random bouts of emojis
	"emojiConvo": ["#emoji# #emojiConvo#","#emoji#","#emoji# #emojiConvo#",],
	"emoji": ["&\\#128169;", "&\\#128576;", "&\\#128525;", "&\\#128571;",  "&\\#128568;",  "&\\#128573;", "&\\#12857#num#;", "&\\#12856#num#;",  "&\\#10084;",  "&\\#127864;",  "&\\#128049;",  "&\\#128062;", "&\\#128077;",  "&\\#128081;", "&\\#128140;", "&\\#128145;", "&\\#128166;", "&\\#128#num##num##num#;"],
	
    //A lovely supply of bad cat pick up puns
    "pickup":[
	"Are we in the litter box? Because I'm diggin' mew.",
	"Are you a bag of treats? Because I wanna sample mew.",
    "Are you a cat? because you're purrrrrrfect.",
    "Are you feline the connection between us?",
    "Are you one of them hot cougars that pick up young studs?",
    "Are you part beaver? Because daaaaam.",
    "Baby, we only got 9 lives. Spend them with me?",
    "Baby, you put the T in tuna.",
    "Be mine it's meow or never.",
    "Can I spend all my 9 lives with mew?",
    "Can you take me to the vet, because you just took my breath away.",
    "Cat call me.",
    "Dinner and a mewvie?",
    "Do you live in a corn field? Because I'm stalking mew.",
    "Don't purrcrastnate, just be mine.",
    "Girl you must be the back of my paw cuz I want to lick you constantly.",
    "How you feline? Cause you purrfect, I’m not kitten!",
    "I am feline fine now I have seen mew.",
    "I like you furry much!",
    "I will make you purrrrr!",
    "I'm not high on nip, I'm just intoxicated with mew.",
    "My love for you is like a hairball -- I can't hold it in.",
    "My vet says I'm lacking in vitamin U.",
    "You must have been sleeping in the sun, because you are HOT.",
    "You remind me off a leopard... or a tiger. Either way, I don't mind the claws",
    "Tail me you love me baby!",
    "I hope you're a purramedic, beclawse I've fallen for mew.",
    "I like your cattitude.",
    "You're pawsome",
    "Meow chicka meow meow",
    "Mew complete me."
	],

	
	

    /***items, single words to use to generate***/
    
	"rank":["captain","king","overlord","queen","prince","princess","general","lord","boss",],
	"food":[ "hamburger", "taco","sushi", "pasta","cake","kebab","popsickle","cookie", "brownie","kibble","cupcake","peanut","curry","avagatos"],
	"animal":["cat","dog","tiger","lion","cheetah","rat","mice","bird","duck","cow","horse",],
	"noun": ["purring", "dancing","running","smiling","cheering", "stalking","prancing","sleeping","pooping","grooming","eating","whispering","yelling"],
	"bodyPart":["eye","paw","fur","tail","ear","whisker",],
	"color":["black","white","blue","gray","green","red","purple","orange","violet","yellow","pink","silver","gold","copper",],
	"location": ["ocean","mountain","river","forest","village","canyon","pond","road","street","swamp","cave"],
	"adjectives": ["fluffy","handsome","sexy","hot","lovely","beauti-fur","breath-taking","gorgeous","cool", "purr-ty","purr-fect","claw-some","won-fur-ful"],
	"toy": ["scratcher","ball","catnip","petbed","treat","flyfish","yarnball"],
	"negadject": ["drab","ugly","awkward", "gross","disgusting","pathetic"],
	"time": [
		"second","hour","minute","day","week"
	],
  "owner": ["meowster","housekee-purr","owner","hoomin"],
	
	
    //generates a random name of a location
	"genName":[ "#middleSyl.capitalize##lastSyl#"],    
	"cha": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	"firstSyl": ["Mr. ","Miss ", "Mister ", "#adjectives.capitalize# ", "#rank.capitalize# ", "#noun.capitalize# ", " ", " ", " ", " "],
	"middleSyl": ["#color#", "#animal#","#food#","#location#","#bodyPart#","sun","moon","aura",],
 	"lastSyl": ["#middleSyl#", "#middleSyl#"," "],
	"unitsAway": [
		"mile",
		"kilometer",
		"paw-step",
		"meter"
	],

	"number":["#num#","#num##num#","#num#0"],
	"num":["1","2","3","4","5","6","7","8","9"],
	"imgURL": ["http://loremflickr.com/400/300/cat,kitten,feline?random=#number##cha#"],
 	"img": ["<img src='#imgURL#' width=400 /><br>"],
 	"style": ['style="color:blue;display:inline-block;"'],



 	},
 };