document.getElementById('createUser Form').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

    fetch("http://191.232.247.70:8080/usuario", { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            usuario: usuario, 
            email: email, 
            telefone: telefone, 
            senha: senha,
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Usuário criado com sucesso!');
        console.log(data);
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao criar usuário.');
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    fetch("http://191.232.247.70:8080/usuario/login", { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            email: email, 
            senha: senha 
        })
    })
    .then(response => response.text())
    .then(data => {
        alert(data); 
        console.log(data);
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao fazer login.');
    });
});