import React ,{ useState } from "react";
import Earth from "./earth";
import Mercury from "./mercury";
import Venus from "./venus";
import Mars from "./mars";
import Jupiter from "./jupiter";
import Saturn from "./saturn";
import Neptune from "./neptune";
import Uranus from "./uranus";

import Pluto from "./pluto";
function Demo(){
  //
  // const d=new Date();
  // const today=d.getFullYear() + "-" +( d.getMonth()+1) + "-" + d.getDate();
  // const[date,setDate]=useState(today);






  const[dj,setDj]=useState("");
  const[pop,setPop]=useState(false);
  const[make,setMake]=useState(false);
  const[ebtn,setEBtn]=useState(false);
  const[mbtn,setMBtn]=useState(false);
  const[vbtn,setVBtn]=useState(false);
  const[marsbtn,setMarsBtn]=useState(false);
  const[jbtn,setJBtn]=useState(false);
  const[sbtn,setSBtn]=useState(false);
  const[ubtn,setUBtn]=useState(false);
  const[nbtn,setNBtn]=useState(false);
  const[pbtn,setPBtn]=useState(false);

  const[calculateMilliSeconds,makeCalculateMilliSeconds]=useState("");
  const[calculateSeconds,makeCalculateSeconds]=useState("");
  const[calculateMinutes,makeCalculateMinutes]=useState("");
  const[calculateHours,makeCalculateHours]=useState("");
  const[calculateDays,makeCalculateDays]=useState("");
  const[calculateWeeks,makeCalculateWeeks]=useState("");
  const[calculateMonths,makeCalculateMonths]=useState("");
  const[calculateYears,makeCalculateYears]=useState("");
  const[datesLeft,makeDatesLeft]=useState("");
  const[nextBirthday,makeNextBirthday]=useState("");


      var d1 = new Date(dj);
      var d2 = new Date();
      var d3 = new Date(dj);


      var x1 = new Date(dj);
      var x2 = new Date();
      x1.setFullYear(x2.getFullYear());
      if(x1.getTime()  >   x2.getTime() )
      {
             d3.setFullYear(d2.getFullYear());


      }
      else
      {
               d3.setFullYear(d2.getFullYear()+1);


      }



//var x = parseInt(((new Date().getTime())-(new Date(dj).getTime()))/(24*3600*1000));



  function notChanged(){

    setPop(true);

    setTimeout(function () {

      setPop(false);

    },1000);


  }

  function handleChange(event)
  {



    setMake(true);
    setDj(new Date(event.target.value).toDateString().split(' ').slice(1).join(' '))


  }


  var setting = {
    milliSeconds:function(sent){
      makeCalculateMilliSeconds("Milliseconds spent : " + sent);
    },
    seconds:function(sent){
      makeCalculateSeconds("Seconds spent : "+ sent);
    },
    minutes:function(sent){
      makeCalculateMinutes("Minutes spent : "+ sent);
    },
    hours:function(sent){
      makeCalculateHours("Hours spent : "+ sent);
    },
    days:function(sent){
      makeCalculateDays("Days spent : "+ sent);
    },
    weeks:function(sent){
          makeCalculateWeeks("Weeks spent : "+ sent);
    },
    months:function(sent){
          makeCalculateMonths("Months spent : "+ sent);
    },
    years:function(sent){
           makeCalculateYears("Years spent : "+ sent);
    },
    nextBirthday:function(sent){
           makeNextBirthday("Next Birthday :  "+sent)
    },
    datesLeft:function(sent){
           makeDatesLeft("Days left till your next Birthday : " +sent);
    }

  }





  var curr = new Date();
  curr.setDate(curr.getDate() + 5);
  var date = curr.toISOString().substr(0,10);

  return(
             <div className="container">
                 <h1 className="spent"> Spent </h1>
               <div id="date">



  <h2> What's your Birthday ?</h2>

<input type="date" className="form-control calender" defaultValue={date} id=""  placeholder="Choose your Birthday"  onChange={handleChange} />

                    {  pop ?
                      <h4 className="alert">Please choose your Birthday!</h4>
                      :
                      null
                    }

                </div>

     <div>

                         <Earth
                         d1={d1}
                         d2={d2}
                         d3={d3}
                        calculateMilliSeconds={calculateMilliSeconds}
                        calculateSeconds={calculateSeconds}
                        calculateMinutes={calculateMinutes}
                        calculateHours={calculateHours}
                        calculateDays={calculateDays}
                        calculateWeeks={calculateWeeks}
                        calculateMonths={calculateMonths}
                        calculateYears={calculateYears}
                        datesLeft={datesLeft}
                        nextBirthday={nextBirthday}

                        setting={setting}
                        make={make}
                        notChanged={notChanged}
                        ebtn={ebtn}
                        setEBtn={setEBtn}
                        setMBtn={setMBtn}
                        mbtn={mbtn}
                        setVBtn={setVBtn}
                        vbtn={vbtn}
                        setMarsBtn={setMarsBtn}
                        marsbtn={marsbtn}
                        setJBtn={setJBtn}
                        jbtn={jbtn}
                        sbtn={sbtn}
                        setSBtn={setSBtn}
                        ubtn={ubtn}
                        setUBtn={setUBtn}
                        nbtn={nbtn}
                        setNBtn={setNBtn}
                        pbtn={pbtn}
                        setPBtn={setPBtn}

                         />


                         < Mercury
                         d1={d1}
                         d2={d2}
                         d3={d3}
                         calculateMilliSeconds={calculateMilliSeconds}
                         ebtn={ebtn}
                         setEBtn={setEBtn}
                         setMBtn={setMBtn}
                         mbtn={mbtn}
                         setVBtn={setVBtn}
                         vbtn={vbtn}
                         setMarsBtn={setMarsBtn}
                         marsbtn={marsbtn}
                         setJBtn={setJBtn}
                         jbtn={jbtn}
                         sbtn={sbtn}
                         setSBtn={setSBtn}
                         ubtn={ubtn}
                         setUBtn={setUBtn}
                         nbtn={nbtn}
                         setNBtn={setNBtn}
                         pbtn={pbtn}
                         setPBtn={setPBtn}
                         calculateDays={calculateDays}
                         calculateWeeks={calculateWeeks}
                         calculateYears={calculateYears}
                         datesLeft={datesLeft}
                         nextBirthday={nextBirthday}
                         setting={setting}
                         make={make}
                         notChanged={notChanged}
                         />
                         <Venus
                         d1={d1}
                         d2={d2}
                         d3={d3}

                        calculateDays={calculateDays}
                        calculateWeeks={calculateWeeks}
                        calculateYears={calculateYears}
                        datesLeft={datesLeft}
                        nextBirthday={nextBirthday}
                        setting={setting}
                        make={make}
                        notChanged={notChanged}
                        ebtn={ebtn}
                        setEBtn={setEBtn}
                        setMBtn={setMBtn}
                        mbtn={mbtn}
                        setVBtn={setVBtn}
                        vbtn={vbtn}
                        setMarsBtn={setMarsBtn}
                        marsbtn={marsbtn}
                        setJBtn={setJBtn}
                        jbtn={jbtn}
                        sbtn={sbtn}
                        setSBtn={setSBtn}
                        ubtn={ubtn}
                        setUBtn={setUBtn}
                        nbtn={nbtn}
                        setNBtn={setNBtn}
                        pbtn={pbtn}
                        setPBtn={setPBtn}
                        />

                         <Mars
                         d1={d1}
                         d2={d2}
                         d3={d3}

                        calculateDays={calculateDays}
                        calculateWeeks={calculateWeeks}
                        calculateYears={calculateYears}
                        datesLeft={datesLeft}
                        nextBirthday={nextBirthday}
                        setting={setting}
                        make={make}
                        notChanged={notChanged}
                        ebtn={ebtn}
                        setEBtn={setEBtn}
                        setMBtn={setMBtn}
                        mbtn={mbtn}
                        setVBtn={setVBtn}
                        vbtn={vbtn}
                        setMarsBtn={setMarsBtn}
                        marsbtn={marsbtn}
                        setJBtn={setJBtn}
                        jbtn={jbtn}
                        sbtn={sbtn}
                        setSBtn={setSBtn}
                        ubtn={ubtn}
                        setUBtn={setUBtn}
                        nbtn={nbtn}
                        setNBtn={setNBtn}
                        pbtn={pbtn}
                        setPBtn={setPBtn}
                          />
                         <Jupiter
                         d1={d1}
                         d2={d2}
                         d3={d3}

                        calculateDays={calculateDays}
                        calculateWeeks={calculateWeeks}
                        calculateYears={calculateYears}
                        datesLeft={datesLeft}
                        nextBirthday={nextBirthday}
                        setting={setting}
                        make={make}
                        notChanged={notChanged}
                        ebtn={ebtn}
                        setEBtn={setEBtn}
                        setMBtn={setMBtn}
                        mbtn={mbtn}
                        setVBtn={setVBtn}
                        vbtn={vbtn}
                        setMarsBtn={setMarsBtn}
                        marsbtn={marsbtn}
                        setJBtn={setJBtn}
                        jbtn={jbtn}
                        sbtn={sbtn}
                        setSBtn={setSBtn}
                        ubtn={ubtn}
                        setUBtn={setUBtn}
                        nbtn={nbtn}
                        setNBtn={setNBtn}
                        pbtn={pbtn}
                        setPBtn={setPBtn}
                         />
                         <Saturn
                         d1={d1}
                         d2={d2}
                         d3={d3}

                        calculateDays={calculateDays}
                        calculateWeeks={calculateWeeks}
                        calculateYears={calculateYears}
                        datesLeft={datesLeft}
                        nextBirthday={nextBirthday}
                        setting={setting}
                        make={make}
                        notChanged={notChanged}
                        ebtn={ebtn}
                        setEBtn={setEBtn}
                        setMBtn={setMBtn}
                        mbtn={mbtn}
                        setVBtn={setVBtn}
                        vbtn={vbtn}
                        setMarsBtn={setMarsBtn}
                        marsbtn={marsbtn}
                        setJBtn={setJBtn}
                        jbtn={jbtn}
                        sbtn={sbtn}
                        setSBtn={setSBtn}
                        ubtn={ubtn}
                        setUBtn={setUBtn}
                        nbtn={nbtn}
                        setNBtn={setNBtn}
                        pbtn={pbtn}
                        setPBtn={setPBtn}
                         />
                         <Uranus

                         d1={d1}
                         d2={d2}
                         d3={d3}

                        calculateDays={calculateDays}
                        calculateWeeks={calculateWeeks}
                        calculateYears={calculateYears}
                        datesLeft={datesLeft}
                        nextBirthday={nextBirthday}
                        setting={setting}
                        make={make}
                        notChanged={notChanged}
                        ebtn={ebtn}
                        setEBtn={setEBtn}
                        setMBtn={setMBtn}
                        mbtn={mbtn}
                        setVBtn={setVBtn}
                        vbtn={vbtn}
                        setMarsBtn={setMarsBtn}
                        marsbtn={marsbtn}
                        setJBtn={setJBtn}
                        jbtn={jbtn}
                        sbtn={sbtn}
                        setSBtn={setSBtn}
                        ubtn={ubtn}
                        setUBtn={setUBtn}
                        nbtn={nbtn}
                        setNBtn={setNBtn}
                        pbtn={pbtn}
                        setPBtn={setPBtn}

                         />
                         <Neptune
                         d1={d1}
                         d2={d2}
                         d3={d3}

                        calculateDays={calculateDays}
                        calculateWeeks={calculateWeeks}
                        calculateYears={calculateYears}
                        datesLeft={datesLeft}
                        nextBirthday={nextBirthday}
                        setting={setting}
                        make={make}
                        notChanged={notChanged}
                        ebtn={ebtn}
                        setEBtn={setEBtn}
                        setMBtn={setMBtn}
                        mbtn={mbtn}
                        setVBtn={setVBtn}
                        vbtn={vbtn}
                        setMarsBtn={setMarsBtn}
                        marsbtn={marsbtn}
                        setJBtn={setJBtn}
                        jbtn={jbtn}
                        sbtn={sbtn}
                        setSBtn={setSBtn}
                        ubtn={ubtn}
                        setUBtn={setUBtn}
                        nbtn={nbtn}
                        setNBtn={setNBtn}
                        pbtn={pbtn}
                        setPBtn={setPBtn}
                         />



                         <Pluto
                         d1={d1}
                         d2={d2}
                         d3={d3}

                        calculateDays={calculateDays}
                        calculateWeeks={calculateWeeks}
                        calculateYears={calculateYears}
                        datesLeft={datesLeft}
                        nextBirthday={nextBirthday}
                        setting={setting}
                        make={make}
                        notChanged={notChanged}
                        ebtn={ebtn}
                        setEBtn={setEBtn}
                        setMBtn={setMBtn}
                        mbtn={mbtn}
                        setVBtn={setVBtn}
                        vbtn={vbtn}
                        setMarsBtn={setMarsBtn}
                        marsbtn={marsbtn}
                        setJBtn={setJBtn}
                        jbtn={jbtn}
                        sbtn={sbtn}
                        setSBtn={setSBtn}
                        ubtn={ubtn}
                        setUBtn={setUBtn}
                        nbtn={nbtn}
                        setNBtn={setNBtn}
                        pbtn={pbtn}
                        setPBtn={setPBtn}
                         />

</div>

                             </div>
);
}
export default Demo;
