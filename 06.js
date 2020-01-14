
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
	const summary = 'Order id:' + this.id + 'Message' + this.message + 'delivered '+ this.delivered;
	return summary;
  }
}


let order_obj = new order(1234,'My order')


//then liittyy asynciin! eli ajetaan kun valmis
//(para1,pare2) => { code }
//Async ajaa seuraavia rivejä kunnes valmis
order_obj.summarize().then((summary) => { 
   console.log(summary);
});




