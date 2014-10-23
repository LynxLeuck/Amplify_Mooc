
var index = 0;
var activity_Type = "";

var output = "";
var b = window.location.toString();

var xsrf_token = eventXsrfToken.toString();

var i = 0;

var s = "";

var a = "";


while(index !== activity.length)

{
    
    
    
if (activity_Type !== undefined)
    
{
     
   activity_Type = activity[index].questionType;
   
     
        if (activity_Type === "coderunner")
  
      {
       
 output = activity[index].correctAnswerRegex.toString();

        output = output.replace(/[/\\]/g, "");

        output = output.replace(/[s]/g, " ");
 
       a = '\"status\":\"code_ok\",\"output\":\"' + output + '\"';
 
       activity_Type = "activity-coderunner";
 
       }
 
       else if (activity_Type === "multiple choice")

        {
  
      while (activity[index].choice[i][1] !== true)
 
       {
 
           i++;
      
  }
      
   a ='\"value\":' + i;
  
       activity[index].choice[i][0];
  
        }
    
    else if (activity_Type === "freetext")

        {
   
         output = activity[index].correctAnswerRegex.toString();
 
           output = output.replace(/[/\^\s+$]/g, "");
   
         output = output.slice(0 ,output.length - 1);
 
           a ='\"value\":\"' + output + '\"' ;
 
       }
 
       s = '{"source":"attempt-activity","payload":"{\"index\":' + index + ',\"type\":\"' + activity_Type +'\",' + a + ',\"correct\":true,\"location\":\"' + b + '\"}","xsrf_token":"' + xsrf_token + '"}';

    window.postMessage(s, "https://course-mooc.amplify.com/rest/events");
    
   index++;    
    }
}