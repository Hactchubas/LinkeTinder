package com.menu

import com.userClasses.Candidate
import com.userClasses.Contractor

class Menu {

    Manager manager

    def run() {
        manager = new Manager()

        boolean run = true
        while (run) {
            Scanner scanner = new Scanner(System.in)
            println("""
                Press 1 - To list all Candidates
                Press 2 - To list all Contractors
                Press 3 - To register Candidate
                Press 4 - To register Contractor
                Press 5 - To exit""")

            switch (scanner.nextLine()){
                case '1':
                    def candidates = manager.candidates
                    candidates.each { candidate ->
                        println(candidate)
                    }
                    break
                case '2':
                    def contractors = manager.contractors
                    contractors.each { contractor ->
                        println(contractor)
                    }
                    break
                case '3':
                    def newUserCandidate = handleNewUser("candidate")
                    Candidate newCandidate = new Candidate(name: newUserCandidate[0], skills: newUserCandidate[1])
                    manager.registerCandidate(newCandidate)
                    break
                case '4':
                    def newUserContractor = handleNewUser("company")
                    Contractor newContractor = new Contractor(company: newUserContractor[0], requiredSkills: newUserContractor[1])
                    manager.registerContractor(newContractor)
                    break
                case '5':
                    run = false
                    break
                default:
                    break
            }
        }
    }

    def static handleNewUser(String userType){
        Scanner scanner = new Scanner(System.in)
        println("Please enter the ${userType} name: " )
        String name = scanner.nextLine()
        println("Please enter the skills separeted by commas: ")
        String skills = scanner.nextLine()

        def skillList = skills.split(",")

        [name, skillList]
    }
}
