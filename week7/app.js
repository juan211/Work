var slides = [
		


	{
       
		image: "comic1.JPG",

		caption: "I will destroy you! and I will show you no mercy like you showed my grandfather.",
		

	},

	{

		image: "comic2.JPG",

		caption: "No! this cant be I thought I destroyed you",

	},

	{

		image: "comic3.JPG",

		caption: "No matter ill make sure your destroyed this time!",

	},
	{

		image: "comic4.JPG",
		caption: "arggg nooo this cant be happening!",

	}

];

for (var i = 0; i < slides.length; i++) {
	var slide = slides[i];
	var slideElem = document.createElement("div");
	var image = new Image();
	var caption = document.createElement("p");
	image.src = slide.image;
	caption.textContent = slide.caption;
	slideElem.appendChild(image);
	slideElem.appendChild(caption);
	document.body.appendChild(slideElem);
}
