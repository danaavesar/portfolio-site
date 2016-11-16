var mfaProjects = [
	{"#foods-great-adventure-div" : {
		images : [
			"<div><div class='videoWrapper'><iframe src='https://www.youtube.com/embed/5GMHkvlzfDo?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe></div></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot1.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot18.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot31.png'/></div>",

			"<div><img src='img/mfadt/foods-great-adventure/screenshot2.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot3.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot4.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot6.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot10.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot14.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot18.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot19.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot23.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot25.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot27.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot28.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot29.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot31.png'/></div>",
			"<div><img src='img/mfadt/foods-great-adventure/screenshot33.png'/></div>",

			],
		title: "Food's Great Adventure",
		description: "An online interactive journey through the digestion system for kids ages 6-8",
		basics : {"Project site": "<a class='links' href='http://foodsgreatadventure.com' target='_blank'> Project site</a> &nbsp | &nbsp <a href='https://github.com/danaavesar/FoodsGreatAdventure' target='_blank'> Code</a> &nbsp | &nbsp Fall 2014 Major Studio 1 Final Project ", "Built with" : "Built with: Javascript, Jquery, p5.js, CSS, HTML, Sass, PHP, MYSQL", "role":"Illustration, Design, Development, Concept" },
		concept: "I began this project thinking about how I can use technology in order to make learning about science interesting and easy for children. Learning about the human body is fascinating, but it often seems complex and daunting. My goals were to make an educational tool that would encourage curiousity and made learning interactive, engaging, and finally fun.",
		process: "I found inspiration in many children's books, The Magic School Bus, Ipad applications like the ones from Toca Boca, and The Fantastic Flying Books of Mr. Morris Lessmore. I was also inspired by the <a href='https://www.ted.com/talks/mac_barnett_why_a_good_book_is_a_secret_door?language=en' target='_blank' >TED Talk </a> of children's book writer, Mac Barnett, who says that art is the intersection between the truth and lies. </br> This project actually was based off a <a href='http://b.parsons.edu/~avesd617/nutrition_website/' target='_blank'> project I did for my web bootcamp class </a> when I started my Masters degree. I created a web infographic of how nutrients affect our bodies. <img class='process-img' src='img/mfadt/foods-great-adventure/bootcamp-nutrition-website.gif'/>  For Food's Great Adventure I imagined a much more interactive version of a similar infographic. After doing alot of research about the digestion system, I started to sketch out the user flow and brainstorm the metaphors and interactions I can create.  Design mood board: <img class='process-img' src='img/mfadt/foods-great-adventure/sketches/design_inspiration.jpg'/> After illustrating came the challenge of coding. This was one of my first Javascript heavy projects and it was so rewarding to research and learn as I went, in order to make the interactions I dreamt of come to life. After coding came a lot of iterations in which I iterated over the user experience and instruction set. Known problems: many kids like to go out of order, and currently going out of order messes up the instructions for moving forward. This is something I would look forward to iterating upon, as well as adding a back arrow button. ",
		code: "This site was created with Javascript, Jquery, and a few animation tricks. The animations are a combination of animated Gifs, PNG Sequence animations, and SNAP library SVG animations. To create the PNG animations such as the mouth chewing, I illustrated each frame and animated it in After Effects. I then exported the frames as a PNG sequence, and I mapped the mouse movement to each frame in the animation, changing the src attribute of the mouth with each frame. I used the SVG library Snap only for animating the squueze of the sponge and the squeeze of the saliva gland. This library allows you to animate between two different svg paths. For the stomach animation I used p5.js to code the movement of the food and the scissors that follow it. <div class='dragdrop'> </div>",
		category: "Web",
		tags: "web design, front-end web, back-end web, UX/UI design, illustration"
		}
	},
	{"#splaycious-div" : {
			images : [
				"<img src='img/mfadt/splaycious/1.png'>",
				"<img src='img/mfadt/splaycious/2.png'>",
				"<img src='img/mfadt/splaycious/wall.jpg'>",
				"<div><div class='videoWrapper'><iframe src='https://player.vimeo.com/video/167674101?color=ffffff&title=0&byline=0&portrait=0' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>"
			],
			title: "Splaycious",
			description: "An interactive, multimedia installation using ground projection and a Microsoft Kinect, that allows multiple participants to collaboratively compose digital paintings with their body movements",
			basics: {"Project site": "<a class='links' href='http://splaycious.com' target='_blank'> Project site </a> &nbsp | &nbsp <a target='_blank' href='https://github.com/danaavesar/abstract-expressionist/tree/master/pollock-kinect-ofxCv'> Code</a> &nbsp | &nbsp Spring 2016 Thesis 2", "Built with" : "Built with: openFrameworks", "role":"Design, Development, Illustration, Concept" },
			concept: "This project is inspired by the movement of abstract expressionism, in which art represents non tangible concepts such as feelings and experiences. In this installation, people's movements and interactions with each other affect the visual footprints that get 'painted' on the 'canvas'. It was designed for children ages 5-8 as a playful interactive piece that still makes clear the concepts behind the revolutionary abstract expressionist art movement.",
			process: "On my <a target='_blank' href='http://danaavesar-thesis2.tumblr.com/'>process blog </a> you can see some of the prototypes I built that explore this concept of abstract expressionists. Originally I had designed an Ipad app, and then opted for a more kinetic experience that takes advantage of space, inspired by the physical experience of going to a museum to view art. In future iterations, I would like to implement some of the other prototypes I created that create further collaborations between people in the space, such as making shapes together with their movements. </a>",
			code: "This project was developed using a Microsoft Kinect and openFrameworks. It uses blob detection with ofxCV for blob tracking. You can view the code on <a target='_blank' href='https://github.com/danaavesar/abstract-expressionist/tree/master/pollock-kinect-ofxCv'>Github</a>",
			category: "creative-code",
			tags: "installation, creative code, projection"
		}
	},
	{"#Collaborative-painting":{
			images:[
				"<div><div class='videoWrapper'><iframe src='https://player.vimeo.com/video/149797977?color=c9ff23&title=0&byline=0&portrait=0' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>"
			],
			title: "Collaborative Painting",
			description: "A performative multimedia installation in which participants body pose is translated into a 'digital stroke' in a painting.",
			basics: {"Project site": "<a target='_blank' href='https://github.com/danaavesar/of_creativecoding_fall2015_dana_avesar/tree/master/collaborative_painting4-final'> Code</a> &nbsp | &nbsp Fall 2015 Performative Sculpture Final Project ", "Built with" : "Built with: OpenFrameworks and Microsoft Kinect", "role":"Concept, Design, Development"},
			category: "creative-code",
			tags: "installation, creative code, projection"


		}

	},
	{"#3D-pointillism-div":{
			images: [
				"<div><img src='img/mfadt/3d-pointillism/unity1.png'/></div>",
				"<div><img src='img/mfadt/3d-pointillism/unity3.png'/></div>",
				"<div><div class='videoWrapper'><iframe src='https://www.youtube.com/embed/Qetw3JCUlnM?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe></div></div>"

			],
			title:"Experiencing Pointillism",
			description: "A 3D experience of Georges Seurat's painting 'The Channel of Gravelines', in which each color comes on one by one with a physical stroking motion of the user.",
			basics:{
				"Project site": "Spring 2016 Interactie Design for Museums",
				"Built with" : "Built with: Unity, Google Cardboard, and a hacked keyboard", 
				"role":"Group project with Sarah Page, Cathy Sun, Miyeon Kim, and Joy Peng" 
			},
			concept:"For this project, we wanted to experience a painting in 3 dimensions, while also learning about the way that colors function in the technique of Pointillism. We decided that the world starts gets painted color by color, in order to reveal what each color adds to the painting (such as highlights, sunlight, and shadows). We wanted to create some sort of connection between physical and digitial, so we made the user control the world through the physical act of stroking a canvas.",
			process: "In order to accomplish this we hacked a keyboard and created touch points on the canvas that send keyboard letters as inputs to Unity. We then made each letter control a different color that appears in the 3D pointillist world. <iframe width='420' height='315'  src='https://www.youtube.com/embed/0lws691opwA?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe> <img src='img/mfadt/3d-pointillism/canvas-prototype2.png'/> In unity, our first step was to figure out how to use raycasting to populate the 'land' and the 'sea' with different spheres. <img src='img/mfadt/3d-pointillism/raycast.png'/> We then began to randomize the position of the spheres and add colors that immitated the painting. To do this we targeted a specific percentage of the spheres in appropriate locations of the raycast with different colors.<iframe style='margin:auto; display: inherit; margin-top: 5px; margin-bottom: 5px' width='420' height='315'  src='https://www.youtube.com/embed/X-UzzyFkweQ?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>",
			code: "",
			category: "creative-code",
			tags: "unity, physical computing, virtual reality"

		}

	},
	{"#news-site-div":{
			images : [
				"<div><img src='img/mfadt/news-site/topics.jpg'/> </div>",
				"<div><div class='videoWrapper'> <iframe src='https://www.youtube.com/embed/WUl5djJTivA?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe></div> </div>",
				"<div><div class='videoWrapper'><iframe src='https://www.youtube.com/embed/J1rREdyFL78?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe></div>  </div>",
				"<div><div class='videoWrapper'><iframe src='https://www.youtube.com/embed/EvNlNJ7bEng?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe> </div> </div>",
				"<div><img src='img/mfadt/news-site/grammar-rotation.jpg'/> </div>",
				"<div><img src='img/mfadt/news-site/histogram.jpg'/> </div>"
			],
			title: "Parse News",
			description: "A website that finds headlines related to a keyword search and visualizes other related word associations. It searches through the RSS feeds of over 20 international English sources, then visualizes the most commonly used words associated with the keyword.",
			basics: {
				"Project site": "<a class='links' target='_blank'> Project site </a> &nbsp | &nbsp <a href='https://github.com/danaavesar/thesis'> Code</a> &nbsp | &nbsp Fall 2015 Thesis 1",
				"Built with" : "Built with: NodeJS, Javascript, HTML, CSS", 
				"role":"Design, Development, Concept" 
			},
			concept: "This project takes a critical look at word choices in the news. It attempts to bring people's attention to the way different word choices and sentence structure change the context and meaning of a story. For this project I created a functional prototype as well as design prototypes. Part 1 of the functional prototype is a website I built that searches for keywords in headlines, through the recent RSS feeds of over 20 english sources from around the world. It then visualizes words accompanying the search word, placing them in circles with sizes corresponding to the frequency the related word appears in headlines with the search word. This visualization gives the user an idea of what is most being talked about in the news related to the topic. The user can click on the circle and it will display all the headlines in that group, which are about the same topic. In Part 2, the user can click on a headline and replace words with synonyms from the thesaurus. In a comedic way, attention is brought to the fact that word choices change the meaning of a sentence, and can change our perception of the news event. I also created designs for users to select which sources to include in the search from different parts of the world, which can yield interestingly different results revealing hegemonic differences in world views. Additionally I researched how sentence structure in headlines changes the meaning of the story, and designed a visualization in which users can rotate through and compare parts of speech in multiple headlines about the same topic.",
			process: "The process of designing ways to compare headlines involved a lot of trying out possible designs and testing if people found them interesting. I have a <a href='https://http://danaavesar-thesis1.tumblr.com/''> process blog </a> in which I Although each one of my prototypes accomplished something different, overall I feel like there is much more that can be done. I will definitely be continuing my design research in this field.",
			code: "The code involved in my functional prototype was Javascript. I used Ajax to read RSS feeds, and NodeJS in order to implement the keyword analysis with Alchemy API that sorts through the words. I wrote algorithms that search for keywords in the headlines and groups each headline with other headlines that have similar words.",
			category: "Web",
			tags: "front-end web, back-end web, web design, data visualization, UX design"
		}
	},
	{"#computer-sentiment-div":{
			images: [
			"<div><div class='videoWrapper'><iframe src='https://www.youtube.com/embed/SOvp9lsOfCc?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe></div></div>",
				"<div><img src='img/mfadt/computer-sentiment/screen-shot.png'/></div>"
				
			],
			title: "Document Sentiment Visualization",
			description: "This project visualizes the 'negative', 'positive', and 'neutral' sentiment of words in text documents on your computer. The user drags their mouse on the canvas and paints on all the words inside txt documents on their computer. The colors of each word correspond to different sentiments.",
			basics: {
				"Project site": "<a href='https://github.com/danaavesar/thesis'> Code</a> &nbsp | &nbsp Javascript Fall 2015",
				"Built with" : "Built with: Node.js, p5.js, Alchemy API, HTML, CSS", 
				"role":"Design, Development, Concept" 
			},
			concept: " ",
			process: "This project was completed for my Javascript class in which the assignment was to create something using Node js that looks into the file system on your computer. I thought of how to make what seemed like a boring assignment interesting, and thought it would be interesting to visualize the type of text that I have saved on my computer. I used the Alchemy API sentiment analysis, and coupled it with p5.js in order to create an art work that sort of reflected the analysis of documents on my computer.",
			code: "On the back end, Node reads files on the computer and analyzes their sentiment using Alchemy, it then sends the results to the front end, which gets visualized when the user draws on the p5 canvas.",
			category: "Web",
			tags: "front-end web, back-end web, data visualization"

		}
	},
	{"#bottle-it-up-div":{
			images: [
				"<div><div class='videoWrapper'><iframe src='https://www.youtube.com/embed/qAKPweaPNmQ?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe></div></div>"
			],
			title: "Bottle it Up",
			description: "An interactive bottle for people to record, listen, and share stories.",
			basics: {
				"Project site": "<a target='_blank' href='https://github.com/danaavesar/bottle'> Code</a> &nbsp | &nbsp Physical Computing Spring 2015",
				"Built with" : "Built with: Arduino, Processing", 
				"role":"Partner project with Si Ping Lim" 
			},
			concept: " Social media has become an impersonal way to publicly share our thoughts. In a crowded city like New York where we physically walk by hundreds of people every day, how can we engage the people of the city to share a part of themselves on a more intimiate level? ",
			process: "<img src='img/mfadt/bottle-it-up/concept.jpg'/> <img src='img/mfadt/bottle-it-up/schematic.png'/> ",
			code: "Arduino and Processing",
			category: "creative-code",
			tags: "physical computing"
		}
	},
	{"#earthquake-visualization-div":{
			images: [
				"<div><div class='videoWrapper'><iframe src='https://www.youtube.com/embed/S4jBII7jb_Y?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe> </div> </div>"
			],
			title: "Earthquake Data Vis",
			description:"An interactive data visualization of earthquakes around the world from the past 30 days.",
			basics:{
				"Project site": "<a href='https://github.com/danaavesar/earthquake-visualization'> Code</a> &nbsp | &nbsp Data Visualization Spring 2015"
			},
			concept: "This project takes data from <a href='http://earthquake.usgs.gov/earthquakes/feed/v1.0/csv.php'> online </a> and allows the user to change the date of the month and see where there have been earthquakes around the world. It also indicates the magnitude of the earthquake by the amount of rings around each point.",
			process: "",
			code: "",
			category: "creative-code",
			tags: "Processing, data visualization"
		}
	},
	{"#all-about-that-base-div":{
			images: [
				"<div><div class='videoWrapper'><iframe src='https://player.vimeo.com/video/120242050?color=ffffff&title=0&byline=0&portrait=0' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>  </div>"
			],
			title: "All About that Bass",
			description:"A fun animation inspired by New York.",
			basics:{
				"Project site": "Major Studio 1 Fall 2014",
				"Built with" : "Built with: Adobe After Effects", 
				"role":"Illustration, Animation, Concept" 
			},
			concept: "This was part of an assignment called 5x5 in which we were assigned to make one creative project a day",
			process: "",
			code: "",
			category: "video",
			tags: "animation, illustration"
		}

	},
	{"#circle-of-life-div":{
			images: [
				"<div><div class='videoWrapper'><iframe src='https://player.vimeo.com/video/108282634?color=ffffff&title=0&byline=0&portrait=0' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>"
			],
			title: "Circle of Life",
			description:"A stop-motion piece inspired by the beautiful patterns that repeat themselves in nature",
			basics:{
				"Project site": "Major Studio 1 Fall 2014",
				"Built with" : "Built with: A Camera and Adobe Premiere",
				"role":"Photography, Stop Motion, Editing" 
			},
			concept: "This was created for my 5x5 design assignment, in which we had to make one creative project a day. I have always wanted to make a stop motion video so I decided to try it out. :)",
			process: "",
			code: "",
			category: "video",
			tags: "stop motion"
		}
	},
	{"#nyu-stream-trailer-div":{
			images: [
				"<div><div class='videoWrapper'><iframe src='https://player.vimeo.com/video/80089213?color=ffffff&title=0&byline=0&portrait=0' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>"
			],
			title: "NYU Stream Trailer",
			description:"A video for professors and students at New York University to understand how they can use a new resource available for the university community, called NYU Stream",
			basics:{
				"Project site": "New York University technology outreach",
				"Built with" : "Built with: Adobe After Effects",
				"role":"Writing, Animation, Illustration" 
			},
			concept: "I created this video while working at New York University's Information Technology Services. NYU had developed a new streaming video service that wasn't being utilized by staff and students, so as part of the onboarding process I decided to make an easy explanatory video for professors and students that highlights the features of NYU Stream and the ways they can use it.",
			process: "",
			code: "",
			category: "video",
			tags: "animation, motion graphics, illustration, video production"
		}
	}
]