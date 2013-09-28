


//Problem 5




var movieSort = function(movies) 
{
    var sorted = [];
    
    for (var i = 0; i < sorted.length; i++) 
    {
        var splitItem = movies[i].split(',');
        var splitObject = 
        {
            'Title': splitItem[0],
            'Year': splitItem[1],
            'Votes': splitItem[2]
        }
        sorted.push(splitObject);
    }
    
    function sortYear(a, b)
    {
        if (a.Year === b.Year) 
        {
            return 0;
        }
        else if (a.Year > b.Year) 
        {
            return 1;
        }
        return -1;
    };
    
    sorted.sort(sortYear);
    
    return sorted;
};

var items = [
    'The Shawshank Redemption,1994,1043071',
    'The Godfather,1972,732416',
    'The Godfather: Part II,1974,474640',
    'Pulp Fiction,1994,806431',
    'The Dark Knight,2008,1017508',
    '12 Angry Men,1957,255846',
    'Schindler\'s List,1993,528900',
    'The Lord of the Rings: The Return of the King,2003,738931',
    'Fight Club,1999,791186',
    'Star Wars: Episode V - The Empire Strikes Back,1980,503348'
];
var itemSort = movieSort(items);
output.insertAdjacentHTML('beforeend', 'Movie Sort Test: ' + JSON.stringify(itemSort));