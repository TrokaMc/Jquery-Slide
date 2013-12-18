$(document).on('ready', function(){
	velocidad = 1500;
	var t = setInterval(function(){siguiente();}, 3000)

	$('#ant').on('click', function(){
		var size = $('.slide').find('.elemento').size();
		$('.slide').find('.elemento').each(function(index, value){
			if($(value).hasClass('visible'))
			{
				$(value).slideUp(velocidad);
				$(value).removeClass('visible');
				
				if(index==0)
				{
					$($('.slide').find('.elemento').get(size-1)).slideDown(velocidad);
					$($('.slide').find('.elemento').get(size-1)).addClass('visible');
					return false;
				}
				else
				{
					$($('.slide').find('.elemento').get(index-1)).slideDown(velocidad);
					$($('.slide').find('.elemento').get(index-1)).addClass('visible');
					return false;
				}
			}
		});
	});
	
	$('#sig').on('click', function(){
		var size = $('.slide').find('.elemento').size();
		$('.slide').find('.elemento').each(function(index, value){
			if($(value).hasClass('visible'))
			{
				$(value).slideUp(velocidad);
				$(value).removeClass('visible');
				
				if(index+1<size)
				{
					$($('.slide').find('.elemento').get(index+1)).slideDown(velocidad);
					$($('.slide').find('.elemento').get(index+1)).addClass('visible');
					return false;
				}
				else
				{
					$($('.slide').find('.elemento').get(0)).slideDown(velocidad);
					$($('.slide').find('.elemento').get(0)).addClass('visible');
					return false;
				}
			}
		});
	});
});

function siguiente()
{
	var size = $('.slide').find('.elemento').size();
		$('.slide').find('.elemento').each(function(index, value){
			if($(value).hasClass('visible'))
			{
				$(value).slideUp(velocidad);
				$(value).removeClass('visible');
				
				if(index+1<size)
				{
					$($('.slide').find('.elemento').get(index+1)).slideDown(velocidad);
					$($('.slide').find('.elemento').get(index+1)).addClass('visible');
					return false;
				}
				else
				{
					$($('.slide').find('.elemento').get(0)).slideDown(velocidad);
					$($('.slide').find('.elemento').get(0)).addClass('visible');
					return false;
				}
			}
		});
}