import { Component, OnInit } from '@angular/core';
import {MatchService} from './match.service';
import {Match} from './match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
  providers: [MatchService]// register service with angular DI at products component
})
export class MatchComponent {

  matches: Array<Match>
    // injected the service instance
  constructor(matchService: MatchService) {
      this.matches = matchService.getMatches();
  }

}
