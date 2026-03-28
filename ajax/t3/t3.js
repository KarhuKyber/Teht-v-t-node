async function updateUser() {
  const apiKey = 'reqres_4b50ff99a6b343a18c802393f3bc790d';

  const updatedData = {
    name: 'Matti Meikäläinen',
    job: 'Senior Koodari',
  };

  try {
    // Huomaa URL:n lopussa id /2
    const response = await fetch('https://reqres.in/api/users/2', {
      method: 'PUT',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) throw new Error('Päivitys epäonnistui');

    const result = await response.json();

    // Konsoliin pitäisi tulla olio, jossa on "updatedAt" kenttä
    console.log('Tehtävä 3 - Päivitetty käyttäjä:', result);
  } catch (error) {
    console.error('Virhe:', error.message);
  }
}

updateUser();
