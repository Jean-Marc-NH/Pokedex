const backButton = document.querySelector('.back-button');

fetch('pedir.php')
.then(res => res.json())
.then(data => {



    //console.log(data);
    let info = '';
    data.map(item => {
        info += `
            <tr>
                <td>${item.numero}</td>
                <td>${item.Id}</td>
                <td>${item.Nombre}</td>
            </tr>
        `
    });

    document.getElementById('fav_data').innerHTML = info;
});

backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});