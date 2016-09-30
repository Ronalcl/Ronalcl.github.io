<script> 
function findTip() {
        var serviceBased = Number(document.getElementById('serviceBased').value);
        var bill = Number(document.getElementById('bill').value);
        var peeps = Number(document.getElementById('peeps').value);
        var tip = bill * serviceBased;
        var tipEach = tip / peeps;
        var total_bill = (bill + tip) / peeps;
if(bill == ""){
     alert("Enter a Valid amount");
        return false;
}
if(peeps == ""){
     alert("Enter a Valid amount");
        return false;
}
if(serviceBased == "0"){
    alert("Please make a selection based on service")
}
        document.getElementById("tip").innerHTML= "$"+Number(tipEach).toFixed(2)+" each";
        document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2)+" each";     
           
    }
   

    function resetBtn() {
    document.getElementById("resetMe").reset();
}
</script>