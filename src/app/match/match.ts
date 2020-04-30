export class Match{
    matchType:string;
    groundName:string;
    oppositeTeam:string;
    dateOfTheMatch:string;

        constructor(matchType:string,groundName:string,oppositeTeam:string,dateOfTheMatch:string){
        this.matchType=matchType;
        this.groundName=groundName;
        this.oppositeTeam=oppositeTeam;
        this.dateOfTheMatch=dateOfTheMatch;    
    }
}