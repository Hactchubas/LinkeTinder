

$('input[name="user_type"]').on("click", function() {
    let type : string | number | string[] | undefined
    type = $('input[name = "user_type"]:checked').val();
    if(type === "Candidate"){
        $('#skills').show()
        $('#jobs').hide()
    }  else if(type === "Contractor"){
        $('#skills').hide()
        $('#jobs').show()
    }
});

let jobs_counter : number = 0

$('#add_job').on('click', function(){
    let title : string | number | string[] | undefined 
    title = $("#job_title").val()
    jobs_counter++
    let newJobHtml : string =   `<div class="job">
                                    <span>
                                        <h4>${title}</h4>
                                        <button class="remove_job" type="button">Remove</button>
                                    </span>
                                    <hr>
                                    <section class="required_skills">
                                        <h4>Insert here the required skills for this job</h4>
                                        <span>
                                            <input type="text" class="skill_to_add_job_${jobs_counter}">
                                            <button type="button" class="add_skill_contractor" data-id = "${jobs_counter}">Add skill</button>
                                        </span>
                                    </section>
                                </div>`

    $('#jobs').append(newJobHtml)


    $('.add_skill_contractor').on('click', function(){
        let jobId : number = $(this).data("id")
        let skill : string | number | string[] | undefined 
        skill = $(`.skill_to_add_job_${jobId}`).val()
    
        let newSkillHtml : string =`<span class="skill_candidate_contractor">
                                        <p>${skill}</p>
                                        <button class="remove_skill" type="button">
                                            Remove
                                        </button>
                                    </span>`
        console.log("eh");
        
        $(this)
            .parent()
            .parent()
            .append(newSkillHtml)
        $('.remove_skill').on('click', function(){        
            $(this).parent().remove()
        })
    })

})




$('#add_skill_candidate').on('click', function(){
    let skill : string | number | string[] | undefined 
    skill = $('#skill_to_add_candidate').val()

    let newSkillHtml : string =`<span class="skill_candidate">
                                    <p>${skill}</p>
                                    <button class="remove_skill" type="button">
                                        Remove
                                    </button>
                                </span>`

    $('#skills').append(newSkillHtml)
    $('.remove_skill').on('click', function(){        
        $(this).parent().remove()
    })
})

