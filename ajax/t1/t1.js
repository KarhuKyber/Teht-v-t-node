async function fetchUsers() {
  const apiKey = 'reqres_4b50ff99a6b343a18c802393f3bc790d';

  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'GET',
      headers: {
        'x-api-key': apiKey, // Lisätään avaimesi tänne
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Haku epäonnistui: ${response.status}`);
    }

    const data = await response.json();
    console.log('Tehtävä 1 - Käyttäjädata avaimella:', data);
  } catch (error) {
    console.error('Virhe tiedon haussa:', error.message);
  }
}

fetchUsers();
