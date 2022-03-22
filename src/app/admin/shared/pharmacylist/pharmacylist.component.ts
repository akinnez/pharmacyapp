import { Component, OnInit } from '@angular/core';
import { PharmacyServiceService } from '../../services/pharmacyService/pharmacy-service.service';

@Component({
  selector: 'pharmacylist',
  templateUrl: './pharmacylist.component.html',
  styleUrls: ['./pharmacylist.component.scss']
})
export class PharmacylistComponent implements OnInit {
medlist:any
imgPix = 20
  constructor(private medicinelist:PharmacyServiceService) { }

  ngOnInit(): void {
    this.medlist = this.medicinelist.medlist
  }

}
