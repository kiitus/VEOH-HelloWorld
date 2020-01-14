function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve,ms));
}

class worker
{

    n_food;

    constructor(n_food)
    {
        this.n_food = n_food;
    }

    do_work = async (duration) => {
        if(this.n_food > 0)
        {
            this.n_food--;
            console.log("Työ tehty");

            await sleep(duration);
           
            
        }
        else
        {
            console.log('Ruoka loppu');
        }
    }
    foodLeft = async () =>  
    {console.log('Ruokaa jäljellä ' + this.n_food);
    }
}

 let tyomies = new worker(2);

 tyomies.do_work(10000).then(()=>{tyomies.foodLeft()}).then(tyomies.do_work(10000).then(tyomies.foodLeft()));
 

