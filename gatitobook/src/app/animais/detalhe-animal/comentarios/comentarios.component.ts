import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { ComentariosService } from './comentarios.service';

import { Comentarios } from './comentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() public id!: number;
  public comentarios$!: Observable<Comentarios>;
  public comentarioForm!: FormGroup;

  constructor(
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscaComentario(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  public gravar(): void {
    //switchMap == é para inverter o fluxo;
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService.incluiComentario(
      this.id,
      comentario
    ).pipe(
      switchMap(()=> this.comentariosService.buscaComentario(this.id)),
      tap(()=>{
        this.comentarioForm.reset();
        alert("Salvo comentário!");
      })
    )
  }
}
