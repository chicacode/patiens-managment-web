
export const reviewBudget = (budget, remain) =>{
    let clase;

    if((budget / 4) > remain){
        clase = 'alert alert-danger';
    }else if((budget / 2) > remain){
        clase = 'alert alert-warning';
    }else{
        clase = 'alert alert-success';
    }
    return clase;
}