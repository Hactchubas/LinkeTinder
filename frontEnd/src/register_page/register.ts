import { Manager } from "./main.js";
import { Candidate, Contractor, Job} from "./users.js";
const manager : Manager = new Manager()


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
                                        <h4 class="job_title">${title}</h4>
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
    $('.remove_job').on('click',function() {
        $(this)
            .parent()
            .parent()
            .remove()
    })

    $('.add_skill_contractor').on('click', function(){
        let jobId : number = $(this).data("id")
        let skill : string | number | string[] | undefined 
        skill = $(`.skill_to_add_job_${jobId}`).val()
    
        let newSkillHtml : string =`<span class="skill_contractor">
                                        <p class="required_skill">${skill}</p>
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
                                    <p class="skill">${skill}</p>
                                    <button class="remove_skill" type="button">
                                        Remove
                                    </button>
                                </span>`

    $('#skills').append(newSkillHtml)
    $('.remove_skill').on('click', function(){        
        $(this).parent().remove()
    })
})

$("#submit_registration").on("click", function(){
    let type : string | number | string[] | undefined
    type = $('input[name = "user_type"]:checked').val();
    if(type === "Candidate"){
        registerCandidate()
    }  else if(type === "Contractor"){
        registerContractor()
    }
})

function registerCandidate(): void{
    
    const name = String($("#register_name").val())
    const birthDate = new Date(String($("#register_birthDate").val()))
    const phone = Number($("#register_phone").val())
    const local = String($("#register_local").val())
    const description = String($("#register_description").val())
    const email = String($("#register_e-mail").val())
    const password = String($("#register_password").val())

    const skills : string[] = []
    $(".skill").each(function(){
        skills.push($(this).text())
    })

    
    const newCandidate : Candidate = new Candidate(name,birthDate,phone,local,description,email, password, skills)
    
    manager.addAndSaveCandidate(newCandidate)
       
}

function registerContractor(): void{
    const name = String($("#register_name").val())
    const birthDate = new Date(String($("#register_birthDate").val()))
    const phone = Number($("#register_phone").val())
    const local = String($("#register_local").val())
    const description = String($("#register_description").val())
    const email = String($("#register_e-mail").val())
    const password = String($("#register_password").val())

    const jobs : Job[] = []
    let job : Job
    $(".job").each(function(){
        let title : string = ''
        $(this).find('job_title').each(function(){
            title = $(this).text()            
        })
        console.log(title);
        
        const requiredSkills : string[] = []
        $(this).find('.required_skill').each(function(){
            requiredSkills.push($(this).text())            
        })
        job = new Job(title, requiredSkills)
        jobs.push(job)
    })

    const newContractor : Contractor = new Contractor(name,birthDate,phone,local,description,email, password, jobs)
    
    manager.addAndSaveContractor(newContractor)
       
}

