


//Problem 3


var greeting = function() 
{
    var current = new Date();
    var currentHours = current.getHours() + 1;
    
    if (currentHours >= 1 && currentHours < 12) 
    {
        return 'Good morning';
    }
    else if (currentHours >= 12 && currentHours < 6) 
    {
        return 'Good afternoon';
    }
    else 
    {
        return 'Good evening';
    }
};