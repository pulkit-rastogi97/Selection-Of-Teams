import { Injectable } from '@angular/core';
import { Match } from './match';

@Injectable()
export class MatchService {
    private matches:Match [];

    constructor() { 

        var m1 = new Match("T20","Riverside Ground, Chester-le-Street","Australia","3 July, 2020");
        var m2 = new Match("T20","Old Trafford, Manchester","Australia","5 July, 2020");
        var m3 = new Match("ODI","Sir Vivian Richards Stadium, Antigua","New Zealand","10 July, 2020");
        var m4 = new Match("T20","Sabina Park, Kingston, Jamaica","South Africa","12 August, 2020");

        this.matches = new Array<Match>();
        this.matches.push(m1);
        this.matches.push(m2);
        this.matches.push(m3);
        this.matches.push(m4);
         
    }

    getMatches():Array<Match>{
        return this.matches;   
    }

}