function check(name)
{
    if(name == "KAUSTUBH")
    {
        var input = document.getElementById("kaustubh");
        var msg = document.getElementById("kaustubh_dare");
        if(input.value.toUpperCase() === "KAUSTUBH")
        {
            msg.innerHTML = "Dare";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
        }
        else
        {
            msg.innerHTML = "Hint";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
        }
    }
    else if(name == "MUSKAN")
    {
        var input = document.getElementById("muskan");
        var msg = document.getElementById("muskan_dare");
        if(input.value.toUpperCase() === "MUSKAN")
        {
            msg.innerHTML = "My dare ";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
        else
        {
            msg.innerHTML = "Hint Dena";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
    }
    else if(name == "MADHAV")
    {
        
        var input = document.getElementById("madhav");
        var msg = document.getElementById("madhav_dare");
        if(input.value.toUpperCase() === "MADHAV")
        {
            msg.innerHTML = "The Dare is...";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
        else
        {
            msg.innerHTML = "No Hints....";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
    }
    else if(name == "TEJESH")
    {
        var input = document.getElementById("tejesh");
        var msg = document.getElementById("tejesh_dare");
        if(input.value.toUpperCase() === "TEJESH")
        {
            msg.innerHTML = "Dare: make at least 5 funny faces";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
        else
        {
            msg.innerHTML = "Please try again";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }   
    }
    else if(name == "PARTH")
    {
        
        var input = document.getElementById("parth");
        var msg = document.getElementById("parth_dare");
        if(input.value.toUpperCase() === "PARTH")
        {
            msg.innerHTML = "waah Chhotu ... Dare mai dono cheeks par lipstick ke gol 😂";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
        else
        {
            msg.innerHTML = "Bas naa Chhotu ..😞";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
    }
    else if(name == "GOPI")
    {
        
        var input = document.getElementById("gopi");
        var msg = document.getElementById("gopi_dare");
        if(input.value.toUpperCase() === "GOPI")
        {
            msg.innerHTML = "Dare: Mooch and daadhi बना black black ";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
        else
        {
            msg.innerHTML = "No Hints";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
    }
    else if(name == "DEEPIKA")
    {
        
        var input = document.getElementById("deepika");
        var msg = document.getElementById("deepika_dare");
        if(input.value.toUpperCase() === "DEEPIKA")
        {
            msg.innerHTML = "Task - naak kaala karke bark karo 🐶🐶🐶";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
        else
        {
            msg.innerHTML = "Eyy Tatti, 💩";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
    }
    else if(name == "PANDA")
    {
        
        var input = document.getElementById("panda");
        var msg = document.getElementById("panda_dare");
        if(input.value.toUpperCase() === "PANDA")
        {
            msg.innerHTML = "Ohh I am a gummy bear...🐼🐼🐼 Me jo video dikhaunga wo pura dekhana padega, front camera on ke sath lights off";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
        else
        {
            msg.innerHTML = "Lol";
            msg.style.visibility = "visible";
            msg.style.fontSize = "1.5rem";
            msg.style.fontWeight = '300';
        }
    }
    else if(name == "prank_1")
    {
        var input = document.getElementById("prank_1");
        var msg = document.getElementById("prank_1_dare");
        msg.innerHTML = "Prank";
        msg.style.visibility = "visible";
        msg.style.fontSize = "1.5rem";
        msg.style.fontWeight = '300';
    }
    else if(name == "prank_2")
    {
        var input = document.getElementById("prank_2");
        var msg = document.getElementById("prank_2_dare");
        msg.innerHTML = "Second Prank";
        msg.style.visibility = "visible";
        msg.style.fontSize = "1.5rem";
        msg.style.fontWeight = '300';
    }
}