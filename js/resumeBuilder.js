var bio = {
	"name": "Nathan Acosta",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "hello@nathanacosta.com",
		"github": "logic0verflow",
		"location": "Albuquerque, NM 87108"
	},
	"biopic": "images/portrait.jpeg",
	"welcomeMessage": "Hello and welcome to my online resume page!",
	"skills": ["Python", "HTML/CSS/Javascript", "Linux"]
};

bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedName, formattedRole);
	$("#topContacts, #footerContacts").append(formattedLocation, formattedGithub, formattedEmail, formattedMobile);
	$("#header").append(formattedBioPic, formattedWelcomeMsg);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		bio.skills.forEach(function(element) {
			$("#skills").append(HTMLskills.replace("%data%", element));
		});
	}
};

var work = {
	"jobs": [
		{
			"title": "Technical Analyst 2",
			"employer": "University of New Mexico",
			"dates": "2015 - present",
			"location": "Albuquerque, NM 87106",
			"description": "Develop new UNM webpages as well as update and maintain existing websites. Integrate and utilize automation tools such as SCCM to ensure workstations are maintained to meet university standards."
		},{
			"title": "Systems Analyst 1",
			"employer": "University of New Mexico",
			"dates": "2012 - 2015",
			"location": "Albuquerque, NM 87106",
			"description": "Use UNM's active directory and group policy tools to manage campus workstations and servers. Develop ISS IT responsive webpage so customers can submit work request on mobile devices."
		}
	]
};

work.display = function () {
	for (var i = 0; i < work.jobs.length; i++) {
		var currJob = work.jobs[i];

		var formattedEmployer = HTMLworkEmployer.replace("%data%", currJob.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", currJob.title);
		var formattedDates = HTMLworkDates.replace("%data%", currJob.dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", currJob.location);
		var formattedDescription = HTMLworkDescription.replace("%data%", currJob.description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates, formattedLocation, formattedDescription);
	}
};

var education = {
	schools: [
		{
			"name": "University of New Mexico",
			"dates": "2008-2016",
			"location": "Albuquerque, NM 87106",
			"degree": "Bachelor of Science in Computer Science",
			"majors": ["Computer Science"],
		}
	],

	onlineCourses: [
		{
			"title": "Udacity - Free Online Classes &amp; Nanodegrees",
			"dates": "2017-present",
			"url": "https://www.udacity.com/",
			"school": "Front-End Web Developer Nanodegree Program"
		}
	]
};

education.display = function () {
	// School variables
	var formattedName, formattedDates, formattedLocation, formattedDegree, formattedMajors;

	// Online Courses Variables
	var currCourse;
	var formattedTitle, formattedURL, formattedSchool;

	var i;
	for (i = 0; i < education.schools.length; i++) {
		currSchool = education.schools[i];

		formattedName = HTMLschoolName.replace("%data%", currSchool.name);
		formattedDates = HTMLschoolDates.replace("%data%", currSchool.dates);
		formattedLocation = HTMLschoolLocation.replace("%data%", currSchool.location);
		formattedDegree = HTMLschoolDegree.replace("%data%", currSchool.degree);
		formattedMajors = HTMLschoolMajor.replace("%data%", currSchool.majors);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates, formattedLocation, formattedMajors);
	}

	for (i = 0; i < education.onlineCourses.length; i++) {
		currCourse = education.onlineCourses[i];

		formattedTitle = HTMLonlineTitle.replace('%data%', currCourse.title);
		formattedDates = HTMLonlineDates.replace('%data%', currCourse.dates);
		formattedURL = HTMLonlineURL.replace('%data%', currCourse.url);
		formattedSchool = HTMLonlineSchool.replace('%data%', currCourse.school);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedTitle + formattedSchool);
		$(".education-entry:last").append(formattedDates, formattedURL);
		$(".education-entry:last").find('a:last').attr('href', currCourse.url);
	}
};

var projects = {
	"projects": [
		{
			"title": "Rocky Mountain APPA",
			"dates": "2016",
			"description": "Build new website using WordPress.",
			"images": [
				"images/rma_home-300_exsm.jpeg",
				"images/rma_news-300_exsm.jpg"
			],
			"URL": "http://rma.appa.org"

		},{
			"title": "Institutional Support Services Information Technologies",
			"dates": "2015",
			"description": "Build new responsive website using Bootstrap where customers can find information about department and submit work request.",
			"images": [
				"images/issit_home-300_exsm.jpeg",
				"images/issit_request-300_exsm.jpg"
			],
			"URL": "https://issit.unm.edu"
		}
	]
};

projects.display = function () {
	for (var i = 0; i < projects.projects.length; i++) {
		var currProject = projects.projects[i];

		var formattedTitle = HTMLprojectTitle.replace("%data%", currProject.title);
		var formattedDates = HTMLprojectDates.replace("%data%", currProject.dates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", currProject.description);

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle, formattedDates, formattedDesc);

		for (var j = 0; j < currProject.images.length; j++) 	{
			var formattedImage = HTMLprojectImage.replace("%data%", currProject.images[j]);
			$(".project-entry:last").append(formattedImage);
		}

		$(".project-entry:last").find("a").attr("href", currProject.URL);
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

// Internationalizes the name in the header by making all the characters in the last name uppercase
function inName(name) {
	var names = name.split(" ");
	names[1] = names[1].toUpperCase();
	names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
	return names.join(" ");
}

$("#mapDiv").append(googleMap);

$('.project-entry').find('img').addClass('img-responsive');