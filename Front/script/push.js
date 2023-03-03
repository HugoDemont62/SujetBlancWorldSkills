var url = "http://127.0.0.1:8000/api/Task"

const form = document.querySelector('form');

async function postTask(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return response.json()
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {
        name: formData.get("titre"),
        description: formData.get("description"),
        status: formData.get("status"),
    };
    console.log(data);
    postTask(url, data);
    window.location.href = "/Front/index.html"
});

