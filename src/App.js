import React, { useState } from "react";
import logo from './logo.svg';
import Fleche from './fleche.svg';
import './App.css';

const SVG = () => <div>
    <svg viewBox="0 0 392 914" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M146.636 99.782s-4.599-32.14-3.532-43.68c3.371-36.437 79.328-32.589 89.967-7.833 5.506 12.812-3.727 49.652-3.727 49.652l-82.708 1.861z" fill="#707070"/><g transform="translate(22.284 51.959) scale(1.77261)"><path d="M123.752 357.111c.472-9.586-19.957-47.828-31.752-88.111-13.621 43.482-37.188 76.352-36.513 88.889 1.68 31.237-7.515 80.447-9.147 99.701-.567 6.693 6.227 15.695.105 18.457-7.206 3.251-36.95 1.334-43.342-.643-3.911-1.21 1.722-7.623 4.985-10.093 3.631-2.75 18.682-6.216 18.682-6.216S25.609 368.726 25 353c-.539-13.921 31.77-108.402 31.77-108.402L60 185l-11.88-64.752L26.692 170l-9.584 68.983s2.764 2.791 3.926 4.581c1.12 1.726 4.925 10.443 4.777 12.157-.123 1.41-1.446 2.657-2.529 1.746-1.138-.958-3.361-6.551-3.361-6.551s1.031 9.313-.1 11.968c-.893 2.097-4.442 4.355-6.687 3.964-2.559-.446-7.462-1.143-8.67-4.103-1.922-4.711.519-24.352.519-24.352L1.692 170S21.289 101.231 25 90.128c2.691-8.05 39.145-9.154 48.102-13.987 4.694-2.533 7.543-3.297 7.475-13.038-.057-8.196-.951-8.64-5.092-12.636-4.51-4.353-7.59-16.473-5.374-23.359 2.378-7.387-.81-18.864 2.778-22.595 8.334-8.667 33.581-8.855 41.914-.188 4.822 5.015-.492 12.27 2.301 22.836 2.149 8.134-1.852 19.168-6.485 24.369-2.795 3.138-6.177 2.456-5.849 12.137.36 10.663 1.85 10.455 6.73 13.038 9.308 4.928 47.66 5.443 52.5 13.423 4.131 6.812 25.606 88.164 25.606 88.164l-13.171 61.636s-.046 12.859-.743 17.225c-.56 3.512-3.128 8.386-6.962 7.986-3.914-.408-7.554-.731-9.233-3.415-1.679-2.685-.135-11.14-.135-11.14s-2.353 4.788-3.431 5.981c-.977 1.081-2.811.09-2.895-1.364-.122-2.097 3.096-7.218 4.515-9.997 1.613-3.157 6.146-7.537 6.146-7.537l3.909-65.375-25.324-51.856-13.291 65.111-.752 58.298S156.211 340.212 156 353c-.379 22.958-4.137 106.821-4.137 106.821s16.44 4.433 20.211 7.585c3.347 2.798 10.783 9.708 6.551 10.766-6.227 1.556-36.142 1.161-43.913-1.991-5.294-2.148-2.188-11.235-2.712-16.924-1.827-19.845-10.052-65.468-8.248-102.146z" fill="#e2e2e2" fill-rule="nonzero"/><clipPath id="a"><path d="M123.752 357.111c.472-9.586-19.957-47.828-31.752-88.111-13.621 43.482-37.188 76.352-36.513 88.889 1.68 31.237-7.515 80.447-9.147 99.701-.567 6.693 6.227 15.695.105 18.457-7.206 3.251-36.95 1.334-43.342-.643-3.911-1.21 1.722-7.623 4.985-10.093 3.631-2.75 18.682-6.216 18.682-6.216S25.609 368.726 25 353c-.539-13.921 31.77-108.402 31.77-108.402L60 185l-11.88-64.752L26.692 170l-9.584 68.983s2.764 2.791 3.926 4.581c1.12 1.726 4.925 10.443 4.777 12.157-.123 1.41-1.446 2.657-2.529 1.746-1.138-.958-3.361-6.551-3.361-6.551s1.031 9.313-.1 11.968c-.893 2.097-4.442 4.355-6.687 3.964-2.559-.446-7.462-1.143-8.67-4.103-1.922-4.711.519-24.352.519-24.352L1.692 170S21.289 101.231 25 90.128c2.691-8.05 39.145-9.154 48.102-13.987 4.694-2.533 7.543-3.297 7.475-13.038-.057-8.196-.951-8.64-5.092-12.636-4.51-4.353-7.59-16.473-5.374-23.359 2.378-7.387-.81-18.864 2.778-22.595 8.334-8.667 33.581-8.855 41.914-.188 4.822 5.015-.492 12.27 2.301 22.836 2.149 8.134-1.852 19.168-6.485 24.369-2.795 3.138-6.177 2.456-5.849 12.137.36 10.663 1.85 10.455 6.73 13.038 9.308 4.928 47.66 5.443 52.5 13.423 4.131 6.812 25.606 88.164 25.606 88.164l-13.171 61.636s-.046 12.859-.743 17.225c-.56 3.512-3.128 8.386-6.962 7.986-3.914-.408-7.554-.731-9.233-3.415-1.679-2.685-.135-11.14-.135-11.14s-2.353 4.788-3.431 5.981c-.977 1.081-2.811.09-2.895-1.364-.122-2.097 3.096-7.218 4.515-9.997 1.613-3.157 6.146-7.537 6.146-7.537l3.909-65.375-25.324-51.856-13.291 65.111-.752 58.298S156.211 340.212 156 353c-.379 22.958-4.137 106.821-4.137 106.821s16.44 4.433 20.211 7.585c3.347 2.798 10.783 9.708 6.551 10.766-6.227 1.556-36.142 1.161-43.913-1.991-5.294-2.148-2.188-11.235-2.712-16.924-1.827-19.845-10.052-65.468-8.248-102.146z" clip-rule="nonzero"/></clipPath><g clip-path="url(#a)"><path d="M76.51 51.453s10.936 10.7 16.162 10.384c8-.483 15.483-8.203 15.483-8.203l.428 18.917L76.99 62.114l-.48-10.66z" fill-opacity=".06"/></g></g><circle cx="169.926" cy="91.879" r="4.95" fill="#707070" transform="translate(1.897 -.283)"/><circle cx="169.926" cy="91.879" r="4.95" fill="#707070" transform="translate(37.897 -.283)"/><path d="M198.184 81.35c-1.746-.42-4.358-4.3-2.618-4.748 2.62-.672 13.5-.587 18.331.714 4.112 1.108 10.693 6.486 10.654 7.094-.039.61-7.108-3.006-10.887-3.444-4.395-.51-12.464 1.112-15.48.384z" fill="#707070"/><path d="M179.582 81.35c1.746-.42 4.358-4.3 2.618-4.748-2.62-.672-13.5-.587-18.331.714-4.111 1.108-10.693 6.486-10.654 7.094.039.61 7.108-3.006 10.887-3.444 4.395-.51 12.464 1.112 15.48.384z" fill="#707070"/><a href="exo"><path d="M187.095 388.553c-8.429 0-15.273 6.843-15.273 15.272 0 8.43 6.844 15.273 15.273 15.273 8.43 0 15.272-6.843 15.272-15.273 0-8.429-6.843-15.272-15.272-15.272zm0 2.325c7.145 0 12.947 5.802 12.947 12.947 0 7.146-5.802 12.947-12.947 12.947-7.146 0-12.947-5.801-12.947-12.947 0-7.145 5.801-12.947 12.947-12.947zm0 2.972c5.505 0 9.975 4.47 9.975 9.975 0 5.506-4.47 9.976-9.975 9.976-5.506 0-9.975-4.47-9.975-9.976 0-5.505 4.47-9.975 9.975-9.975z" fill="silver"/></a><a href="exo"><path d="M147.917 248.553c-8.43 0-15.273 6.843-15.273 15.272 0 8.43 6.844 15.273 15.273 15.273 8.429 0 15.272-6.843 15.272-15.273 0-8.429-6.843-15.272-15.272-15.272zm0 2.325c7.145 0 12.947 5.802 12.947 12.947 0 7.146-5.802 12.947-12.947 12.947-7.146 0-12.947-5.801-12.947-12.947 0-7.145 5.8-12.947 12.947-12.947zm0 2.972c5.505 0 9.975 4.47 9.975 9.975 0 5.506-4.47 9.976-9.975 9.976-5.506 0-9.975-4.47-9.975-9.976 0-5.505 4.469-9.975 9.975-9.975z" fill="silver"/></a><a href="exo"><path d="M302.763 193.553c-8.429 0-15.273 6.843-15.273 15.272 0 8.43 6.844 15.273 15.273 15.273 8.429 0 15.272-6.843 15.272-15.273 0-8.429-6.843-15.272-15.272-15.272zm0 2.325c7.145 0 12.947 5.802 12.947 12.947 0 7.146-5.802 12.947-12.947 12.947-7.146 0-12.947-5.801-12.947-12.947 0-7.145 5.801-12.947 12.947-12.947zm0 2.972c5.505 0 9.975 4.47 9.975 9.975 0 5.506-4.47 9.976-9.975 9.976-5.506 0-9.975-4.47-9.975-9.976 0-5.505 4.469-9.975 9.975-9.975z" fill="silver"/></a><a href="exo"><path d="M137.942 586.553c-8.43 0-15.273 6.843-15.273 15.272 0 8.43 6.844 15.273 15.273 15.273 8.429 0 15.272-6.843 15.272-15.273 0-8.429-6.843-15.272-15.272-15.272zm0 2.325c7.144 0 12.947 5.802 12.947 12.947 0 7.146-5.803 12.947-12.947 12.947-7.147 0-12.947-5.801-12.947-12.947 0-7.145 5.8-12.947 12.947-12.947zm0 2.972c5.505 0 9.975 4.47 9.975 9.975 0 5.506-4.47 9.976-9.975 9.976-5.506 0-9.975-4.47-9.975-9.976 0-5.505 4.469-9.975 9.975-9.975z" fill="silver"/></a></svg>
</div>;

function App() {

    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="margium">
                <SVG />
                <div className="app-row" onClick={() => setCount(count + 1)}>
                    <span className="flames"> {count}</span>
                    <a className="ial" href="temps">Commercer l'entraînement<img src={Fleche} alt=">"/></a>
                </div>
            </div>
        </div>
    );

}

export default App;