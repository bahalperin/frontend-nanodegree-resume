//Object Definitions
var work = {
    jobs: [
        {
            "employer": "Korda/Nemeth Engineering",
            "title": "Mechanical Engineer",
            "location": "Columbus, OH",
            "dates": "January 2014 - January 2015",
            "description": ["Designed HVAC and plumbing systems for education and healthcare facilities.", "Collaborated with architects and engineers to ensure issues were resolved before construction phase.", "Consistently submitted drawings on time while working on multiple projects with different schedules."]
        },
        {
            "employer": "Honda R&D Americas, Inc.",
            "title": "Underbody Design Engineer",
            "location": "Raymond, OH",
            "dates": "June 2012 - January 2014",
            "description": ["Designed rear bumper beam, front bumper, and grille on future Honda vehicle.", "Worked in multi-functional team comprised of electrical, lighting, reliability, dynamic performance, crash-safety, manufacturing, styling, purchasing, and supplier companies.", "Designed steel, aluminum, and plastic parts using various forming technologies including stamping, rollforming, extrusion, and injection molding; Modeled parts using CATIA V5.", "Worked under tight deadlines to mature part design and issue drawings.", "Calculated part costs for correlation meetings with purchasing and suppliers."]
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Neighborhood Map",
            "dates": "December 2014",
            "description": ["Single-page, responsive application built with Knockout.js framework and hosted on GitHub Pages.", "Developed a full-page map that loads with 20 popular bars and restaurants in Boston, MA.", "User can view recent pictures taken at each location (retrieved by AJAX request to Instagram API)."],
            "images": []
        },
        {
            "title": "Arcade Game",
            "dates": "November 2014",
            "description": ["Clone of the classic game, Frogger. Udacity provided the art assets and game engine.", "Coded player, enemies, and other game entities in JavaScript's object-oriented pseudo-classical style.", "Created enemy subclasses with different movement patterns and sprites (edited art assets in GIMP)."],
            "images": []
        },
        {
        "title": "Duct Sizer",
        "dates": "September 2014",
            "description": ["Created a responsive, single-page application to perform an HVAC engineering calculation.", "Reduced time for repetitive calculation, giving engineers more time to focus on problem-solving."],
    "images": []
        },
        {
            "title": "Website Optimization",
            "dates": "November 2014",
            "description": ["Optimized critical rendering path of existing website to achieve PageSpeed Insights score above 90.", "Eliminated inefficiencies in the website's scroll animation. Site now scrolls at 60 frames per second."],
            "images": []
        },
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
    "picture": "images/fry.jpg"
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
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "October 2014",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Object-Oriented JavaScript",
            "school": "Udacity",
            "dates": "November 2014",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Website Performance Optimization",
            "school": "Udacity",
            "dates": "November 2014",
            "url": "https://www.udacity.com"
        },
        {
            "title": "JavaScript Design Patterns",
            "school": "Udacity",
            "dates": "December 2014",
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

// I think this is easier to read/type than using .replace()
String.prototype.replaceData = function (info, placeholder) {
    placeholder = placeholder || "%data%";
    return this.replace(placeholder, info);
};

// Encapsulated Functions
bio.display = function () {
    var formattedName = HTMLheaderName.replaceData(this.name);
    var formattedRole = HTMLheaderRole.replaceData(this.role);

    $("div.nav").prepend(formattedName + formattedRole);
    $("#nameRole").wrap(containerFluid).wrap("<div class='row' style='padding-top:5px'></div>");

    var formattedWelcome = HTMLWelcomeMsg.replaceData(this.welcomeMessage);

    $(".header-content").prepend(formattedWelcome);
    $(".welcome-message").wrap("<div class='welcome row text-center'></div>");

    for (var contact in this.contacts) {
        var formattedContact = HTMLcontactGeneric.replaceData(this.contacts[contact]);
        formattedContact = formattedContact.replace("%contact%", contact);
        $("#topContacts").append(formattedContact);
    }
};

work.display = function () {
    for (var employ in this.jobs) {
        var job = this.jobs[employ];

        var formattedEmployer = HTMLworkEmployer.replaceData(job.employer);
        var formattedTitle = HTMLworkTitle.replaceData(job.title);
        var formattedLocation = HTMLworkLocation.replaceData(job.location);
        var formattedDates = HTMLworkDates.replaceData(job.dates);
        var formattedDescription = "";
        for (var desc in job.description) {
            formattedDescription += HTMLworkDescription.replaceData(job.description[desc]);
        }

        $(".work-content").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(HTMLworkDescriptionStart);
        $(".work-description:last").append(formattedDescription);
    }
};

projects.display = function () {
    for (var task in this.projects) {
        var project = this.projects[task];

        var formattedTitle = HTMLprojectTitle.replaceData(project.title);
        var formattedDates = HTMLprojectDates.replaceData(project.dates);
        var formattedDescription = "";
        for (var desc in project.description) {
            formattedDescription += HTMLprojectDescription.replaceData(project.description[desc]);
        }
        var formattedImages = "";
        if (project.images.length > 0) {
            for (var image in project.images) {
                formattedImages += HTMLprojectImage.replaceData(project.images[image]);
            }
        }

        $(".project-content").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(HTMLprojectDescriptionStart);
        $(".project-description:last").append(formattedDescription);
        $(".project-entry:last").append(formattedImages);
    }
};

education.display = function () {
    // Show education content
    $(".education-content").append(HTMLschoolStart);
    for (var school in education.schools) {
        var abbrSchool = education.schools[school];

        var formattedName = HTMLschoolName.replaceData(abbrSchool.name);
        var formattedDegree = HTMLschoolDegree.replaceData(abbrSchool.degree);
        var formattedDates = HTMLschoolDates.replaceData(abbrSchool.dates);
        var formattedLocation = HTMLschoolLocation.replaceData(abbrSchool.location);
        var formattedMajors = [];
        if (abbrSchool.majors.length > 0) {
            for (var major in abbrSchool.majors) {
                formattedMajors.push(HTMLschoolMajor.replaceData(abbrSchool.majors[major]));
            }
        }

        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        for (major in formattedMajors) {
            $(".education-entry:last").append(formattedMajors[major]);
        }
    }

    // Show online courses content
    $(".education-content").append(HTMLonlineClasses);
    $(".education-content").append("<div class='container-fluid'</div>");

    var count = 0;
    for (var online in education.onlineCourses) {
        // Add a new row after every 3 courses (each are 4 columns wide)
        if (count === 0) {
            $(".education-content").append("<div class='row education-entry'></div>");
        }
        $(".education-entry:last").append("<div class='col-md-4 online-entry'></div>");
        var course = education.onlineCourses[online];

        var formattedTitle = HTMLonlineTitle.replaceData(course.title);
        var formattedSchool = HTMLonlineSchool.replaceData(course.school);
        var formattedDates = HTMLonlineDates.replaceData(course.dates);
        var formattedUrl = HTMLonlineURL.replace(/%data%/g, course.url);

        $(".online-entry:last").append(formattedTitle + formattedSchool);
        $(".online-entry:last").append(formattedDates);
        $(".online-entry:last").append(formattedUrl);

        count += 1;
        if (count === 3) {
            count = 0;
        }
    }
};

// Invoke functions and append Google Map
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);