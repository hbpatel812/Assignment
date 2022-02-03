var Name = '';
var description = '';
var quantity = '';
var price = '';
var id = 1;
var image;
var table;
var row;
var rowCount;
var image;
var imageURL;



function addRow(event) {
      
       Name = document.getElementById("productName");
       image = document.getElementById("productImage").files[0];
       imageURL= (image != undefined) ? URL.createObjectURL(image) : "";
       var img = document.createElement("img");
       img.style.width = "100px";
       img.style.height = "100px";
       img.src = imageURL;
       description = document.getElementById("productDescription");
       quantity = document.getElementById("productQuantity");
       price = document.getElementById("productPrice");
       table = document.getElementById("myTableData");
       rowCount = table.rows.length;
       row = table.insertRow(rowCount);
    //  image.src = URL.createObjectURL(event.target.files[0]);
      
      row.insertCell(0).innerHTML= Name.value;
      row.insertCell(1).appendChild(img);
      row.insertCell(2).innerHTML= description.value;
      row.insertCell(3).innerHTML= quantity.value;
      row.insertCell(4).innerHTML= price.value;
      row.insertCell(5).innerHTML= `<button name="addToCart" value="addToCart" onClick="addToCart(this, '` + imageURL + `')">add to cart</button>`;


     document.getElementById("myform").reset();
  }
   
  function addToCart(element) {
      var flag = 0;
    var rowId = element.parentNode.parentNode.rowIndex;
       var table1 = document.getElementById("myTableData");

    var table2 = document.getElementById("addToCart");
       var rowCount = table2.rows.length;
   // alert (rowCount);
    for(var j=1;j<rowCount;j++)
    {
       if(table1.rows[rowId].cells[0].innerHTML == table2.rows[j].cells[0].innerHTML)
       {
          if(table1.rows[j].cells[3].innerHTML > 0)
          {
           table2.rows[j].cells[3].innerHTML ++;
           table2.rows[j].cells[4].innerHTML = parseInt(table1.rows[j].cells[4].innerHTML)+ parseInt(table2.rows[j].cells[4].innerHTML);
           table1.rows[j].cells[3].innerHTML --;

          }
          else{
              alert("Product is not available");
          }
           flag = 1;
           break;
       }
    }
    if(flag==0)
    {
       var selectedName = table1.rows[rowId].cells[0].innerHTML;
       var selectedImage = table1.rows[rowId].cells[1].innerHTML;
       var selectedDescription = table1.rows[rowId].cells[2].innerHTML;
       var selectedQuantity = 1;
       var selectedPrice = table1.rows[rowId].cells[4].innerHTML;

       table1.rows[rowId].cells[3].innerHTML --;
       var row = table2.insertRow(rowCount);
       row.insertCell(0).innerHTML= selectedName;
       row.insertCell(1).innerHTML= selectedImage;
       row.insertCell(2).innerHTML= selectedDescription;
       row.insertCell(3).innerHTML= selectedQuantity
       row.insertCell(4).innerHTML= selectedPrice;
       row.insertCell(5).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    }
    
  }
  function deleteRow(obj) {
  
       var index = obj.parentNode.parentNode.rowIndex;
       var table = document.getElementById("addToCart");
       table.deleteRow(index);
}
  