import { HelperService } from './../helper.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableData : Observable<any>
  sortModel = {
    name : false,
    price : false,
    category : false
  }
  sortSign = {
    name : false,
    price : false,
    category : false
  }

  activeSign :string;
  constructor(private helper : HelperService) { }

  ngOnInit() {
    this.tableData = this.helper.getdata();

  }

  sortBy(type:string, data:Array<any>){
    if(this.activeSign !== type){
      this.sortSign[this.activeSign] = false
    }
    this.sortData(type, data);

    this.disableSort();
    this.sortModel[type]= true;

    this.activeSign = type;
    this.sortSign[type] = !this.sortSign[type]
  }

  sortData(type: string, data:Array<any>) {
    if(this.sortModel[type]){
      data.reverse();
    }else{
      data.sort((a,b) => (a[type] > b[type]) ? 1 : ((b[type] > a[type]) ? -1 : 0))
    }
  }

  disableSort(){
    this.sortModel.category= false;
    this.sortModel.name= false;
    this.sortModel.price = false
  }
}
