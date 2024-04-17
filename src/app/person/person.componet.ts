import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-person', // nome do componente que sera ultilizado
    templateUrl: './person.component.html' // qual e o html que sera aberto
})

export class PersonComponent{
    @Input() personList: string[] = []
}