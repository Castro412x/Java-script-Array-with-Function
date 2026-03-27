function subjectlength(){
    let subjects = ["Maths", "English", "Science", "History", "Civic",]
    for(i = 0; i < subjects.length; i++){
        if(subjects[i].length > 5){
            console.log(subjects[i])
        }
    }
}
subjectlength()