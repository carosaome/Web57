
function random() {
    
    let course = ['c4e', 'ci', 'web57']
    
    
    let random = Math.floor(Math.random() * course.length)
    let courses = {
        course: course[random]
    }
    return courses
}

module.exports = random