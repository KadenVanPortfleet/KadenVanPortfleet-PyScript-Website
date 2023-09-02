console.log("loaded JS!!!");
    function delay(time) 
    {
      return new Promise(resolve => setTimeout(resolve, time));
    }
    document.getElementById("column3").style.opacity = "1";
    document.getElementById("col2").style.opacity = "1";

    async function scroll()
    {
      var arr = new Array();
      arr.push("col2");
      arr.push("column3")


      //console.log("called!!!");
      fadeInPoint = (window.innerHeight - 150);
      fadeOutPoint = (window.innerHeight - 150);
      //console.log(fadeOutPoint);
      await delay(100);
      
      for (let i=0; i<arr.length;i++)
      {
        //console.log("!!!" + i);
        rect = document.getElementById(arr[i]).getBoundingClientRect();
        //console.log(rect.top);

        if ((rect.top < fadeInPoint) && (document.getElementById(arr[i]).style.opacity == "0"))
        {
          //console.log("passed!");
          for (let j = 0; j <= 10; j++)
          {
            document.getElementById(arr[i]).style.opacity = j/10;
            //console.log(document.getElementById(arr[i]).style.opacity);
            await delay(10);
          }
        }
        else if (rect.top > fadeOutPoint && document.getElementById(arr[i]).style.opacity == "1")
        {
          //console.log("passed2!");

          for (let j = 10; j >= 0; j--)
          {
            document.getElementById(arr[i]).style.opacity = j/10;
            await delay(10);
          }
        }
      }
    }