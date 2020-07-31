## Router

    Para usar o Router devemos primeiro adicionar sua dependência, e envolver o app no index.js com o BrowserRouter.
    Logo após, devemos colocar o elemento Route, também puxando do "react-router-dom", assim como o BrowserRouter,
    Caso tenha dificuldades com o Route é so pesquisar a documentação do React Router

    Quando precisamos usar propriedades do router em elementos child, ou seja, que são filhos daquele que eu originalmente puxei
    o route e coloquei a url e o elemento para renderizar, precisamos primeiro importar o WithRouter() e envolver a exportação do elemento.

    Fica Assim:
    ** export default withRouter(elemento) **

    Quando usamos o Route com nossos componentes alguns paramêtros são passados para eles, e eles são:

## History

    Um dos métodos que o professor destacou, com eles podemos usar o metodo push pra fazer a troca do url e subsequentemente a troca
    do JSX renderizado.

## Match

    Quando entramos em uma url, o que vai ser renderizador depende se do url bater com o que se espera para renderizar certa parte,
    porém, quando temos paginas não exatas podemos não saber exatamente qual url está ativando a renderização do JSX.

## Location

    Vai mostrar o caminho completo da URL onde estamos.
