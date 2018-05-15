
export function callPostAPI(url, params) {
    let data = {username: 'example'};

    return fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(params), // data can be string or object
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
}

export function callGetAPI(url, params) {
    let reqOption = {
        method: 'GET', // or 'PUT'
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    if(params) {
        reqOption.body = JSON.stringify(params) // params can be string or object
    }

    return fetch(url, reqOption)
        .then(res => res.json())
        .catch(error => {
            console.log('Error:', error)
            alert("Something went wrong")
        })
        .then(response => {
            return response
        });
}

