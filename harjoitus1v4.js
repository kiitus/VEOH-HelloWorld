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
            
            await sleep(duration);
            console.log("Työ tehty");
           return this.n_food--;
            
        }
        else
        {
            console.log('Ruoka loppu');
            return 0;
        }
  
    }
  
}

 let tyomies = new worker(0.5);

 tyomies.do_work(10000).then((maara)=>{console.log(maara)}).then(tyomies.do_work(10000).then((maara)=>{console.log(maara)}));
 

