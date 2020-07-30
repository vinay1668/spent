import React from "react";
import saturn from "./images/saturn.png";


function Saturn(props){



  function clicked(){

    props.setEBtn(false);
    props.setMBtn(false);
    props.setVBtn(false);
    props.setMarsBtn(false);
    props.setJBtn(false);
    props.setSBtn(true);
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

          return (   ( (t2-t1)    /   ( (10*3600*1000)+(33*60*1000) )).toFixed(2) );
      },
      inWeeks: function(d1, d2) {
          var t2 = d2.getTime();
          var t1 = d1.getTime();

       return (   ( (t2-t1)    /   ((10*3600*1000*7)+(33*60*1000*7))).toFixed(2) );
          //1407.5 hours in day of mercury
      },
      inYears: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return (   ((t2-t1)   /    (10756*24*3600*1000)).toFixed(2)  );

        //mercury one year in earth days 87.97
      }
  }


  return(
    <div className="">


    < button type="submit" className="btn btn-light" onClick={ props.make ?  clicked : props.notChanged} >Spent on Saturn</button>

{ props.sbtn ?
  <div>
  <img className="img" src={saturn} alt="Planet Saturn" />
  <h2 className="title">Saturn</h2>

    <div className="btnSpacex" >
      <h3>{props.calculateDays}</h3>
     <h3>{props.calculateWeeks}</h3>
     <h3>{props.calculateYears}</h3>

     </div>
     </div>   :

     null }





    </div>






  );
}
export default Saturn;
