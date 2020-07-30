import React from "react";
import neptune from "./images/neptune.png";


function Neptune(props){



  function clicked(){

        props.setNBtn(true);
    props.setEBtn(false);
    props.setMBtn(false);
    props.setVBtn(false);
    props.setMarsBtn(false);
    props.setJBtn(false);
    props.setSBtn(false);
    props.setUBtn(false);

    props.setPBtn(false);

        props.setting.days(DateDiff.inDays(props.d1, props.d2));
       props.setting.weeks(DateDiff.inWeeks(props.d1, props.d2));
        props.setting.years(DateDiff.inYears(props.d1, props.d2));

  }





  var DateDiff = {

      inDays: function(d1, d2) {
          var t2 = d2.getTime();
          var t1 = d1.getTime();

          return (  (  (t2-t1)  /  ( (16*3600*1000)+(6*60*1000)+(36*1000))  ).toFixed(2) );
      },
      inWeeks: function(d1, d2) {
          var t2 = d2.getTime();
          var t1 = d1.getTime();

                    return (  (  (t2-t1)  /  ( (16*3600*1000*7)+(6*60*1000*7)+(36*1000*7))  ).toFixed(2) );

          //1407.5 hours in day of mercury
      },
      inYears: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return (   ( (t2-t1)   /    (60190*24*3600*1000) ).toFixed(2)   );

        //mercury one year in earth days 87.97
      }
  }


  return(
    <div className="">


    < button type="submit" className="btn btn-warning" onClick={ props.make ?  clicked : props.notChanged} >Spent on Neptune</button>

{ props.nbtn ?
  <div>
  <img className="img" src={neptune} alt="Planet Neptune" />
  <h2 className="title">Neptune</h2>

    <div className="btnSpacex" >
      <h3>{props.calculateDays}</h3>
     <h3>{props.calculateWeeks}</h3>
     <h3>{props.calculateYears}</h3>

     </div>
     </div>  :

     null }





    </div>






  );
}
export default Neptune;
