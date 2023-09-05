package com.userClasses

class Contractor extends User{

    String company
    // Create Job class
    List<String> jobs
    List<String> requiredSkills

    String toString() {
        return this.company +
                " | Required skills = " + requiredSkills
    }
}
