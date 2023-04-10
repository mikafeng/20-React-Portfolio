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
        image: WMW
    },
    {
        title: "Weather Vibes",
        subtitle: "youtube API",
        description: "Website that pairs music with current weather in your city using APIs.",
        image: vibes,
        link: "https://swaguespack.github.io/WeatherVibes/",
    },
    {
        title: "Tech Blog",
        subtitle: "MVC framework",
        description: "A CMS style blog using a MVC framework that revolves around users sharing their thoughts on tech.",
        image: teachBlog,
        link: "https://github.com/mikafeng/14-Tech-Blog",
    },
    {
        title: "Employee Tracker",
        subtitle: "something",
        description: "A command line application using express and inquirer to view, update a employee and dartment databse. ",
        image:employee,
        link: "https://github.com/mikafeng/12-Employee-Tracker",
    },
    {
        title: "JavaScript Quiz",
        subtitle: "something",
        description: "An application testing users on their javascript knowledge. ",
        image: jsQuiz,
        link: "https://github.com/mikafeng/04_Module-Javascript-Quiz",
    },
    {
        title: "Work Day Scheduler",
        subtitle: "something",
        description: "An application allowing users to save tasks and see where in the day they fall relative to the current time.",
        image: work,
        link: "https://github.com/mikafeng/Workday-Scheduler",
    },
]