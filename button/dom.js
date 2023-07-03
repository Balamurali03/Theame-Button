let btn=document.querySelector(".btn")
let toggle=document.querySelector(".toggle")

function changebackground()
 {
        if(btn.className=="btn")
        {
            document.body.style.backgroundColor="black"
            toggle.style.backgroundColor="white"
            btn.className="btn1"
            
        }
    else{
        document.body.style.backgroundColor="white"
        toggle.style.backgroundColor="black"
        btn.className="btn"
    }
    
}






























// function hideandshow() 
// {
//     let image=document.getElementById("image")
//     let btn= document.getElementById("btn")

// if(btn.innerText=="HIDE")
// {
    
//     image.style.visibility="hidden"
//     btn.innerText="SHOW"
// }
// else
// {
    
//     image.style.visibility="visible"
//     btn.innerText="HIDE"

// }
// }
// function hideandshow1() 
// {
//     let image=document.getElementsByClassName("img")
//     console.log(image);
//     let btn= document.getElementsByClassName("button")
//     console.log( btn);

// if(btn.innerText=="HIDE")
// {
    
//     image.style.visibility="hidden"
//    btn.innerText="SHOW"
// }
// else
// {
    
//     image.style.visibility="visible"
//     btn.innerText="HIDE"

// }
// }