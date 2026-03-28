async function createUser() {
  const apiKey = 'reqres_4b50ff99a6b343a18c802393f3bc790d';

  const userData = {
    name: 'Matti Meikäläinen',
    job: 'Koodari',
  };

  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error('Käyttäjän luonti epäonnistui');

    const result = await response.json();

    // Tulostetaan vastaus konsoliin
    console.log('Tehtävä 2 - Luotu käyttäjä:', result);
  } catch (error) {
    console.error('Virhe:', error.message);
  }
}

createUser();
