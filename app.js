let message=document.getElementById("string");
let buttons=document.getElementById("btn1");
let results=document.getElementById("result");
let vowels = "aeiou"

buttons.addEventListener('click', ()=>{
        var counter=0;
        let text = message.value.toLowerCase();
        for(var i=0; i<message.value.length; i++)
        {
            if (vowels.includes(text[i]))
            {
            results.style.color='green';
            counter++;
            }
        }
        
        results.innerHTML=`There are ${counter} vowels in "${message.value}"`;

});

