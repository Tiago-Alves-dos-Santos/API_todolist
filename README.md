

<a name="readme-top"></a>

<!-- PROJETO LOGO -->
<br />
<div align="center">


  <h3 align="center">ToDoList</h3>

  <p align="center">
    Sistema de lista de tarefas com consumo de api laravel
  </p>

  [![portfolio][portfolio-shield]][portfolio-url]
  [![linkedin][linkedin-shield]][linkedin-url]
</div>




<!-- MENU -->
<details>
  <summary>MENU</summary>
  <ol>

    <li><a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a></li>
    <li><a href="#instalação">Instalação</a></li>
    <li><a href="#versão-atual">Versão atual</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>


## Tecnologias Utilizadas
1. FRONT-END
    * HTML 5
    * CSS 3
    * SASS
    * VUE 3 / VUE-CLI 5.0.8
    * VUETIFY 3
    * PINIA
    * NODE 20.10.0(LTS)
    * NPM 10.2.3
2. BACK-END
    * PHP 8.2.7
    * LARAVEL 10
3. LARAVEL
    * SANCTUM



<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- GETTING STARTED -->
## Instalação

1. Certifique-se de ter instalado na sua máquina o php e node(npm) correto, se usa docker verficar a imagem
2. Clone do projeto
    ~~~git
        git clone url_projeto -b main || git clone --branch <branc_tag_name> <repo_url>
    ~~~
3. Duplique o arquivo `.env.example` e retire o `.example`
4. Configure as variaveis de conexão com o banco de dados no `.env`
5. Dependências
    ~~~php
        composer install 
    ~~~
6. Chave do aplicativo 
   ~~~php
        php artisan key:generate 
   ~~~
7. Migrations e Seed
    ~~~
        php artisan migrate --seed
    ~~~
8. Execute 
    ~~~
        php artisan serve
    ~~~


<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

## Versão atual
:heavy_check_mark:  v1.0.0@alpha


<!-- LICENÇA -->
## Licença
Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>



<!-- CONTACT -->
## Contato
Tiago Alves dos Santos

Formas de contato: 
<br>

[![Whatsapp][whatsapp-shield]][whatsapp-url]
[![Telegram][telegram-shield]][telegram-url]

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>



<!-- AGRADECIMENTOS -->
<!-- ## Agardecimentos

Use este espaço para listar os recursos que você considera úteis e aos quais gostaria de dar crédito. Eu incluí alguns dos meus favoritos para começar!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p> -->

### Observação
URL para API `<url_projeto:porta/api/>`

<!-- MARKDOWN -->
[whatsapp-shield]: https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white
[whatsapp-url]: https://wa.link/h5vlzo
[telegram-shield]: https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white
[telegram-url]: https://t.me/TiagoAlves2001
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/tiago-alves-dos-santos-de-oliveira-96699a189/
[portfolio-shield]: https://img.shields.io/badge/PORTFOLIO-%20CLIQUE%20AQUI%20-%20BLACK
[portfolio-url]: https://tiago-alves-dos-santos.github.io/portfolio/#about

