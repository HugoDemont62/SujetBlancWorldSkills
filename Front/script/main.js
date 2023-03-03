var url = "http://127.0.0.1:8000/api/Task"
function deleteTask(id) {
        var url = "http://127.0.0.1:8000/api/Task"

    fetch(url + "/" + id, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                window.location.href = "/Front/index.html"
            } else {
                throw new Error('ERROR')
            }
        })
}

function modifPage(id) {
    window.location.href = "/Front/modif.html?id=" + id
}
function loadTasks() {
    console.log(url)
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('ERROR')
            }
        })
        .then(data => {
                data.forEach(task => {
                    const card =
                        "<div class='card'>" +
                        "<div class='card__title'>" +
                        "<h2>" + task.name + "</h2>" +
                        "</div>" +
                        "<div class='card__description'>" +
                        "<p>" + task.description + "</p>" +
                        "</div>" +
                        "<div class='card__status'>" +
                        "<p>" + task.status + "</p>" +
                        "</div>" +
                        "<div class='card__actions'>" +
                        "<button class='card__actions__delete' onclick='deleteTask("+task.id+")'>Supprimer</button>" +
                        "<button class='card__actions__edit' onclick='modifPage("+task.id+")'>Modifier</button>" +
                        "</div>" +
                        "</div>";
                    document.querySelector('.cards').innerHTML += card;
                })
            }
        )
}

loadTasks(url)
