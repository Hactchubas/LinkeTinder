
import { Candidate, Contractor } from "./users.js"
export class Manager{
    candidates : Candidate[] = []
    contractors : Contractor[] = []

    addAndSaveCandidate(candidate: Candidate): void{
        this.candidates.push(candidate)
        this.saveCandidates()
    }

    saveCandidates(): void{
        const candidates : string = JSON.stringify(this.candidates) 
        localStorage.setItem("candidates", candidates)
    }

    addAndSaveContractor(contractor: Contractor): void{
        this.contractors.push(contractor)
        this.saveContractors()
    }

    saveContractors(): void{
        const contractors : string = JSON.stringify(this.contractors) 
        localStorage.setItem("contractors", contractors)
    }

    
}

