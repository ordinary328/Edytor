const markup = `	
<div class="sample-toolbar">
<a href="javascript:void(0)" onclick="format('bold')"><span class="fa fa-bold fa-fw"></span></a>
<a href="javascript:void(0)" onclick="format('italic')"><span class="fa fa-italic fa-fw"></span></a>
<a href="javascript:void(0)" onclick="format('insertunorderedlist')"><span class="fa fa-list fa-fw"></span></a>
<a href="javascript:void(0)" onclick="setUrl()"><span class="fa fa-link fa-fw"></span></a>
<span><input id="txtFormatUrl" placeholder="url" class="form-control"></span>
</div>

 <div class="editor" id="editor1" contenteditable="true" data-text="Enter comment...."></div>
</div>`;

document.body.innerHTML = markup;


// window.addEventListener('load', function(){
//   document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
//     });

function format(command, value) {
  document.execCommand(command, false, value);
}

function setUrl() {
  var url = document.getElementById('txtFormatUrl').value;
  var sText = document.getSelection();
  document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sText + '</a>');
  document.getElementById('txtFormatUrl').value = '';
}