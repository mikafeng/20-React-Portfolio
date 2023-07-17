import WMW from "./assets/WMW.png"
import teachBlog from "./assets/teachBlog.png"
import vibes from "./assets/vibes.png"
import employee from "./assets/employee-tracker.png"
import jsQuiz from "./assets/jsQuiz.png"
import work from "./assets/work.png"

export const projects = [
    {
        title:"Where's My Wings",
        subtitle:"MVC, MySQL",
        description:"Where's My Wings is an application designed to locate the best chicken wings locations and food trucks in the Atlanta area.",
        link: "https://wheres-my-wings.herokuapp.com/",
        repository: "https://github.com/mikafeng/Wheres-My-Wings",
        image: WMW
    },
    {
        title: "Weather Vibes",
        subtitle: "youtube API",
        description: "Website that pairs music with current weather in your city using APIs.",
        image: vibes,
        link: "https://swaguespack.github.io/WeatherVibes/",
        repository: "https://github.com/mikafeng/WeatherVibes",
    },
    {
        title: "Tech Blog",
        subtitle: "MVC framework",
        description: "A CMS style blog using a MVC framework that revolves around users sharing their thoughts on tech.",
        image: teachBlog,
        link: "",
        repository: "https://github.com/mikafeng/14-Tech-Blog",
    },
    {
        title: "Password Generator",
        subtitle: "front-end javascript web application",
        description: "A web application that allows a user to generate a random password following a series of prompts. Users are able to choose whether or not the password will include special characters, numbers, lowercase and uppercase alphabetical characters as well as the length of the password.",
        image:employee,
        link: "https://mikafeng.github.io/Password-Generator/",
        repository: "https://github.com/mikafeng/Password-Generator",
    },
    {
        title: "JavaScript Quiz",
        subtitle: "front-end javascript web application",
        description: "An application testing users on their javascript knowledge.",
        image: jsQuiz,
        link: "https://mikafeng.github.io/04_Module-Javascript-Quiz/",
        repository: "https://github.com/mikafeng/04_Module-Javascript-Quiz",
    },
    {
        title: "Work Day Scheduler",
        subtitle: "front-end javascript web application",
        description: "An application allowing users to save tasks and see where in the day they fall relative to the current time.",
        image: work,
        link: "https://mikafeng.github.io/Workday-Scheduler/",
        repository: "https://github.com/mikafeng/Workday-Scheduler",
    },
]