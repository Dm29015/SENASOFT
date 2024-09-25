import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
// import { CommonModule } from '@angular/common';
// import { TableModule } from 'primeng/table';  // Importa PrimeNG TableModule
// import { ButtonModule } from 'primeng/button'; // Importa PrimeNG ButtonModule
// import { InputTextModule } from 'primeng/inputtext';  // Importa InputText para el campo de búsqueda
// import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,
        // CommonModule,
        // TableModule,
        // ButtonModule,
        // InputTextModule,
        // FormsModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}