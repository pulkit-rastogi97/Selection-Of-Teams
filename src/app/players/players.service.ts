import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable()
export class PlayersService {
    private players:Player [];
    constructor() { 
        console.log('Proudcts Service!');
        let p1 = new Player(1, "Shikhar Dhawan", "./assets/player_images/p1.png", "Batsman");
        let p2 = new Player(2, "Ravindra Jadeja", "./assets/player_images/p2.png", "All Rounder");
        let p3 = new Player(3, "Rohit Sharma", "./assets/player_images/p3.png", "Batsman");
        let p4 = new Player(4, "Virat Kohli", "./assets/player_images/p4.png","Batsman");
        this.players = new Array<Player>();
        this.players.push(p1);
        this.players.push(p2);
        this.players.push(p3);
        this.players.push(p4);
         
    }
    getPlayers():Array<Player>{
        return this.players;   
    }

}