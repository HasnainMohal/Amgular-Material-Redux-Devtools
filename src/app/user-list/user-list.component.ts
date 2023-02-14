import { MatSortModule } from '@angular/material/sort';
import { Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { getCounter } from '../user/state/user.selectors';
import { UserState } from '../user/state/user.state';
import { from, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent {
  displayedColumns = [ 'firstname', 'lastname', 'dob', 'email', 'Address'];
  dataSource!: MatTableDataSource<any>;
  search="";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  user$!: Observable<any | undefined>;
  temp:any=[];

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select(getCounter);
    this.user$.subscribe(data => {this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;});
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    
  }

  applyFilter(filterValue:any) {
    if(this.search==="")
    {
      this.user$ = this.store.select(getCounter);
      this.user$.subscribe(data => {this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.paginator;});
    
    }
    else
    {this.temp=[];
      const myObservable = from( this.dataSource.data);
      myObservable.pipe(
        filter(row => row.email === this.search)
      ).subscribe(result => {
        debugger;
         this.temp.push(result);
      
      });
      this.dataSource = new MatTableDataSource(this.temp)
    }
    
  

   
  }
}


