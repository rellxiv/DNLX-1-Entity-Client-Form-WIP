import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entityfr } from './models/entity-fr'
import { EntityFrService } from './services/entity-fr.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Entityfr.UI';
  entities: Entityfr[] = [];

  constructor(private entityfrService: EntityFrService) {}

  ngOnInit() : void {
    this.entityfrService.getEntities()
    .subscribe((result: Entityfr[]) => (this.entities = result));
    console.log(this.entities)
  }

}
