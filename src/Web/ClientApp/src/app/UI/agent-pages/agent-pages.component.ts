import { Component } from '@angular/core';
import {MatTableModule} from "@angular/material/table";

export interface PeriodicElement {
    index: number;
    type: string;
    position: number;
    addres: number;
    phone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1,index: 1, type: 'Hydrogen', addres: 1.0079, phone: 'H'},
    {position: 2,index: 2, type: 'Helium', addres: 4.0026, phone: 'He'},
    {position: 3,index: 3, type: 'Lithium', addres: 6.941, phone: 'Li'},
    {position: 4,index: 4, type: 'Beryllium', addres: 9.0122, phone: 'Be'},
    {position: 5,index: 5, type: 'Boron', addres: 10.811, phone: 'B'},
    {position: 6,index: 6, type: 'Carbon', addres: 12.0107, phone: 'C'},
    {position: 7,index: 7, type: 'Nitrogen', addres: 14.0067, phone: 'N'},
    {position: 8,index: 8, type: 'Oxygen', addres: 15.9994, phone: 'O'},
    {position: 9,index: 9, type: 'Fluorine', addres: 18.9984, phone: 'F'},
    {position: 10,index: 10, type: 'Neon', addres: 20.1797, phone: 'Ne'},
];

@Component({
    selector: 'app-agent-pages',
    templateUrl: './agent-pages.component.html',
    styleUrls: ['./agent-pages.component.css'],

})
export class AgentPagesComponent {
    displayedColumns: string[] = ['position','index', 'type', 'addres', 'phone', 'action'];
    dataSource = ELEMENT_DATA;
}

