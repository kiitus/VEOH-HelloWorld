class order
{
  delivered = false;

 constructor(id,message){
 this.id = id;
 this.message =message;
 }
}


let order_obj = new order(1234,'My order')

function summerize_order(id,message,delivered)
{
typeof(id);
var summary = 'Order id: ´+ id + 'message: '+message + 'delivered '+ delivered;
return summary;

}

const order_summary = summerize_order(order_obj.id,order_obj.message,order_obj.delivered);

console.log(order_summary);

order_obj.delivered = true;


const order_summary_2 = summerize_order(order_obj.id,order_obj.message,order_obj.delivered);

console.log(order_summary_2);

