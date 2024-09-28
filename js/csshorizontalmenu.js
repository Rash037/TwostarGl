var cssmenuids=["navmenu"] //Enter id(s) of CSS Horizontal UL menus, separated by commas
var csssubmenuoffset=-3 //Offset of submenus from main menu. Default is 0 pixels.

function createcssmenu2(){
for (var i=0; i<cssmenuids.length; i++){
  var ultags=document.getElementById(cssmenuids[i]).getElementsByTagName("ul")
    for (var t=0; t<ultags.length; t++){
			ultags[t].style.top=ultags[t].parentNode.offsetHeight+csssubmenuoffset+"px"
    	var spanref=document.createElement("span")
			spanref.className="arrowdiv"
			spanref.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"
			ultags[t].parentNode.getElementsByTagName("a")[0].appendChild(spanref)
    	ultags[t].parentNode.onmouseover=function(){
					this.style.zIndex=999999999999999
    	this.getElementsByTagName("ul")[0].style.visibility="visible"
					this.getElementsByTagName("ul")[0].style.zIndex=99999
    	}
    	ultags[t].parentNode.onmouseout=function(){
					this.style.zIndex=0
					this.getElementsByTagName("ul")[0].style.visibility="hidden"
					this.getElementsByTagName("ul")[0].style.zIndex=99999999999999
    	}
    }
  }
}

if (window.addEventListener)
window.addEventListener("load", createcssmenu2, false)
else if (window.attachEvent)
window.attachEvent("onload", createcssmenu2)















var cssmenuids_a=["navmenu_a"] //Enter id(s) of CSS Horizontal UL menus, separated by commas
var csssubmenuoffset_a=-1 //Offset of submenus from main menu. Default is 0 pixels.

function createcssmenu_a(){
for (var i_a=0; i_a<cssmenuids_a.length; i_a++){
  var ultags_a=document.getElementById(cssmenuids_a[i_a]).getElementsByTagName("ul")
    for (var t_a=0; t_a<ultags_a.length; t_a++){
			ultags_a[t_a].style.top=ultags_a[t_a].parentNode.offsetHeight+csssubmenuoffset_a+"px"
    	var spanref_a=document.createElement("span")
			spanref_a.className="arrowdiv"
			spanref_a.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"
			ultags_a[t_a].parentNode.getElementsByTagName("a")[0].appendChild(spanref_a)
    	ultags_a[t_a].parentNode.onmouseover=function(){
					this.style.zIndex=999999999999999
    	this.getElementsByTagName("ul")[0].style.visibility="visible"
					this.getElementsByTagName("ul")[0].style.zIndex=9999999999999999
    	}
    	ultags_a[t_a].parentNode.onmouseout=function(){
					this.style.zIndex=0
					this.getElementsByTagName("ul")[0].style.visibility="hidden"
					this.getElementsByTagName("ul")[0].style.zIndex=999999999999999
    	}
    }
  }
}

if (window.addEventListener)
window.addEventListener("load", createcssmenu_a, false)
else if (window.attachEvent)
window.attachEvent("onload", createcssmenu_a)


