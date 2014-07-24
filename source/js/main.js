(function(){

    var app = {
        /*---переменные---*/
        var: {
            $btn: $('#result_btn'), //кнопка которую будем менять
            cur_data : {}, //объект хринит копии объектов css свойств текущего соствояния
            //настройки по умолчанию
            default_data: {

            },
            //элементы с которыми будем работаь (бегунки и пр.)
            $border_radius: $('#option-border-radius'),
            $border_size: $('#option-border-size')
        },
        init: function(){
            this.var.$border_radius.slider({
                range: "max",
                min: 0,
                max: 40,
                step: 1
            });
            this.var.$border_size.slider({
                range: "max",
                min: 0,
                max: 40,
                step: 1
            });
            this.events();
        },
        events: function(){
            this.var.$border_radius.on( "slide", this.option_border_radius);
            this.var.$border_size.on( "slide", this.option_border_size);
        },
        option_border_radius: function(e, ui){
            console.log(ui.value);
        },
        option_border_size: function(e, ui){
            console.log(ui.value);
        }
    }

   app.init();
}());
/*var cur_data = {};
$(document).ready(function(){
	
	var $btn = $('#result_btn');
	

	var default_text = 'TEXT';
	var default_obj = {
		'border-radius': 0,
		'font-size': '20px',
		'padding': '20px'
	}

	$( "#border-radius" ).slider({
		range: "max",
		min: 0, 
		max: 40,
		step: 1,
		slide: function(e, ui){			
			$('#value-option-border-radius').text(ui.value + 'px');
			var obj = border_radius(ui.value);
			$btn.css(obj);
			cur_data['border-radius'] = obj;
			get_css();
		}
	});

	$( "#border-size" ).slider({
		range: "max",
		min: 0, 
		max: 40,
		step: 1,
		slide: function(e, ui){			
			$('#value-option-border-size').text(ui.value + 'px');
			var obj = border('solid', ui.value, '#333');
			$btn.css(obj);
			cur_data['border'] = obj;
			get_css();
		}
	});
    

    	$('#text_btn').on('keyup', function(){
    		$btn.text($(this).val());
    	});

    	$btn.css(default_obj).text(default_text);
});


function border_radius(x1, x2, x3, x4){
	var obj ={
		'border-radius': x1 + 'px',
		'-moz-border-radius': x1 + 'px'
	};	
	return obj;
}
function border(type, size, color){
	var obj = {
		'border': type + ' ' + size + 'px ' + color
	}	
	return obj;
}

function get_css(){	
	var str = '';
	$.each(cur_data, function(i, el){
		$.each(el, function(property, value){
			str += property + ': ' + value + ";\n"
		});
	});
	console.log(str);
}
*/