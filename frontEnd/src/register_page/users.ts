class User{
    name: string
    birthDate : Date
    phone: number
    local: string
    description: string
    email: string
    password: string
    
    type: string

    constructor(name: string, birthDate: Date, phone: number, local: string, description: string, email: string, password: string, type: string){
        this.name = name
        this.birthDate = birthDate 
        this.phone = phone
        this.local = local
        this.description = description
        this.email = email
        this.password = password
        this.type = type
    }

}

class Candidate extends User{
    skills: string[]

    constructor(
        name: string,
        birthDate: Date,
        phone: number,
        local: string,
        description: string,
        email: string,
        password: string,
        skills: string[]){

        super(name,birthDate,phone,local,description, email, password, "Candidate")
        this.skills = skills
    }
}

class Contractor extends User{
    jobs: Job[]

    constructor(
        name: string,
        birthDate: Date,
        phone: number,
        local: string,
        description: string,
        email: string,
        password: string,
        jobs: Job[]){
            
        super(name,birthDate,phone,local,description, email, password, "Contractor")
        this.jobs = jobs
    }

   
    
}

class Job{
    title : string
    requiredSkills : string[]
    constructor(title: string ,skills: string[]){
        this.title = title
        this.requiredSkills = skills
    }
}

export {Candidate ,Contractor, Job}