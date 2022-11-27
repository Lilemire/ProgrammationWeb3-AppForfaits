import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-fiche-forfait',
  templateUrl: './fiche-forfait.component.html',
  styleUrls: ['./fiche-forfait.component.css']
})
export class FicheForfaitComponent implements OnInit {
  @Input() forfait?: Forfait;

  constructor() { }

  ngOnInit(): void {
  }

}
