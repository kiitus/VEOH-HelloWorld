
//https://github.com/yliharsilamikko/VEOH-HelloWorld/

function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve,ms));
}

class order
{
  delivered = false;

 constructor(id,message){
 this.id = id;
 this.message =message;
 

 }


summarize = async () => {
	await sleep(2000);	 //Tahallinen viive jotta async näkyy!  (Promise ja promise(pending)
	const summary = 'Order id: ' + this.id + ' Messag:' + this.message + ' delivered :'+ this.delivered;
	return summary;
  }
deliver = async () =>{
  await sleep(1000);
  this.delivered = true;
}
}


let order_obj = new order(1234,'My order')


order_obj.deliver().then(()=>{

    console.log('delivered');
    
    return order_obj.summarize();
}).then((summary)=>{console.log(summary)});






