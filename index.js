const addNow1 = document.getElementById("nkButton");
addNow1.addEventListener('click',function(){
    const amountO = parseFloat(document.getElementById("input1").value);
    
 if (amountO <= 0 || isNaN(amountO)) {
    document.getElementById('inv1').classList.remove('hidden');
    document.getElementById('suc1').classList.add('hidden');  
    return;
 };
 document.getElementById('inv1').classList.add('hidden');
    document.getElementById('suc1').classList.remove('hidden');  


    const totalAmountElement = document.getElementById('dnt1');
      totalAmountElement.innerText = amountO;
      const das = parseFloat(document.getElementById('dasbord').innerText);
      const dasamount = das - amountO;
      const totalDasElement = document.getElementById('dasbord');
      totalDasElement.innerText = dasamount;


      const totalHisElement = document.getElementById('his1');
      totalHisElement.innerText = amountO;
    
     

});

const addNow2 = document.getElementById("fnButton");
addNow2.addEventListener('click',function(){
    const amount2 = parseFloat(document.getElementById("input2").value);

    if (amount2 <= 0 || isNaN(amount2)) {
        document.getElementById('inv2').classList.remove('hidden');
        document.getElementById('suc2').classList.add('hidden');  
        return;
        
     }
     document.getElementById('inv2').classList.add('hidden');
        document.getElementById('suc2').classList.remove('hidden');  


    const totalAmountElement = document.getElementById('dnt2');
    totalAmountElement.innerText = amount2;

    const das = parseFloat(document.getElementById('dasbord').innerText);

    

      const dasamount = das - amount2;
      const totalDasElement = document.getElementById('dasbord');
      totalDasElement.innerText = dasamount;

      const totalHisElement = document.getElementById('his2');
      totalHisElement.innerText = amount2;


});

const addNow3 = document.getElementById("mvButton");
addNow3.addEventListener('click',function(){
    const amountTr = parseFloat(document.getElementById("input3").value);

    if (amountTr <= 0 || isNaN(amountTr)) {
        document.getElementById('inv3').classList.remove('hidden');
        document.getElementById('suc3').classList.add('hidden'); 
        return;
     }
     document.getElementById('inv3').classList.add('hidden');
    document.getElementById('suc3').classList.remove('hidden');  

    const totalAmountElement = document.getElementById('dnt3');
    totalAmountElement.innerText = amountTr;

    const das = parseFloat(document.getElementById('dasbord').innerText);
      const dasamount = das - amountTr;
      const totalDasElement = document.getElementById('dasbord');
      totalDasElement.innerText = dasamount;

      const totalHisElement = document.getElementById('his3');
      totalHisElement.innerText = amountTr;

});


const historyTab = document.getElementById("history");

const donateTab = document.getElementById("donate");

historyTab.addEventListener('click',function(){

historyTab.classList.add('bg-lime-400');

historyTab.classList.remove('text-gray-500');

donateTab.classList.remove('bg-lime-400');
donateTab.classList.add('text-gray-500');


document.getElementById('historypart').classList.add("hidden");
document.getElementById('mainhistory').classList.remove("hidden");

});





donateTab.addEventListener('click',function(){

    donateTab.classList.add('bg-lime-400');
    
    donateTab.classList.remove('text-gray-500');
    
    historyTab.classList.remove('bg-lime-400');
    historyTab.classList.add('text-gray-500');
    
    
    document.getElementById('historypart').classList.remove("hidden");
    document.getElementById('mainhistory').classList.add("hidden");
    
    });