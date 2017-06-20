var winners = [];

function Print() 
{  
  
  for (i = 0; i < 6; i++)
    {
      winners[i] = Math.floor(Math.random() * 59);
      
      winners = winners.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });
    }
  
    winners.sort( function(a,b) { return a - b; } );
    

    
      for (i = 0; i < 6; i++) 
      {
        document.getElementById("CompLotto" + String([i])).innerHTML = winners[i];
      }
    
}
  


  document.getElementById('goo').innerHTML = winners;
