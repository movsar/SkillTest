import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  date = {
    dayOfWeek: ""
  }
  

  ngOnInit() {
    this.date.dayOfWeek = "Friday";
  }


  constructor() {

  


    //$('select[name=year]').on('change', function () {
    //  checkTotalDay();
    //});
    //$('select[name=month]').on('change', function () {
    //  checkTotalDay();
    //});

    //function checkTotalDay() {
    //  var year = $('select[name=year]').val();
    //  var month = $('select[name=month]').val();
    //  var totalDate = 31;
    //  if (year !== '' && month !== '') {
    //    totalDate = new Date(year, month, 0).getDate();
    //  }
    //  $('select[name=date]').empty();
    //  for (var i = 1; i <= totalDate; i++) {
    //    $('select[name=date]').append("<option value='" + i + "'>" + i + "</option>");
    //  }
    //}
  }
}
