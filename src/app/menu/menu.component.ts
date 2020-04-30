import { Component} from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[MenuService]// register with Angular DI
  // Single Instance per provider
})
export class MenuComponent {
 
}
