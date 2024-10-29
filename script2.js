document.getElementById('infoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const cardHTML = `
        <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('cardContainer').insertAdjacentHTML('beforeend', cardHTML);

    // Limpiar el formulario
    document.getElementById('infoForm').reset();
});
