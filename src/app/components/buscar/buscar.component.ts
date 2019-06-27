import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
               // tslint:disable-next-line:variable-name
               private _heroesService: HeroesService,
               private router: Router) {

  }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.termino = params.termino
      console.log(params.termino);
      this.heroes = this._heroesService.buscarHeroes(params.termino);
      console.log( this.heroes )
    });
  }

  verHeroe(idx: string) {
    this.router.navigate(['/heroe', idx]);
  }

}
