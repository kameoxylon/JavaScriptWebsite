var bio = {
    "name": "Yitzak Hernandez",
    "role": "Web Developer",
    "contacts": {
        "mobile": "321-297-0484",
        "email": "yitzak.hernandez@gmail.com",
        "github": "kameoxylon",
        "location": "Orlando, FL"
    },
    "welcomeMessage": "Hello and welcome to my online resume!",
    "skills": [
        "C Programming", "HTML5", "CSS3", "JavaScript", "Web Design"
    ],
    "biopic": "images/me.jpg"
};

var education = {
    "schools": [{
        "name": "Valencia College",
        "location": "Orlando, FL",
        "degree": "AA",
        "majors": [
            "Computer Science"
        ],
        "dates": "2014",
        "url": "http://valenciacollege.edu/"
    }, {
        "name": "University of Central Florida",
        "location": "Orlando, FL",
        "degree": "BS",
        "majors": [
            "Computer Science"
        ],
        "dates": "2017",
        "url": "http://www.ucf.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
    }]
};

var work = {
    "jobs": [{
        "employer": "GameStop",
        "title": "Senior Game Advisor",
        "location": "Orlando, FL",
        "dates": "June 2014 - January 2016",
        "description": "Started off as a Game Advisor (store associate) then after one year" +
            " the opportunity arose and I got promoted to Senior Game Advisor (keyholder/manager)" +
            " My responsibilities of late were taking care of customer needs, managing store associates" +
            ", keeping track of inventory, organizing floor items, handling register, and" +
            " opening/closing the store."
    }]

};

var projects = {
    "projects": [{
        "title": "Responsive Images Website",
        "dates": "2016",
        "description": "At Udacity we were given a task to replicate a pdf image into a fully" +
            " responsive website based on the user's viewport and window size. To accomplish this" +
            " I used HTML5 and CSS3. The first image is what you'd see on a desktop, the second image" +
            " is for a tablet and the third for a phone's viewport.",
        "images": [
            "images/responsiveLargeSize.jpg",
            "images/responsiveMediumSize.jpg",
            "images/responsiveSmallSize.jpg"
        ]

    }]
};

$('#main').append(internationalizeButton);
bio.display = function () {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }

    }

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
};

work.display = function () {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function () {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        for (var image = 0; image < projects.projects[project].images.length; image++) {
            var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedProjectImages);
        }
    }
};

education.display = function () {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
        console.log(school);
    }
    for (var online = 0; online < education.onlineCourses.length; online++) {
        console.log(online);
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedCourseTitleSchool = formattedCourseTitle + formattedCourseSchool;
        $(".education-entry:last").append(formattedCourseTitleSchool);
        var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        $(".education-entry:last").append(formattedCourseDates);
        var formattedCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        $(".education-entry:last").append(formattedCourseURL);
    }
};

function view() {
    bio.display();
    work.display();
    projects.display();
    education.display();
}

view();

inName(bio.name);

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[1] + " " + name[0];
}


$("#mapDiv").append(googleMap);


$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});