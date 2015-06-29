/*************************************************************
SIRA PROJECT
Inline Editing Form
*************************************************************/

$(document).ready(function(){
						 
					/*======================= SELECT BOX ===============================*/
					
					
					$("select").each(function(){
					
							$(this).css('display','none');
							
							var valueSelect=$(this).find('option').filter(':selected').text();
					
							$(this).before("<span class='editSelect'>"+ valueSelect+"</span>");
							
					});
					
					$('.editSelect').each(function(){
					
						$(this).click(function(){
					
							var currentID = $(this).next('select').attr('id');
							
							console.log(currentID);
							
							$(this).css('display','none');
							
							$("#"+currentID).css({'display':'inline','border':'1px solid #E0E0E0','padding':'0.15em 0px'});
							
							$("#"+currentID).focus();
							
							$("#"+currentID).blur(function() {
								
								$("#"+currentID).css({'display':'none'});
								
								var value=$("#"+currentID).find('option').filter(':selected').text();
															
								$("#"+currentID).prev(this).text(value);
								$("#"+currentID).prev(this).css({'display':'inline'});
								
							});
						});
					});
					
					/*================================================================*/
					
					/*======================= TEXTAREA ===============================*/
					
					
					$("textarea").each(function(){
					
							$(this).css('display','none');
							
							var valueText=$.trim($(this).val());
							if(valueText=='')
							{
								$(this).before("<span class='editText' style='font-style:italic;'>Click to enter text...</span>");
							}
							else
							{
								$(this).before("<span class='editText'>"+ valueText+"</span>");
							}
							
					});
					
					$('.editText').each(function(){
					
						$(this).click(function(){
					
							var currentID = $(this).next('textarea').attr('id');
							
							console.log(currentID);
							
							$(this).css('display','none');
							
							$("#"+currentID).css({'display':'block','border':'1px solid #E0E0E0','line-height':'19px'});
							
							$("#"+currentID).autosize();
														
							$("#"+currentID).focus();
							
							$("#"+currentID).blur(function() {
								
								$("#"+currentID).css({'display':'none'});
								
								var value= $.trim($("#"+currentID).val());
								
								if (value=='')
								{
									$("#"+currentID).prev(this).text('Click to enter your text...');
									$("#"+currentID).prev(this).css({"font-style":"italic","display":"inline-block"});
								}
								else
								{
																							
									value=value.split("\n\n").join("<br><br>");
									
									$("#"+currentID).prev(this).html(value);
									$("#"+currentID).prev(this).css({"font-style":"normal",'display':'inline'});
								}
							});
						});
					})
					/*================================================================================*/
					
					/*============================= INPUT ============================================*/
					
					
					
						$("input[type=text], input[type=password]").each(function(){
						
							$(this).css({'border':'none','padding-left':'0'});
							
							var value= $.trim($(this).val());
							
							if (value=='')
							{
								$(this).val('Click to enter your value...').css({'font-style':'italic'});
							}
							
						
						});
						
						
						$("input[type=text], input[type=password]").focus(function () {
				
							var readAttr=$(this).attr("readonly");
							
							var value=$.trim($(this).val());
							
							if (value=='Click to enter your value...' || value=='')
							{
								$(this).val(null).css('font-style','normal');
							}
							
							
														
							if (readAttr==null)
							{
								$(this).css({'border':'1px solid #E0E0E0'});
							}
							
							else
							{
								$(this).attr('disabled', 'disabled');
								
								$(this).css({'cursor':'default','background-color':'transparent'});
								
							}
							

						});
						
						$("input[type=text], input[type=password]").blur(function () {
							
							var value=$.trim($(this).val());
								
							if (value=='')
							{
								$(this).val('Click to enter your value...').css({"font-style":"italic",'border':'none'});
							}
							
							else
							{
								$(this).css({'border':'none','padding-left':'0','font-style':'normal'});
							}
						});
						
					
					/*===============================================================================*/
});