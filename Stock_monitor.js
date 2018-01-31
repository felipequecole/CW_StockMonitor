
	function stock_send_request(resource_code, quantity, max_price, gold)
	{
	  	// compose message
		input = $('.composer_rich_textarea');
		input.text('/t_' + resource_code);
		// send it 
		$('.im_submit').trigger('mousedown');
		setTimeout(function(){
			process_stock(resource_code, quantity, max_price, gold)
		}, 3000); // wait 3 seconds for response
	}

	function process_stock(resource_code, quantity, max_price, gold)
	{
	   // get response message
		response = $('.im_message_text').last();
		// get smallest price
		cheaper = response.contents()[3];
		cheaper = cheaper.wholeText;
		price = cheaper.split("for");
		price = price[price.length-1];
		if (price <= max_price) {
			if (gold != false) {
				quantity = Math.floor(gold / price); 
			}
			// compose buy message
			input = $('.composer_rich_textarea');
			input.text('/wtb_' + resource_code + '_' + quantity.toString());
			// send it
			$('.im_submit').trigger('mousedown');
		}
		else {
			// if it's still expensive, wait 5 seconds and try again
			setTimeout(function(){
				stock_monitor(resource_code, quantity, max_price, gold)
			}, 5000);
		}
	}


	function stock_monitor(resource_code = '01', quantity = 1, max_price = 6, gold = false) 
	{
		stock_send_request(resource_code, quantity, max_price, gold);
	}
