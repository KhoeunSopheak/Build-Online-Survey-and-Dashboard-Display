async function fetchData() {
  const url = 'https://wmad-survey-backend.vercel.app/api/form-answers/question/1/answers?search_created_by=sopheakkhoeun';
  const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
      }
  };

  try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);

      throw error;
  }
}

fetchData()
  .then(fetchData => {
      console.log('data:', fetchData);
      let count = fetchData.length;
      console.log('======>>',count);
        document.getElementById('boxtext').innerHTML+=`
        <p>${count}</p>
        `
      }
  )
  .catch(error => {
      console.error('Error getting data:', error);
  });

  async function Data() {
    const url = 'https://wmad-survey-backend.vercel.app/api/form-answers/question/1/answers?search_created_by=sopheakkhoeun&search_answer=yes';
    const options = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
        }
    };
  
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
  
        throw error;
    }
  }
  
  Data()
    .then(Data => {
        console.log('data:', Data);
        let count = Data.length;
        console.log('======>>',count);
          document.getElementById('boxtext1').innerHTML+=`
          <p>${count}</p>
          `
        }
    )
    .catch(error => {
        console.error('Error getting data:', error);
    });



