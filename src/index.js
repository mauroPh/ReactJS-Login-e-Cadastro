import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



ReactDOM.render(
 <div>  
    <form>

        <h2>Login</h2>
            <input id="email"  type="email" nome="email" placeholder="seuemail@email.com" required/>
            <input type="password" nome="senha" placeholder="Senha ***" required/>
            <input type="submit" nome="acao"    placeholder="Enviar"/>
            <a href="./src/cadastro.js">Esqueceu sua senha ?</a>
            <p>Não tem uma conta?<a href="cadastro.html">Registre-se</a></p>
            <hr class="hr"></hr>
            <div class="p">ou</div>
            <hr class="hr"></hr>

            <button class="botoes button-google">Entrar com o Google</button> 
            <button class="botoes button-facebook">Entrar com o Facebook</button>  
    </form>
  </div>,
  document.getElementById('root')
  
);
