var states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']
var unionTerritories = [
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Jammu and Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry'
]

function loadStatesAndUT(){

    var statesListElement = document.getElementById('listOfStates');

    statesListElement.innerHTML = '';

    states.forEach(state => {
        var stateListItem = '<li>' + 
                                '<img src="' + state + '.jpg" alt="Picture of ' + state + '">' + 
                                state + 
                            '</li>';
        statesListElement.innerHTML += stateListItem;
    });

    var utListElement = document.getElementById('listofUnionTerritories');
    
    utListElement.innerHTML = '';

    unionTerritories.forEach(ut => {
        var utListItem = '<li>' + 
                                '<img src="' + ut + '.jpg" alt="Picture of ' + ut +'">' + ut + '</li>';
        utListElement.innerHTML += utListItem;
    });
}