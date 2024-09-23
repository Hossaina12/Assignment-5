const addNow1 = document.getElementById("nkButton");
addNow1.addEventListener('click',function(){
    const amountO = parseFloat(document.getElementById("input1").value);
    
 
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
    const totalAmountElement = document.getElementById('dnt3');
    totalAmountElement.innerText = amountTr;

    const das = parseFloat(document.getElementById('dasbord').innerText);
      const dasamount = das - amountTr;
      const totalDasElement = document.getElementById('dasbord');
      totalDasElement.innerText = dasamount;

      const totalHisElement = document.getElementById('his3');
      totalHisElement.innerText = amountTr;

});