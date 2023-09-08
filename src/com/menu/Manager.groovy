package com.menu

import com.userClasses.Candidate
import com.userClasses.Contractor

class Manager {
    List<Candidate> candidates = []
    List<Contractor> contractors = []

    Manager(){

        Candidate candidate1 = new Candidate(name:"Jonh",skills:["Python", "Anglar", "React"])
        candidates << candidate1
        Candidate candidate2 = new Candidate(name: "Bob", skills: ["Java", "Django", "MySQL"])
        candidates << candidate2
        Candidate candidate3 = new Candidate(name: "Maicon", skills: ["JavaScript", "SpringBoot", "Laravel"])
        candidates << candidate3
        Candidate candidate4 = new Candidate(name: "James", skills: ["C#", "Dart", "ReactNative"])
        candidates << candidate4
        Candidate candidate5 = new Candidate(name: "Kevin", skills: ["PHP", "Kotlin", "Flutter"])
        candidates << candidate5

        Contractor contractor1 = new Contractor(company: "Isabelle",requiredSkills:["Python", "Django", "SQL"])
        contractors << contractor1
        Contractor contractor2 = new Contractor(company: "Kate", requiredSkills: ["Java", "SpringBoot", "POO"])
        contractors << contractor2
        Contractor contractor3 = new Contractor(company: "Brittney", requiredSkills: ["JavaScript", "NodeJs", "Wordpress"])
        contractors << contractor3
        Contractor contractor4 = new Contractor(company: "Angelina", requiredSkills: ["C#", "Dart", "ReactNative"])
        contractors << contractor4
        Contractor contractor5 = new Contractor(company: "Scarllet", requiredSkills: ["PHP", "Laravel", "PostgreSQL"])
        contractors << contractor5

    }

    void registerCandidate(Candidate newCandidate) {
        candidates << newCandidate
    }

    void registerContractor(Contractor newContractor) {
        contractors << newContractor
    }
}
