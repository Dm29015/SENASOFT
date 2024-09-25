import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ToastrService } from 'ngx-toastr'; // Importa ToastrService

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig, private toastr: ToastrService) { } // Inyecta ToastrService

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}