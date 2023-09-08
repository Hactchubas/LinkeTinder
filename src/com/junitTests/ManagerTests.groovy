package com.junitTests

import com.menu.Manager
import com.userClasses.Candidate
import com.userClasses.Contractor
import groovy.test.GroovyAssert

import org.junit.jupiter.api.Test
import static org.junit.jupiter.api.Assertions.*

class ManagerTests extends GroovyAssert{

    @Test
    void testAddNewUserCandidate(){
        // Setup
        Manager manager = new Manager()
        Candidate candidate = new Candidate(name: "Kauã", skills: ["Java", "Python", "PHP", "JavaScript", "MySQL", "Django", "HTML/CSS"])
        int expectedResult = manager.candidates.size() + 1

        //Test
        manager.registerCandidate(candidate)
        int result = manager.candidates.size()

        // Asset
        assertEquals(expectedResult,result)

    }

    @Test
    void testAddNewUserContractor(){
        // Setup
        Manager manager = new Manager()
        Contractor contractor = new Contractor(company: "ZG Soluções", requiredSkills: ["Java", "Python", "PHP", "JavaScript", "MySQL", "Django", "HTML/CSS"])
        int expectedResult = manager.contractors.size() + 1


        //Test
        manager.registerContractor(contractor)
        int result = manager.contractors.size()

        // Asset
        assertEquals(expectedResult,result)

    }
}
