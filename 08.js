
//https://github.com/yliharsilamikko/VEOH-HelloWorld/

function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve,ms));
}

class order
{
    products = [];

  delivered = false;

 constructor(id,message){
 this.id = id;
 this.message =message;
 

 }


summarize = async () => {
	await sleep(2000);	 //Tahallinen viive jotta async näkyy!  (Promise ja promise(pending)
	let summary = 'Order id: ' + this.id + ' Messag:' + this.message + ' delivered :'+ this.delivered;
    summary += ' Products: [';
    this.products.forEach((product,index) => {
        summary += product +",";
    })
    summary+="]";
	return summary;
  }
deliver = async () =>{
  await sleep(1000);
  this.delivered = true;
}

add_product = (product) => {
    this.products.push(product);
}
}


let order_obj = new order(1234,'My order')
order_obj.add_product('kavhi');
order_obj.add_product('maito');


order_obj.deliver().then(()=>{

    console.log('delivered');
    
    return order_obj.summarize();
}).then((summary)=>{console.log(summary)});






