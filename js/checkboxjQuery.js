
$(document).ready(function(){

$(".niceCheck").mousedown(function() {

     changeCheck($(this));
     
});


$(".niceCheck").each(function() {
     
     changeCheckStart($(this));
     
});

                                        });

function changeCheck(el)
{
     var el = el,
          input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","0 -17px");	
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");	
		input.attr("checked", false)
	}
     return true;
}

function changeCheckStart(el){
var el = el,
	input = el.find("input").eq(0);
    if(input.attr("checked")) {
		el.css("background-position","0 -17px");	
		}
   return true;
}


 














//  $(document).ready(function(){

// $(".niceCheck").each(
// /* при загрузке страницы меняем обычные на стильные checkbox */
// function() {
     
//      changeCheckStart($(this));
     
// });

//                                         });


// function changeCheck(el)
// /* 
// 	функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, котрый отвечает за новый вид)
// 	el - span контейнер для обычного чекбокса
// 	input - чекбокс
// */
// {

// 	var el = el,
// 		input = el.find("input").eq(0);
		  
// 	if(el.attr("class").indexOf("niceCheckDisabled")==-1)
// 	{	
//    		if(!input.attr("checked")) {
// 			el.addClass("niceChecked");
// 			input.attr("checked", true);
// 		} else {
// 			el.removeClass("niceChecked");
// 			input.attr("checked", false).focus();
// 		}
// 	}
	
//     return true;
// }

// function changeVisualCheck(input)
// {
// /*
// 	меняем вид чекбокса при смене значения
// */
// var wrapInput = input.parent();
// 	if(!input.attr("checked")) {
// 		wrapInput.removeClass("niceChecked");
// 	}
// 	else
// 	{
// 		wrapInput.addClass("niceChecked");
// 	}
// }

// function changeCheckStart(el)
// /* 
// 	новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
// 	новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
// */
// {

// try
// {
// var el = el,
// 	checkName = el.attr("name"),
// 	checkId = el.attr("id"),
// 	checkChecked = el.attr("checked"),
// 	checkDisabled = el.attr("disabled"),
// 	checkValue = el.attr("value");
// 	checkTab = el.attr("tabindex");
// 	if(checkChecked)
// 		el.after("<span class='niceCheck niceChecked'>"+
// 			"<input type='checkbox'"+
// 			"name='"+checkName+"'"+
// 			"id='"+checkId+"'"+
// 			"checked='"+checkChecked+"'"+
// 			"value='"+checkValue+"'"+
// 			"tabindex='"+checkTab+"' /></span>");
// 	else
// 		el.after("<span class='niceCheck'>"+
// 			"<input type='checkbox'"+
// 			"name='"+checkName+"'"+
// 			"id='"+checkId+"'"+
// 			"value='"+checkValue+"'"+
// 			"tabindex='"+checkTab+"' /></span>");
	
// 	/* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */		
// 	if(checkDisabled)
// 	{
// 		el.next().addClass("niceCheckDisabled");
// 		el.next().find("input").eq(0).attr("disabled","disabled");
// 	}
	
// 	/* цепляем обработчики стилизированным checkbox */		
// 	el.next().bind("mousedown", function(e) { changeCheck($(this)) });
// 	el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck($(this)) });
// 	if($.browser.msie)
// 	{
// 		el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck($(this)) });	
// 	}
// 	el.remove();
// }
// catch(e)
// {
// 	// если ошибка, ничего не делаем
// }

//     return true;
// }
