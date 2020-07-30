import React from "react";
import venus from "./images/venus.img";


function Venus(props){



  function clicked(){

    props.setEBtn(false);
    props.setMBtn(false);
    props.setVBtn(true);
    props.setMarsBtn(false);
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

          return (     (t2-t1)  /   (5832*3600*1000)  ).toFixed(2);
      },
      inWeeks: function(d1, d2) {
          var t2 = d2.getTime();
          var t1 = d1.getTime();

          return  (    (t2-t1)  /    (5832*3600*1000*7)  ).toFixed(2);
      },

      inYears: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return (    (t2-t1)   /    (224.7*24*3600*1000)  ).toFixed(2);
      }
  }


  return(
    <div className="">


    < button type="submit" className="btn btn-secondary" onClick={ props.make ?  clicked : props.notChanged} >Spent on Venus</button>

{ props.vbtn ?
  <div>
       <img className="img" src={venus} alt="Planet Mercury" />
       <h2 className="title">Venus</h2>
    <div className="btnSpacex" >
     <h3 >{props.calculateDays}</h3>
     <h3>{props.calculateWeeks}</h3>
     <h3>{props.calculateYears}</h3>

     </div>
     </div> :
     null }





    </div>






  );
}
export default Venus;
