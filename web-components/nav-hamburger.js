
let styles = `
<style>
  .hamburger {
    position: relative;
    width: 32px;
    height: 18px;
    display: block;
    overflow-x:hidden;
    
  }

  .hamburger::before, .hamburger::after, .middle::before {
    content: '';
    position: absolute;
    width: 100%;
    border-bottom: 2px solid black;
    right: 0;
    transition: transform .4s cubic-bezier(.88, .08, .08, .99);
  }

  .hamburger:hover::before, .hamburger:hover::after {
     transform: translateX(0px);
  }

  .hamburger::before {
    top: 0;
    transform: translateX(14px);
  }

  .middle::before {
    top: 50%;
    transform: translateY(-50%);
  }

  .hamburger::after {
    bottom: 0;
    transform: translateX(8px);
  }
</style>
`
let NavHamburgerTemplate = document.createElement('template');
NavHamburgerTemplate.innerHTML = `
  ${styles}
  <span aria-label="A navigation icon to toggle the mobile menu" class="hamburger">
    <span class="middle"></span>
  </span>
`

class NavHamburger extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(NavHamburgerTemplate.content.cloneNode(true));
  }
}

window.customElements.define('nav-hamburger', NavHamburger)