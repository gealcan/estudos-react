//simular a autenticação do usuario
// como funciona: geralmente po usuario se autentica na nossa aplicação
// Nossa aplicação leva esses dados de 'email' ou 'password' para um servidor( 'ruby')
// E esse servidor nos retorna um token JWT (criptografado)
// esse token é guardado no storage da nossa aplicação( geralemte no local storage)
// para toda requisicao subsequente, ele envia esse token junto
// para nosso backend saber que o usuário está autenticado
// vamos criar uma função para saber se o usuario esta autenticado ou nao

export const isAuthenticated = () => true; // sempre autenticado, por enquanto
