import { Component } from '@angular/core';
import {MatTableModule} from "@angular/material/table";

export interface PeriodicElement {
    index: number;
    type: string;
    price:number;
    name:string;
    position: number;
    addres: string;
    phone: string;
    email:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1,index: 1, type: 'Վարձով',price:500 , name: "Լիաննա",addres:"Սայաթ Նովա 5", phone: '044-12-54-77',email:"liannaayvazyan@gmail.com"},
    {position: 2,index: 2, type: 'Վաճառք',price:85000 , name: "Արամ",addres:"Մարշալ Բաղրամյան 54", phone: '077-32-54-17',email:"Aramarzumanyan@gmail.com"},
    {position: 3,index: 3, type: 'Վաճառք',price:75000 , name: "Աշոտ",addres:"Զորավար Անդրանիկ 89", phone: '066-66-66-66',email:"Ashotghazaryan@gmail.com"},
    {position: 4,index: 4, type: 'Վարձով',price:1500 , name: "Կարինե",addres:"Սայաթ Նովա 37", phone: '014-19-03-77',email:"Karinearzumanyan@gmail.com"},
    {position: 5,index: 5, type: 'Վարձով',price:500 , name: "Մանվել",addres:"Գուսան Շերամի 77", phone: '077-77-77-77',email:"Manvelhayrapetyan@gmail.com"},
    {position: 6,index: 6, type: 'Վաճառք',price:355000 , name: "Նունե",addres:"Կեչառեցու 32", phone: '056-12-34-56',email:"Nunemeliqyan@gmail.com"},

];

@Component({
    selector: 'app-agent-pages',
    templateUrl: './agent-pages.component.html',
    styleUrls: ['./agent-pages.component.css'],

})
export class AgentPagesComponent {
    displayedColumns: string[] = ['position','index', 'type','price', 'addres', 'name', 'phone','email', 'action'];
    dataSource = ELEMENT_DATA;
}

