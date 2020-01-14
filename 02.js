const order_id = 1234;
const order_message ='My order';
let order_delivered = false;

function summerize_order(id,message,delivered)
{
typeof(id);
var summary = 'Order id: ´+ id + 'message: '+message + 'delivered '+ delivered;
return summary;

}

const order_summary = summerize_order(order_id,order_message,order_delivered);

console.log(order_summary);

order_delivered = true;


const order_summary_2 = summerize_order(order_id,order_message,order_delivered);

console.log(order_summary_2);


//Seuraava ei toimi koska const muuttuja
order_id=5432;

const order_summary_3 = summerize_order(order_id,order_message,order_delivered);

console.log(order_summary_3);