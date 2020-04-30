import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayersService]// register service with angular DI at products component

})
export class PlayersComponent   {

  players: Array<Player>
    // injected the service instance
  constructor(playersService: PlayersService) {
      this.players = playersService.getPlayers();
  }
 
}
