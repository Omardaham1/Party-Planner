//  A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties (events) that are happening.



const partyElement = document.getElementById('party')
console.log(partyElement)

const getParties = async () => {
  const response = await fetch(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-FTB-ET-WEB-FT/events"
  );
  
  const data = await response.json();
  displayParties(data.data);

}

getParties();


const displayParties = (parties)=> {
console.log(parties)
parties.forEach(party => {
    const h2 = document.createElement('h2');
    h2.innerText = party.name
    partyElement.append(h2)
  
const date = document.createElement('p');

    date.innerText = 'Date: ' + party.date.split('T')[0]
    partyElement.append(date)

const time = document.createElement('p');
time.innerText= 'Time: ' + party.date.split('T')[1].split('.')[0];
partyElement.append(time)


const location = document.createElement('p')

location.innerText= 'Location: ' + party.location
partyElement.append(location)


const description = document.createElement('p')
description.innerText= party.description
partyElement.append(description)


});


}