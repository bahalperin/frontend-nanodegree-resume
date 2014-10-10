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
        "location": "1360 W 3rd Ave. Apt C, Columbus, OH, 43212"
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

var replaceData = function(html,info) {
    return html.replace("%data%",info);
};

//Encapsulated Functions
bio.displayHeader = function() {
    var formattedName = replaceData(HTMLheaderName,this.name);
    var formattedRole = replaceData(HTMLheaderRole,this.role);
    
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
};

bio.displaySkills = function() {
    if (this.skills.length !== 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill in this.skills) {
            var formattedSkill = replaceData(HTMLskills,bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.displayPicture = function() {
    var formattedPicture = replaceData(HTMLbioPic,this.picture);
    
    $("#header").append(formattedPicture);
};

bio.displayContacts = function() { 
    var abbrContacts = this.contacts;

    var formattedMobile = replaceData(HTMLmobile,abbrContacts.mobile);
    var formattedEmail = replaceData(HTMLemail,abbrContacts.email);
    var formattedGithub = replaceData(HTMLgithub,abbrContacts.github);
    var formattedLocation = replaceData(HTMLlocation,abbrContacts.location);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    
};

bio.displayWelcome = function() {
    var formattedWelcome = replaceData(HTMLWelcomeMsg,this.welcomeMessage);
    
    $("#header").append(formattedWelcome);
};

bio.displayContacts();
bio.displayHeader();
bio.displayPicture();
bio.displayWelcome();
bio.displaySkills();

work.display = function () {
    for (var job in this.jobs) {
        var abbrJob = this.jobs[job];
        
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = replaceData(HTMLworkEmployer,abbrJob.employer);
        var formattedTitle = replaceData(HTMLworkTitle,abbrJob.title);
        var formattedLocation = replaceData(HTMLworkLocation,abbrJob.location);
        var formattedDates = replaceData(HTMLworkDates,abbrJob.dates);
        var formattedDescription = replaceData(HTMLworkDescription,abbrJob.description);
        
        $(".work-entry:last").append(formattedEmployer+formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);   
    }   
};

work.display();
/*
$("#main").append(internationalizeButton);

var inName = function(name) {
    var nameArray = name.trim().split(" ");
    var firstName = nameArray[0];
    var lastName = nameArray[1];
    
    firstName = firstName[0].toUpperCase() + firstName.splice(1).toLowerCase();
    lastName = lastName.toUpperCase();
    
    var finalName = firstName + " " + lastName;
    
    return finalName;
};
*/
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var project in this.projects) {
        var abbrProjects = this.projects[project];
        
        var formattedTitle = replaceData(HTMLprojectTitle,abbrProjects.title);
        var formattedDates = replaceData(HTMLprojectDates,abbrProjects.dates);
        var formattedDescription = replaceData(HTMLprojectDescription,abbrProjects.description);
        var formattedImages = [];
        if (abbrProjects.images.length > 0) {
            for (var image in abbrProjects.images) {
                formattedImages.push(replaceData(HTMLprojectImage,abbrProjects.images[image]))
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

projects.display();



education.displaySchools = function() {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        var abbrSchool = education.schools[school];
        
        var formattedName = replaceData(HTMLschoolName,abbrSchool.name);
        var formattedDegree = replaceData(HTMLschoolDegree,abbrSchool.degree);
        var formattedDates = replaceData(HTMLschoolDates,abbrSchool.dates);
        var formattedLocation = replaceData(HTMLschoolLocation,abbrSchool.location);
        var formattedMajors = [];
        
        if (abbrSchool.majors.length > 0) {
            for (var major in abbrSchool.majors) {
                formattedMajors.push(replaceData(HTMLschoolMajor,abbrSchool.majors[major]))
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

education.displaySchools();

$("#mapDiv").append(googleMap);