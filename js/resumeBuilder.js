//Object Definitions
var work = {
    jobs: [
        {
            "employer": "Korda/Nemeth Engineering",
            "title": "Mechanical Engineer",
            "location": "Columbus, OH",
            "dates": "January 2014 - Present",
            "description": "A metalloid is a chemical element that has properties in between those of metals and nonmetals. There is no standard definition of a metalloid, nor is there agreement as to which elements are appropriately classified as such. Despite this uncertainty, the term remains in use in chemistry literature. The six commonly recognised metalloids are boron, silicon, germanium, arsenic, antimony and tellurium (pictured). Elements less commonly recognised as metalloids include carbon, aluminium, selenium, polonium and astatine. Typical metalloids have a metallic appearance but are brittle and only fair conductors of electricity. Chemically, they mostly behave as weak nonmetals. They can form alloys with metals. Most of their other properties are intermediate in nature. Metalloids and their compounds are used in alloys, biological agents, flame retardants, glasses, optical storage and optoelectronics, pyrotechnics, semiconductors and electronics. The term metalloid originally referred to nonmetals. Its more recent meaning, as a category of elements with intermediate properties, became widespread in 1940–1960. Metalloids are sometimes called semimetals, a practice that has been discouraged. "
        },
        {
            "employer": "Honda R&D Americas, Inc.",
            "title": "Underbody Design Engineer",
            "location": "Raymond, OH",
            "dates": "June 2012 - January 2014",
            "description": "A metalloid is a chemical element that has properties in between those of metals and nonmetals. There is no standard definition of a metalloid, nor is there agreement as to which elements are appropriately classified as such. Despite this uncertainty, the term remains in use in chemistry literature. The six commonly recognised metalloids are boron, silicon, germanium, arsenic, antimony and tellurium (pictured). Elements less commonly recognised as metalloids include carbon, aluminium, selenium, polonium and astatine. Typical metalloids have a metallic appearance but are brittle and only fair conductors of electricity. Chemically, they mostly behave as weak nonmetals. They can form alloys with metals. Most of their other properties are intermediate in nature. Metalloids and their compounds are used in alloys, biological agents, flame retardants, glasses, optical storage and optoelectronics, pyrotechnics, semiconductors and electronics. The term metalloid originally referred to nonmetals. Its more recent meaning, as a category of elements with intermediate properties, became widespread in 1940–1960. Metalloids are sometimes called semimetals, a practice that has been discouraged. "
        },
        {
            "employer": "Thomas Polise Consulting Engineer PC",
            "title": "Mechanical Engineering Intern",
            "location": "New York, NY",
            "dates": "June 2011 - August 2011",
            "description": "A metalloid is a chemical element that has properties in between those of metals and nonmetals. There is no standard definition of a metalloid, nor is there agreement as to which elements are appropriately classified as such. Despite this uncertainty, the term remains in use in chemistry literature. The six commonly recognised metalloids are boron, silicon, germanium, arsenic, antimony and tellurium (pictured). Elements less commonly recognised as metalloids include carbon, aluminium, selenium, polonium and astatine. Typical metalloids have a metallic appearance but are brittle and only fair conductors of electricity. Chemically, they mostly behave as weak nonmetals. They can form alloys with metals. Most of their other properties are intermediate in nature. Metalloids and their compounds are used in alloys, biological agents, flame retardants, glasses, optical storage and optoelectronics, pyrotechnics, semiconductors and electronics. The term metalloid originally referred to nonmetals. Its more recent meaning, as a category of elements with intermediate properties, became widespread in 1940–1960. Metalloids are sometimes called semimetals, a practice that has been discouraged. "
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Duct Sizer",
            "dates": "September 2014 - October 2014",
            "description": "Web application for sizing ducts.  Meant to replace cardboard duct calculators.",
            "images": []
        }
    ]
};

var bio = {
    "name": "Ben Halperin",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my resume!",
    "contacts": {
        "mobile": "(973) 632-2763",
        "email": "bahalperin@gmail.com",
        "github": "bahalps",
        "location": "Columbus, OH"
    },
    "skills": ["HTML", "CSS", "Javascript", "Python"],
    "picture": "http://placepuppy.it/100/100"
};

var education = {
    "schools": [
        {
            "name": "Washington University in St. Louis",
            "location": "St. Louis, MO",
            "degree": "BS",
            "majors": ["Mechanical Engineering"],
            "dates": "2008 - 2012",
            "url": "wustl.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": "May 2014 - June 2014",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Intro to HTML & CSS",
            "school": "Udacity",
            "dates": "October 2014",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Python Track",
            "school": "Codecademy",
            "dates": "April 2014",
            "url": "http://www.codecademy.com"
        },
        {
            "title": "HTML & CSS Track",
            "school": "Codecademy",
            "dates": "September 2014",
            "url": "http://www.codecademy.com"
        },
        {
            "title": "JavaScript Track",
            "school": "Codecademy",
            "dates": "September 2014",
            "url": "http://www.codecademy.com"
        }
    ]
};

String.prototype.replaceData = function (info, placeholder) {
    placeholder = placeholder || "%data%";
    return this.replace(placeholder, info);
};

//Encapsulated Functions
bio.display = function () {
    var nameRole = "{" + this.name + ": " + this.role + "}";

    $(".navbar-brand").html(nameRole);

    var formattedWelcome = HTMLWelcomeMsg.replaceData(this.welcomeMessage);

    $("header").append(formattedWelcome);

    var formattedPicture = HTMLbioPic.replaceData(this.picture);

    $("header").append(formattedPicture);

    if (this.skills.length !== 0) {
        $("header").append(HTMLskillsStart);
        for (var skill in this.skills) {
            var formattedSkill = HTMLskills.replaceData(bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }

    var abbrContacts = this.contacts;

    var formattedMobile = HTMLmobile.replaceData(abbrContacts.mobile);
    var formattedEmail = HTMLemail.replaceData(abbrContacts.email);
    var formattedGithub = HTMLgithub.replaceData(abbrContacts.github);
    var formattedLocation = HTMLlocation.replaceData(abbrContacts.location);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
};


work.display = function () {
    for (var job in this.jobs) {
        var abbrJob = this.jobs[job];

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replaceData(abbrJob.employer);
        var formattedTitle = HTMLworkTitle.replaceData(abbrJob.title);
        var formattedLocation = HTMLworkLocation.replaceData(abbrJob.location);
        var formattedDates = HTMLworkDates.replaceData(abbrJob.dates);
        var formattedDescription = HTMLworkDescription.replaceData(abbrJob.description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};



projects.display = function () {
    $("#projects").append(HTMLprojectStart);
    for (var project in this.projects) {
        var abbrProjects = this.projects[project];

        var formattedTitle = HTMLprojectTitle.replaceData(abbrProjects.title);
        var formattedDates = HTMLprojectDates.replaceData(abbrProjects.dates);
        var formattedDescription = HTMLprojectDescription.replaceData(abbrProjects.description);
        var formattedImages = [];
        if (abbrProjects.images.length > 0) {
            for (var image in abbrProjects.images) {
                formattedImages.push(HTMLprojectImage.replaceData(abbrProjects.images[image]))
            }
        }

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        for (var image in formattedImages) {
            $(".project-entry:last").append(formattedImages[image]);
        }
    }
};





education.displaySchools = function () {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        var abbrSchool = education.schools[school];

        var formattedName = HTMLschoolName.replaceData(abbrSchool.name);
        var formattedDegree = HTMLschoolDegree.replaceData(abbrSchool.degree);
        var formattedDates = HTMLschoolDates.replaceData(abbrSchool.dates);
        var formattedLocation = HTMLschoolLocation.replaceData(abbrSchool.location);
        var formattedMajors = [];

        if (abbrSchool.majors.length > 0) {
            for (var major in abbrSchool.majors) {
                formattedMajors.push(HTMLschoolMajor.replaceData(abbrSchool.majors[major]))
            }
        }

        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);

        for (major in formattedMajors) {
            $(".education-entry:last").append(formattedMajors[major]);
        }
    }
};

bio.display();
work.display();
projects.display();
education.displaySchools();

$("#mapDiv").append(googleMap);