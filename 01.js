var order_id = 1234;
var order_message ='My order';
var order_delivered = false;

function summerize_order(id,message,delivered)
{
typeof(id);
var summary = 'Order id: ´+ id + 'message: '+message + 'delivered '+ delivered;
return summary;

}

var order_summary = summerize_order(order_id,order_message,order_delivered);

console.log(order_summary);