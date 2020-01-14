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

    do_work =  (duration) => {
        if(this.n_food > 0)
        {

          //  await sleep(duration);
            this.n_food--;
           console.log("Työ tehty");
            
        }
        else
        {
            console.log('Ruoka loppu');
        }
    }
    foodLeft =  () =>  
    {console.log('Ruokaa jäljellä ' + this.n_food);
    return this.n_food;
    }
}

 let tyomies = new worker(2);

 tyomies.do_work(0);
 tyomies.foodLeft();
 tyomies.do_work(0);
 tyomies.foodLeft();
 tyomies.do_work(0);
 tyomies.foodLeft();
 tyomies.do_work(0);
 tyomies.foodLeft();

