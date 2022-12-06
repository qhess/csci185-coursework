// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/spring/`;
    courseList = await fetch(url).then(response => response.json());
    displayResults(courseList);
}

function displayResults(courses) {
    // your code here.
    console.log(courses);
    const container = document.querySelector('#results');
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        if (course.Department == 'CSCI') {
            const template = `<section class="course">
    <h3>${course.Code}: ${course.Title}</h3>
    <ul>
        <li>Instructor: ${course.Instructors[0].Name}</li>
        <li>Location: ${course.Location.FullLocation}</li>
        <li>Days: ${course.Days}</li>
    </ul>
</section>`
            container.insertAdjacentHTML('beforeend', template);
        }
    }
}