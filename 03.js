let order = 
{
   id:1234,
   message:'My order', 
   delivered:false
}


function summerize_order(id,message,delivered)
{
typeof(id);
var summary = 'Order id: ´+ id + 'message: '+message + 'delivered '+ delivered;
return summary;

}

const order_summary = summerize_order(order.id,order.message,order.delivered);

console.log(order_summary);

order.delivered = true;


const order_summary_2 = summerize_order(order.id,order.message,order.delivered);

console.log(order_summary_2);

