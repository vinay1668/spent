import React from "react";
import earth from "./images/earth.img";

function Earth(props)
{




  function clicked(){

        props.setEBtn(true);
        props.setMBtn(false);
        props.setVBtn(false);
        props.setMarsBtn(false);
        props.setJBtn(false);
        props.setSBtn(false);
        props.setUBtn(false);
        props.setNBtn(false);
        props.setPBtn(false);
        props.setting.milliSeconds(DateDiff.inMilliSeconds(props.d1, props.d2));
        props.setting.seconds(DateDiff.inSeconds(props.d1, props.d2));
        props.setting.minutes(DateDiff.inMinutes(props.d1, props.d2));
        props.setting.hours(DateDiff.inHours(props.d1, props.d2));
        props.setting.days(DateDiff.inDays(props.d1, props.d2));
        props.setting.weeks(DateDiff.inWeeks(props.d1, props.d2));
        props.setting.months(DateDiff.inMonths(props.d1, props.d2));
        props.setting.years(DateDiff.inYears(props.d1, props.d2));
        props.setting.datesLeft(DateDiff.inDatesLeft(props.d1,props.d2,props.d3));
        props.setting.nextBirthday(DateDiff.inNextBirthday(props.d1,props.d2,props.d3));


  }





  var DateDiff = {

      inDays: function(d1, d2) {
          var t2 = d2.getTime();
          var t1 = d1.getTime();

          return (    ( (t2-t1)    /    (24*3600*1000) ).toFixed(2));
      },
      inHours: function(d1,d2) {
        var t2= d2.getTime();
        var t1 = d1.getTime();

        return (((t2-t1)/(60*60*1000)).toFixed(2));
      },
      inMinutes: function(d1,d2){
        var t2=d2.getTime();
        var t1=d1.getTime();

        return (((t2-t1)/(60*1000)).toFixed(2));
      },
      inSeconds: function(d1,d2){
        var t2=d2.getTime();
        var t1=d1.getTime();

        return parseInt(((t2-t1)/(1000)).toFixed(2));
      },

      inMilliSeconds: function(d1,d2){

        var t2=d2.getTime();
        var t1=d1.getTime();
        return (t2-t1);
      },


      inWeeks: function(d1, d2) {
          var t2 = d2.getTime();
          var t1 = d1.getTime();

                  return (      (  (t2-t1)   /   (24*3600*1000*7) ).toFixed(2)) ;

      },

      inMonths: function(d1, d2) {
          var d1Y = d1.getFullYear();
          var d2Y = d2.getFullYear();
          var d1M = d1.getMonth();
          var d2M = d2.getMonth();

          return parseInt((d2M+12*d2Y)-(d1M+12*d1Y));
      },

      inYears: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

                return (    ( (t2-t1)    /    (24*365*3600*1000) ).toFixed(2));

      },
      inNextBirthday:function(d1,d2,d3){
        d2.setDate(d2.getDate() + DateDiff.inDatesLeft(d1,d2,d3));
        return d2.toDateString();

      },
      inDatesLeft: function(d1,d2,d3){



        var t3 = d3.getTime();
        //var t1 = d1.getTime();
        var t2 = d2.getTime();

        return   parseInt (((  (t3-t2)    /    (24*3600*1000) )+1));
      }


  }




  return (

    <div>
    <div>

      <button type="submit" className="btn btn-success earth" onClick={ props.make ?  clicked : props.notChanged}>Spent on Earth</button>

      </div>
  { props.ebtn ?
    <div>
      <img className="img" src={earth} alt="Planet Earth" />
      <h2 className="title">Earth</h2>
      <div className="btnSpace">
      <h4>{props.calculateMilliSeconds}</h4>
      <h4>{props.calculateSeconds}</h4>
      <h4>{props.calculateMinutes}</h4>
      <h4>{props.calculateHours}</h4>
      <h4>{props.calculateDays}</h4>
      <h4>{props.calculateWeeks}</h4>
      <h4>{props.calculateMonths}</h4>
      <h4>{props.calculateYears}</h4>
      <h4>{props.datesLeft}</h4>
      <h4>{props.nextBirthday}</h4>
      </div>
      </div> :

      null}


    </div>


  );

}
export default Earth;
