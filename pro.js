// jQuery Document

var massage;
var old;
// setInterval(display,100);
// function display()
// {
// 
// function checktime(i)
// {
//   if(i<10)
//   {
//     i="0"+i;
//   }
//   return i;
// }
// }

var d=new Date()
d1=d.toLocaleTimeString()
d=d1.split(' ')[0]

$(document).ready(function(){
  $('#b1').click(function()
  {
    massage=$("#textarea1").val()
    old=$('#content').val()
    $('#content').append(old+'<p id="one" style="color: red;">'+massage+ '</p>'+'<span id="t" style="color: black;">'+d+'</span>')
    $('#content1').append(old+'<br>'+'<p id="two" style="color: red;">'+massage+'</p>'+'<span id="u" style="color: black;">'+d+'</span>')
    // $('#content1').append(old+'<p id="t" style="color: black; ">'+d+'</p>')
    // $('#content').append(old+'<p id="t" style="color: black; ">'+d+'</p>')
  })})
    $(document).ready(function(){
   $('#b2').click(function()
   {
     massage=$("#textarea2").val()
    old=$('#content1').val()
    $('#content1').append(old+'<br>'+'<p id="three" style="color: red;">'+massage+'</p>'+'<span id="v" style="color: black;">'+d+'</span>')
    $('#content').append(old+'<br>'+'<p id="four" style="color: red;">'+massage+'</p>'+'<span id="w" style="color: black;">'+d+'</span>')
    // $('#content1').append(old+'<p id="t" style="color: black; ">'+d+'</p>')
    // $('#content').append(old+'<p id="t" style="color: black; ">'+d+'</p>')
    
 });
});


  
  