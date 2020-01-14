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
            this.n_food--;
           console.log("Työ tehty");
            
        }
        else
        {
            console.log('Ruoka loppu');
        }
    }
    foodLeft = async () =>  
    {console.log('Ruokaa jäljellä ' + this.n_food);
    return this.n_food;
    }
}

 let tyomies = new worker(1);

 tyomies.do_work(0).then(()=>{ return tyomies.foodLeft()}).then((ruokaa) => {console.log(ruokaa)});
 console.log(1);
 tyomies.do_work(0).then(()=>{ return tyomies.foodLeft()}).then((ruokaa) => {console.log(ruokaa)});
 console.log(2);
 

