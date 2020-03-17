import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  remainingTabs = [{
    id:1,
    content:'This is a view 1'
  },{
    id:2,
    content:'This is a view 2'
  },{
    id:3,
    content:'This is a view 3'
  },{
    id:4,
    content:'This is a view 4'
  },{
    id:5,
    content:'This is a view 5'
  }];

  addedTabs = [];
  counter = 0;
  selectedTab = 0;

  showSubMenuFlag = false;

  constructor() { }

  ngOnInit() {
    this.addedTabs = [{
      id:1,
      content:'This is a view 1'
    }];
  
    this.remainingTabs.splice(0,1);
    this.counter = 1;
    this.selectedTab = 0; //set selected tab to the 1st by default.
  }

  /** Function to add a new tab **/
  addTab = function(index:number){
    this.counter++;
    this.addedTabs.push(this.remainingTabs[index]);
    this.remainingTabs.splice(index,1);
    //this.addedTabs.sort((a:any,b:any) => a.id.localeCompare(b.id));
    this.selectedTab = this.addedTabs.length - 1; //set the newly added tab active.
    this.showSubMenuFlag = false; 
  }
  
  /** Function to delete a tab **/ 
  deleteTab = function(index:number){    
    this.remainingTabs.push(this.addedTabs[index]);
    this.addedTabs.splice(index,1); //remove the object from the array based on index
    this.counter--;
    this.selectedTab = this.addedTabs.length - 1;
  }

  showSubMenu = function(){
    this.showSubMenuFlag = true;
  }

  /** Function to set selectedTab **/
  selectTab = function(index:number){
    this.selectedTab = index;
    this.showSubMenuFlag = false;
  }

}
