let partial00A = `       
<nav class="menu">
  <label for="#title"><img src="./img/logo/logo1_base.png" alt="logo libretaPET" class="logoBrand" />
  </label>
  <ul class="menu__item ">
    <li class="item">    <input type="text" id="inputSearch" placeholder="MARCA BUSCADA">

   </ul>

  <span class="btn__menu" id="buttonMenu">
      <i class="fa fa-bars"></i>
    </span>
</nav>
`
let partial00B = `
  <footer>
    <ul class="social-icons-list">
    <li>
      <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
    </li>
    <li>
      <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
    </li>
    <li>
      <a href="mailto:termoexemplo@gmail.com" class="social-link"><i class="fab fa-google-plus-g"></i></a>
    </li>
    <li>
      <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
    </li>
    </ul>
    
    </footer>
`
addEventListener('DOMContentLoaded', () => {

    let id00 = document.getElementById('id00A')
    let id01 = document.getElementById('id00B')

    id01.innerHTML += partial00B;

})


