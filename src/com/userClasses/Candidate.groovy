package com.userClasses

import groovy.transform.ToString


@ToString
class Candidate extends User{

    List<String> skills

    // Create ProfessionalExperience class
    //List<String> professionalExpertises
    // Create Projects class
    //List<String> projects

    String toString() {
        return this.name +
                " | skills = " + skills
    }
}
