package com.junitTests

import com.menu.Manager
import com.userClasses.Candidate
import groovy.test.GroovyAssert

import org.junit.jupiter.api.Test
import static org.junit.jupiter.api.Assertions.*

class ManagerTests extends GroovyAssert{

    @Test
    void testAddNewUserCandidate(){
        // Setup
        Manager manager = new Manager()
        Candidate candidate = new Candidate(name: "Kauã", skills: ["Java", "Python", "PHP", "JavaScript", "MySQL", "Django", "HTML/CSS"])
        manager.registerCandidate(candidate)

        int expectedResult = 6
        int result = manager.candidates.size()

        assertEquals(expectedResult,result)

    }
}
