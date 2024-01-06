//Q.16  Write a C program to search all occurrences of a character in given string.
let q1 = "googloe"
function searchAllOccCh(q1,char){
    let q3 = " ";
      for(i=0;i< q1.length;i++)
		{
			if(char == q1[i]) {
               q3 += " " + i; 
               
                
			}
          
			
		}
        return q3;
        
    }
    console.log(searchAllOccCh(q1,'g'));


    //Output = 0 3