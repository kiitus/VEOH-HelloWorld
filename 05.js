class order
{
  delivered = false;

 constructor(id,message){
 this.id = id;
 this.message =message;
 }

   summarize()
  {
	const summary = 'Order id: ´+ this.id + 'message: '+ this.message + 'delivered '+ this.delivered;
	return summary;
   }
summarize2 = () => {
	const summary = 'Order id: ´+ this.id + 'message: '+ this.message + 'delivered '+ this.delivered;
	return summary;
  }
}


let order_obj = new order(1234,'My order')

const order = order_obj.summarize();


const order2 = order_obj.summarize2();




