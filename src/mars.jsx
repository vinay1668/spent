import React from "react";
import mars from "./images/mars.png";


function Mars(props){



  function clicked(){

    props.setEBtn(false);
    props.setMBtn(false);
    props.setVBtn(false);
    props.setMarsBtn(true);
    props.setJBtn(false);
    props.setSBtn(false);
    props.setUBtn(false);
    props.setNBtn(false);
    props.setPBtn(false);

        props.setting.days(DateDiff.inDays(props.d1, props.d2));
       props.setting.weeks(DateDiff.inWeeks(props.d1, props.d2));
        props.setting.years(DateDiff.inYears(props.d1, props.d2));

  }





  var DateDiff = {

      inDays: function(d1, d2) {
          var t2 = d2.getTime();
          var t1 = d1.getTime();

          return ( ( (t2-t1)    /  (  (24*3600*1000)+(39*60*1000)+(35*1000) )).toFixed(2));
      },
      inWeeks: function(d1, d2) {
          var t2 = d2.getTime();
          var t1 = d1.getTime();


  return ( ( (t2-t1)    /  (  (24*3600*1000*7)+(39*60*1000*7)+(35*1000*7) )).toFixed(2));
          //1407.5 hours in day of mercury
      },
      inYears: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return (   ((t2-t1)  /   (686.98*24*3600*1000)).toFixed(2)   );

        //mercury one year in earth days 87.97
      }
  }


  return(
    <div className="">


    < button type="submit" className="btn btn- mars" onClick={ props.make ?  clicked : props.notChanged} >Spent on Mars</button>

{ props.marsbtn ?

  <div>
  <img className="img" src={mars} alt="Planet Mars" />
  <h2 className="title">Mars</h2>

    <div className="btnSpacex" >
      <h3>{props.calculateDays}</h3>
     <h3>{props.calculateWeeks}</h3>
     <h3>{props.calculateYears}</h3>

     </div>
     </div> :

     null }





    </div>






  );
}
export default Mars;
