var words = []

function getData() {
   const wordData = fetch('http://localhost:3001/api/v1/words')
        .then(resp => resp.json())

    Promise.all([wordData])
        .then((data) => {
            data[0].forEach((word) => {words.push(word)})
            setGame()
        })
        .catch(error => {
            console.log(error)
        })
}
