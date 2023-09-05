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
                Press 2 - To list all contractors
                Press 3 - To exit""")

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
                    run = false
                    break
                default:
                    break
            }
        }
    }
}
