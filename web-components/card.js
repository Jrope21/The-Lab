let UserCardTemplate = document.createElement('template');
UserCardTemplate.innerHTML = `
    <style>
        h1 {
            color: blue;
        }
    </style>

    <div class="user-card">
        <h1></h1>
        <h2><slot name="title"> default title </slot></h2>
        <p class="content"><slot name="content"> default content </slot></p>
        <button id="toggle-info">Hide info son</button>
    </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(UserCardTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');
    }

    connectedCallback() {
        this.shadowRoot.getElementById('toggle-info')
            .addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback() { // if taken out of dom it will remove events
        this.shadowRoot.getElementById('toggle-info')
            .removeEventListener();
    }

    toggleInfo() {

        const content = this.shadowRoot.querySelector('.content');
        const toggle = this.shadowRoot.getElementById('toggle-info');

        if(this.showInfo) {
            content.style.display = 'none';
            toggle.innerText = 'show info';
        } else {
            content.style.display = 'block';
            toggle.innerText = 'hide info';
        }

        this.showInfo = !this.showInfo;
    }   
}

window.customElements.define('user-card', UserCard);