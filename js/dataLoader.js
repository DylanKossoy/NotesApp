


export async function getAllNotes() {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    let response = await fetch('./data/notes.json', options);

    console.log(response.status);

    if(response.status === 200) {
        let data = await response.json();

        console.log('data ' + data);
    } else {
        console.log('error ' + response.status)
    }

}


