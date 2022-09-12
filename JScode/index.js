function Stopwatch(){
    let starttime,endTime,running,duration=0;
    this.start=function(){
        if(running)
        throw new Error('stopWatch has already started');
        running=true;
        starttime=new Date();

    };
    this.stop=function(){
        if(!running)
        throw new Error('stopWatch is not started');
        running=false;
        endTime=new Date();
        const seconds=(endTime.getTime()-starttime.getTime())/1000;
        duration+=seconds;

    };
    this.reset=function(){
        starttime=null;
        endTime=null;
        running=false;
        duration=0;

    };
    Object.defineProperty(this,'duration',{
        get: function(){return duration;}

    });
}

