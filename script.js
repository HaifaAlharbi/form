



// Document is ready

$(document).ready(function () {
    
  // Validate fname
      $('#val1').hide();   
      let fnamesError = true;
      $('#fname').keyup(function () {
          validateFname();
      });
       
      function validateFname() {
        let FnameValue = $('#fname').val();
        if (FnameValue.length == '') {
        $('#val1').show();
        fnamesError = false;
            return false;
        }
     
        else {
            $('#val1').hide();
        }
      }
   //valdet last name
   $('#val2').hide();   
   let lnamesError = true;
   $('#lname').keyup(function () {
       validateLname();
   });
    
   function validateLname() {
     let LnameValue = $('#lname').val();
     if (LnameValue.length == '') {
     $('#val2').show();
     lnamesError = false;
         return false;
     }
  
     else {
         $('#val2').hide();
     }
   }
      //valdet address 1
      $('#adr').hide();   
      let addressError = true;
      $('#ad1').keyup(function () {
          validateAddress();
      });
       
      function validateAddress() {
        let AddressValue = $('#ad1').val();
        if (AddressValue.length == '') {
        $('#adr').show();
        addressError = false;
            return false;
        }
     
        else {
            $('#adr').hide();
        }
      }
   

      // Validate city
      $('#cit').hide();   
      let cityError = true;
      $('#city').keyup(function () {
          validatecity();
      });
       
      function validatecity() {
        let cityValue = $('#city').val();
        if (cityValue.length == '') {
        $('#cit').show();
        cityError = false;
            return false;
        }
     
        else {
            $('#cit').hide();
        }
      }

        // Validate sp
        $('#sp').hide();   
        let  StPrError = true;
        $('#StPr').keyup(function () {
            validateStPr();
        });
         
        function validateStPr() {
          let StPrValue = $('#StPr').val();
          if (StPrValue.length == '') {
          $('#sp').show();
          StPrError = false;
              return false;
          }
       
          else {
              $('#sp').hide();
          }
        }
      // Validate counrty
  
  $('#co').hide();   
  let counrtyError = true;
  $('#counrty').keyup(function () {
      validateCounrty();
  });
   
  function validateCounrty() {
    let counrtyValue = $('#counrty').val();
    if (counrtyValue.length == '') {
    $('#co').show();
    counrtyError = false;
        return false;
    }
 
    else {
        $('#co').hide();
    }
  }
 
  
// Submit button
$('#sub').click(function () {
  validateFname();
  validateLname();
  validateAddress();
  validatecity();
  validateStPr();
  validateCounrty();
  if (( fnamesError == true) &&
  (addressError == true)&&
      (lnamesError == true)&&
      (cityError == true)&&
      ( StPrError== true)&&
      (counrtyError == true)
       )
     
     {
      
      return true;
 
  } else {
  
      return false;
      
  }
});
});

var sub= document.getElementById("sub");
sub.addEventListener ("click", displayDetails);
var row = 1;
function displayDetails() {
var fname = document.getElementById ("fname").value;
var mname = document.getElementById ("mname").value;
var lname = document.getElementById ("lname").value;
var gender= document.getElementById ("ge").value;
var date= document.getElementById ("dat").value;
var address1= document.getElementById ("ad1").value;
var address2= document.getElementById ("ad2").value;
var city= document.getElementById ("city").value;
var StPr= document.getElementById ("StPr").value;
var counrty= document.getElementById ("counrty").value;
var hobbies =document.getElementById ("ho").value;
if(!fname || !lname  ||!city ||!StPr ||!counrty 
    || !address1) {
alert("Please enter all the input");
return;

}

var display = document.getElementById ("display");
var newRow= display.insertRow(row);

var cell1= newRow.insertCell(0);
var cell2= newRow.insertCell(1);
var cell3= newRow.insertCell(2);
var cell4= newRow.insertCell(3);
var cell5= newRow.insertCell(4);
var cell6= newRow.insertCell(5);
var cell7= newRow.insertCell(6);
var cell8= newRow.insertCell(7);
var cell9= newRow.insertCell(8);
var cell10= newRow.insertCell(9);
var cell11= newRow.insertCell(10);

cell1.innerHTML= fname;
cell2.innerHTML= mname;
cell3.innerHTML= lname;
cell4.innerHTML= gender;
cell5.innerHTML= date;
cell6.innerHTML= address1;
cell7.innerHTML= address2;
cell8.innerHTML= city;
cell9.innerHTML= StPr;
cell10.innerHTML= counrty;
cell11.innerHTML= hobbies;
row++
}