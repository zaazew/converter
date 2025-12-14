let leftSpans=document.querySelectorAll(".span-div1 span")
let rightSpans=document.querySelectorAll(".span-div2 span")
let leftInput=document.querySelector(".inpt1 input")
let rightInput=document.querySelector(".inpt2 input")
let leftP=document.querySelector(".p1")
let rightP=document.querySelector(".p2")
let leftArea="RUB"
let rightArea="USD"
let lastWrite="left"

function makePurple(selector){
    let spans=document.querySelectorAll(selector);
    spans.forEach(span=>{
    span.addEventListener("click",()=>{
        spans.forEach(s=>{
            s.classList.remove("purple")
        });
        span.classList.add("purple")

        switch(selector){
            case ".span-div1 span":
            leftArea=span.innerText;
            break;
            case ".span-div2 span":
            rightArea=span.innerText;
            break;
            }
        convertor()

    })
})
}
makePurple(".span-div1 span")
makePurple(".span-div2 span")

let vurulacaqReqem=1
function convertor(){
    if(leftArea==rightArea){
        vurulacaqReqem=1
        leftP.innerText=`1 ${leftArea} = 1 ${rightArea}`
        rightP.innerText=`1 ${rightArea} = 1 ${leftArea}`
        if(lastWrite=="left"){
            rightInput.value=leftInput.value; 
        }
        else{
            leftInput.value=rightInput.value;
        }
        /*function one(inp1,inp2){
        if(inp1.value !=="") {
            inp2.value=inp1.value;
        }}
        one(leftInput,rightInput)
        one(rightInput,leftInput)*/
        return;
    }
/*9767cc96767448b75b05cc6d38c8f5c1*/


    fetch(`https://api.exchangerate.host/live?access_key=e806c8c8649c7bac84095c234a3535a0&source=${leftArea}&currencies=${rightArea}`)
    .then(response=>response.json())
    .then(data=>{
        let valueOne=data.quotes[leftArea+rightArea]
        vurulacaqReqem=valueOne
        /*if(leftInput.value !=""){
        rightInput.value=parseFloat((leftInput.value*vurulacaqReqem).toFixed(5))
    }*/
        if(lastWrite=="left"){
            if(leftInput.value!=""){
                    rightInput.value=parseFloat((leftInput.value*vurulacaqReqem).toFixed(5))
            }
            else{
                rightInput.value=""
            }
        } 
        else{
            if(rightInput.value!=""){
                    leftInput.value=parseFloat((rightInput.value/vurulacaqReqem).toFixed(5))
                }
                else{
                    leftInput.value=""
                }
            }

        leftP.innerText=`1 ${leftArea} =${valueOne.toFixed(4)} ${rightArea}`
        rightP.innerText=`1 ${rightArea} =${(1/valueOne).toFixed(4)} ${leftArea}`

    })
}
convertor()

leftInput.addEventListener("input",()=>{
    lastWrite="left"
    leftInput.value=leftInput.value.replace(",",".")
    leftInput.value=leftInput.value.replace(/[^0-9.]/g,""); 

    if (leftInput.value!=""){
        rightInput.value=parseFloat((leftInput.value*vurulacaqReqem).toFixed(5))
    } 
    else{
        rightInput.value=""
    }
})
rightInput.addEventListener("input",()=>{
    lastWrite="right"
    rightInput.value=rightInput.value.replace(",",".")
    rightInput.value=rightInput.value.replace(/[^0-9.]/g,""); 

    if(rightInput.value!=""){
        leftInput.value=parseFloat((rightInput.value/vurulacaqReqem).toFixed(5))
    } 
    else{
        leftInput.value=""
    }
})

leftInput.value="";
rightInput.value="";


/*function input(inp1,inp2){
    inp1.addEventListener("input",()=>{
        inp1.value=inp1.value.replace(",", ".")
        if(isNaN(inp1.value)){
        inp1.value= inp1.value.replace(/[^0-9.]/g,"");
        return;
    }
    if(inp1.value!==""){
        inp2.value=(inp1.value*vurulacaqReqem).toFixed(5)
    } 
    else{
        inp2.value=""
        
    }

    })
}
input(leftInput,rightInput)
input(rightInput,leftInput)*/

/*internet?*/

/*birden cox noqte problemi?
meselen men 12.5 yazmaliyam amma sehven 12..5 ve ya 12.5. ve ya 1.2.5 yazdim. 
menim kodum bir bir gezib baxmalidi ki yazida nece noqte var. 
eger birden artiqdirsa birincini saxlayir ve qalanlarini silir. 
amma burada mentiqen baxsaq istifadecinin hansini silmek istediyini bile bilmerik. 
belke de bunu elave etmek lazim deyil?
belke de belke de belke de belke de belke de belke de belke de belke de belke de belke de belke de belke de */


