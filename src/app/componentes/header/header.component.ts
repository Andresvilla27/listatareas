import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'Lista de Tareas';
  showAddTask: boolean = true;
  subscription?: Subscription;
  
  constructor(
    private uiService: UiService,
    private router: Router
   ) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(router: string){
    return this.router.url === router
  }
}
