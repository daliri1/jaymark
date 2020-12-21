setInterval(function(){
var x = Math.round(Math.random() * 255);
var y = Math.round(Math.random() * 255);
var z = Math.round(Math.random() * 255);       
var bg =  " background:rgb("+x+","+y+","+z+");";
var element = document.getElementById("random-background");
element.style = bg;
 },1000);    

function process(){
        var a = document.getElementById("text").value;
        var b = document.getElementById("text1").value;
        	
        if( ( a == "December" && b >= 22  ) || (a == "January" && b <= 19))
                {
                	document.getElementById("sign").src="capricorn.jpg";
                document.getElementById("h2").innerHTML="Your Zodiac Sign is Capricorn";
                
        }
        else if ( ( a == "January" && b >= 20  ) || (a == "February" && b <= 17))
                        {
                document.getElementById("sign").src ="aquarius.jpg";
                document.getElementById("h2").innerHTML="Your Zodiac Sign is Aquarius";
        }
        else if ( ( a == "February" && b >= 18  ) || (a == "March" && b <= 19))
        {
            
            document.getElementById("sign").src="pisces.jpg";
            document.getElementById("h2").innerHTML="Your Zodiac Sign is Pisces";
        }
         else if ( ( a == "March" && b >= 20  ) || (a == "April" && b <= 19))
        {
            
            document.getElementById("sign").src="aries.jpg";
                document.getElementById("h2").innerHTML="Your Zodiac Sign is Aries";
        }
        else if ( ( a == "April" && b >= 20  ) || (a == "May" && b <= 20))
        {
            
            document.getElementById("sign").src="taurus.jpg";
                document.getElementById("h2").innerHTML="Your Zodiac Sign is Taurus";
        }
        else if ( ( a == "May" && b >= 21  ) || (a == "June" && b <= 20))
        {
            
            document.getElementById("sign").src="gemini.jpg";
                document.getElementById("h2").innerHTML="Your Zodiac Sign is Gemini";
        }
        else if ( ( a == "June" && b >= 21 ) || (a == "July" && b <= 22))
        {
            
            document.getElementById("sign").src="cancer.jpg";
                document.getElementById("h2").innerHTML="Your Zodiac Sign is Cancer";
        }
        else if ( ( a == "July" && b >= 23  ) || (a == "August" && b <= 22))
        {
            
            document.getElementById("sign").src="leo.jpg";
                document.getElementById("h2").innerHTML="Your Zodiac Sign is Leo";
        }
        else if ( ( a == "August" && b >= 23  ) || (a == "September" && b <= 22))
        {
            
            document.getElementById("sign").src="virgo.jpg";
                document.getElementById("h2").innerHTML="Your Zodiac Sign is Virgo";
        }
        else if ( ( a == "September" && b >= 23  ) || (a == "October" && b <= 22))
        {
            
            document.getElementById("sign").src="libra.jpg";
                document.getElementById("h2").innerHTML="Your Zodiac Sign is Libra";
        }
        else if ( ( a == "October" && b >= 23  ) || (a == "November" && b <= 21))
        {
            
            document.getElementById("sign").src="scorpion.jpg";
                document.getElementById("h2").innerHTML="Your Zodiac Sign is Scorpion";
        }
        else if ( ( a == "November" && b >= 22  ) || (a == "December" && b <= 21))
        {
            
            document.getElementById("sign").src="sagittarius.jpg";
                document.getElementById("h2").innerHTML="Your Zodiac Sign is Sagittarius";
            
        }
        
        else{
                document.write("<h1>Please Refresh and Make sure the Month of your BirthDay is Correct like this example *January*:</h1>");
        }
}

