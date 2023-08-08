export const fetchAllPlayers = async () => {
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // Return the whole response object
    } catch (error) {
      console.error('Error fetching players:', error);
      return null; // Return null in case of an error
    }
  };
  
  
  export const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players/${playerId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched player data:', data);
      return data; // Return the whole player data object
    } catch (error) {
      console.error('Error fetching player:', error);
      return null;
    }
  };  

  export const deletePlayer = async (playerId) => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players/${playerId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data; // Return the response object
    } catch (error) {
      console.error(`Error deleting player #${playerId}:`, error);
      return null; // Return null in case of an error
    }
  };  

  const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A';

  export const createNewPlayer = async (playerData) => {
    try {
      const response = await fetch(`${APIURL}/players`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data; // Return the response data
    } catch (error) {
      console.error('Error creating new player:', error);
      return null;
    }
  }; 

  const fetchFilteredPlayers = async () => {
    try {
      if (searchText) {
        const response = await fetch(`https://your-api-url.com/players?search=${searchText}`);
        const data = await response.json();
        if (data.success) {
          const filteredPlayers = data.data.players.filter(
            (player) =>
              player.name.toLowerCase().includes(searchText.toLowerCase()) ||
              player.id.toString().includes(searchText)
          );
          setFilteredPlayers(filteredPlayers);
        } else {
          console.error('Error fetching filtered players:', data.error);
        }
      } else {
        setFilteredPlayers([]); // Clear the filtered players when search text is empty
      }
    } catch (error) {
      console.error('Error fetching filtered players:', error);
    }
  };
  