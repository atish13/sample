
    const stopwatch=document.querySelector(".stopwatch");
     startStopWatch=()=>
    {
        let sec=0,min=0,hr=0;
        stopid= setInterval(()=>{
          if(sec<59)
          {
            sec++;
            
          }else if(min>=59)
          {
            min=0;
            hr++;
          }
          else{
            sec=0;
            min++;
          }
          let h=String(hr).padStart(2,"0"),
                m=String(min).padStart(2,"0"),
                s=String(sec).padStart(2,"0");

          stopwatch.innerHTML=`${h}:${m}:${s}`;
            
            //console.log(`${hr}:${min}:${sec}`)
    
        },1000);
       // alert("this is js");
    }
    stopStopWatch=()=>{
        clearInterval(stopid);

    }

