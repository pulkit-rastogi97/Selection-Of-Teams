import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { MatchComponent } from './match/match.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component : HomeComponent },
  { path: 'players', component: PlayersComponent},
  { path: 'match', component: MatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
