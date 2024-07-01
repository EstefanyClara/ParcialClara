/* eslint-disable prettier/prettier */
export const getGameList = async () => {
    const url =
     'http://10.0.2.2:3000/api/games';
    try {
      const response = await fetch(url);
      if (response.ok) {
        const payload = await response.json();
        console.log(payload);
        return payload;
      } else {
        console.error('An error happened');
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };


  export const addGame = async (newGame) => {
    const url = 'http://10.0.2.2:3000/api/game';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame),
      });
      if (response.ok) {
        const payload = await response.json();
        return payload;
      } else {
        console.error('error');
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  export const deleteGame = async (gameId) => {
    const url= `http://10.0.2.2:3000/api/game/${gameId}`;
    
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      if (response.ok) {
        return true;
      } else {
        console.error('An error occurred while deleting the Game');
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

