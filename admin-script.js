// import * as fs from 'fs/promises';
// import * as fs from 'fs';

var survey_options = document.getElementById('survey_options');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');
var review_fields=document.getElementById('review');
var verify=document.getElementById('veri');

var stored_row=[];
var stored_row_dir=[];
var stored_row_clue=[];
var stored_row_word=[];

var count=0;

var prevfield;
var prevfield_dir;
var prevfield_clue;
var prevfield_word;


var row;
var col;
var table;

let finalarray=[];

var newField
add_more_fields.onclick = function(){
  count=count+1
  newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','survey_options[]');
  newField.setAttribute('class','survey_options');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder',"choose starting point no from above crossboard");
  newField.setAttribute('id',count*1000+0)
  survey_options.appendChild(newField);

  newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','survey_options[]');
  newField.setAttribute('class','survey_options');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder',"write 'a' for across and 'd' for down");
  newField.setAttribute('id',count*1000+1)
  survey_options.appendChild(newField);

  newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','survey_options[]');
  newField.setAttribute('class','survey_options');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder',"Write clue statement");
  newField.setAttribute('id',count*1000+2)
  survey_options.appendChild(newField);

  newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','survey_options[]');
  newField.setAttribute('class','survey_options');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder',"write the word");
  newField.setAttribute('id',count*1000+3)
  survey_options.appendChild(newField);
//   prevfield=document.getElementById


//   document.writeln("previous entry is:"+previous_row);
}


verify.onclick=function()  /// sends data to stored_row
{
    if(count==0)
    {
   
     prevfield=document.getElementById('prev_entry').value;
     prevfield_dir=document.getElementById('prev_entry_dir').value;
     prevfield_clue=document.getElementById('prev_entry_clue').value;
     prevfield_word=document.getElementById('prev_entry_word').value;

    }
    else
    {
     prevfield=document.getElementById(count*1000+0).value;
     prevfield_dir=document.getElementById(count*1000+1).value;
     prevfield_clue=document.getElementById(count*1000+2).value;
     prevfield_word=document.getElementById(count*1000+3).value;

    }
    stored_row[count]=prevfield;
    stored_row_dir[count]=prevfield_dir;
    stored_row_clue[count]=prevfield_clue;
    stored_row_word[count]=prevfield_word;
     
    var temprow=Math.floor((prevfield-1)/col);
    var tempcol=(prevfield-1)%(col)
    // if()
    var prevfield_dirr
    if(prevfield_dir=='a')
    {
           prevfield_dirr=0;
    }
    else
    if(prevfield_dir=='d')
    {
      prevfield_dirr=1;
    }

    finalarray.push({ind:prevfield,dir:prevfield_dirr,val:prevfield_word,clue:prevfield_clue,rowInd:temprow,colInd:tempcol});
    console.log(finalarray);

    if(prevfield_dir=='a')
    {
      var temp=0
      var startprow=Math.floor((prevfield-1)/col);
      var startpcol=(prevfield-1)%(col);
      console.log("row="+startprow+"  column="+startpcol);

        for(var i=0;i<stored_row_word[count].length;i++)
        {
          table.rows[startprow].cells[startpcol++].innerText=stored_row_word[count][temp++];
        }
    }
    else
    if(prevfield_dir=='d')
    {
      var temp=0
      var startprow=Math.floor((prevfield-1)/col);
      var startpcol=(prevfield-1)%(col);
      console.log("row="+startprow+"  column="+startpcol);

        for(var i=0;i<stored_row_word[count].length;i++)
        {
          table.rows[startprow++].cells[startpcol].innerText=stored_row_word[count][temp++];
        }


    }

  //   for(var rowidx=0;rowidx<row;rowidx++)
  //  {
   
  //   for(var colidx=0;colidx<col;colidx++)
  //   {
  //         //  var td=document.createElement('td');
  //         // //  var inbox=document.createTextNode("node no"+colidx);
  //         //  var tosup=rowidx*col+colidx+1;
  //         //  tosup=tosup.toString();
  //         // var inbox=document.createTextNode(tosup+"*");
  //         table.rows[rowidx].cells[colidx].innerText=stored_row_word[0][0];

      
  //   }
   
  // }
    


}

review_fields.onclick = function()
{
      
    // for(var i=0;i<stored_row.length;i++)
    // // for(var i=0;i<previous_row.size();i++)

    // {
    //     document.writeln("previous entry is:"+stored_row[i][0]+"<br>");
    //     document.writeln("previous entry is:"+stored_row[i][1]+"<br>");

    //     // document.writeln("previous entry is:"+previous_row[1]+"<br>");
    // }

    console.log(stored_row[0]);
    console.log(stored_row[1]);
    
}


remove_fields.onclick = function(){
  var input_tags = survey_options.getElementsByTagName('input');
  finalarray.pop();
  // stored_row[count]=prevfield;
  // stored_row_dir[count]=prevfield_dir;
  // stored_row_clue[count]=prevfield_clue;
  // stored_row_word[count]=prevfield_word;
  if(stored_row_dir[count]=='a')
    {
      var temp=0
      var startprow=Math.floor((stored_row[count]-1)/col);
      var startpcol=(stored_row[count]-1)%(col);
      console.log("row="+startprow+"  column="+startpcol);

        for(var i=0;i<stored_row_word[count].length;i++)
        {
          table.rows[startprow].cells[startpcol++].innerText=startprow*(col)+(startpcol-1)+1;
        }
    }
    else
    if(stored_row_dir[count]=='d')
    {
      var temp=0
      var startprow=Math.floor((stored_row[count]-1)/col);
      var startpcol=(stored_row[count]-1)%(col);
      console.log("row="+startprow+"  column="+startpcol);

        for(var i=0;i<stored_row_word[count].length;i++)
        {
          table.rows[startprow++].cells[startpcol].innerText=(startprow-1)*(col)+(startpcol)+1;
        }


    }

  if(input_tags.length > 4) {
    count-=1;
    survey_options.removeChild(input_tags[(input_tags.length) - 1]);
    survey_options.removeChild(input_tags[(input_tags.length) - 1]);
    survey_options.removeChild(input_tags[(input_tags.length) - 1]);
    survey_options.removeChild(input_tags[(input_tags.length) - 1]);
  }
}


var counttotr=0;
var totrows=[]

function makeTable()
{
  // var todel=document.getElementById('tab');
  // todel.remove();
  // if(table.length!=0)
  // {
  // // table.removeChild();
  // document.table.removeChild();
  // }
  // document.createElement(table)
  // const element = document.getElementById("tab");
  // element.remove();
  
   table= document.getElementById('tab');
  //  if(countm!=0)
  // { table.removeChild();
  // }

   for(var i=0;i<counttotr;i++)
    {
      table.removeChild(totrows[i]);
      
    }
    counttotr=0;
 
   row=document.getElementById('rows').value;
   col=document.getElementById('cols').value;
  console.log(row+" "+col);
  finalarray.push({row:row,col:col});

  for(var rowidx=0;rowidx<row;rowidx++)
  {
    var tr=document.createElement('tr');
    for(var colidx=0;colidx<col;colidx++)
    {
           var td=document.createElement('td');
          //  var inbox=document.createTextNode("node no"+colidx);
           var tosup=rowidx*col+colidx+1;
           tosup=tosup.toString();
          var inbox=document.createTextNode(tosup+"*");

           td.appendChild(inbox);
           tr.appendChild(td);
    }
    totrows[counttotr++]=tr;
    table.appendChild(tr);
  }
}


document.getElementById('make').addEventListener('click',makeTable)


const ws = new WebSocket("ws://localhost:8082");
ws.binaryType = "arraybuffer";

var jsonContent = {"abc":2};

var finContent = [0];

ws.addEventListener("message",(e) => {
  // console.log(e.data);
  if(e.data.byteLength !== 0){
    console.log(JSON.parse(e.data));
    finContent = JSON.parse(e.data);
  }
});
function fsave()
{
  finContent.push(finalarray);
  jsonContent=JSON.stringify(finContent);
  // console.log(jsonContent);
  ws.send(jsonContent);
  location.replace("./index.html")
}

document.getElementById('finalsave').addEventListener('click',fsave)
