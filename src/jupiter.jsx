import React from "react";
import jupiter from "./images/jupiter.png";


function Jupiter(props){



  function clicked(){

    props.setEBtn(false);
    props.setMBtn(false);
    props.setVBtn(false);
    props.setMarsBtn(false);
    props.setJBtn(true);
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

          return     (    ( (t2-t1)   /   (  (9*3600*1000)+(55*60*1000)+(30*1000)  )).toFixed(2));
      },
      inWeeks: function(d1, d2) {
          var t2 = d2.getTime();
          var t1 = d1.getTime();


          return     (    ( (t2-t1)   /   (  (9*3600*1000*7)+(55*60*1000*7)+(30*1000*7) ) ).toFixed(2));


          //1407.5 hours in day of mercury
      },
      inYears: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return (  (    (t2-t1)   /    (4332.59*24*3600*1000) ).toFixed(2));

        //mercury one year in earth days 87.97
      }
  }


  return(
    <div className="">


    < button type="submit" className="btn btn-primary" onClick={ props.make ?  clicked : props.notChanged} >Spent on Jupiter</button>

{ props.jbtn ?
  <div>
  <img className="img" src={jupiter} alt="Planet Jupiter" />
  <h2 className="title">Jupiter</h2>

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
export default Jupiter;
