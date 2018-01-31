# Chat Wars Resources AutoBuy #

### Instructions: ###
  - Open Telegram's web client on ChatWars' chat. 
  - Open your browser console (`Ctrl + Shift + J` on Google Chrome)
  - Paste the code 
  - Call function `stock_monitor(resource_code, quantity, max_price [, gold]);`
    - eg: `stock_monitor('01', 10, 6);`
    - eg2: `stock_monitor('01, 0, 6, 60);`
#### Params: ####
  - _resource_code_: the code for the resource, eg: if I want Thread, then it must be "01"; 
  - _quantity_: the amout of that resource that you want to buy
  - _max_price_: the maximum price you are willing to pay
  - _gold_ [**optional**]: if you set this param, than it will ignore the "quantity" param and buy as many resources you can with the amount of gold you set as param
  
