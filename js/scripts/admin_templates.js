function make_Dashboard(){
    return `<div id="card-stats">
    <div class="row">
        <div class="col s12 m6 l3">
            <div class="card">
                <div class="card-content green white-text">
                    <p class="card-stats-title">
                        <i class="large material-icons">group_add</i> Novos Clientes</p>
                    <h4 class="card-stats-number">50</h4>
                    <p class="card-stats-compare">+ 15%
                        <span class="green-text text-lighten-5">desde ontem</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l3">
            <div class="card">
                <div class="card-content teal lighten-1 white-text">
                    <p class="card-stats-title">
                        <i class="large material-icons">chat</i> Mensagens</p>
                    <h4 class="card-stats-number">10</h4>
                    <p class="card-stats-compare">+ 10%
                        <span class="purple-text text-lighten-5">desde ontem</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l3">
            <div class="card">
                <div class="card-content blue-grey white-text">
                    <p class="card-stats-title">
                        <i class="large material-icons">dvr</i> Pedidos de VOs</p>
                    <h4 class="card-stats-number">5</h4>
                    <p class="card-stats-compare">+ 10%
                        <span class="blue-grey-text text-lighten-5">ultimo mês</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l3">
            <div class="card">
                <div class="card-content blue lighten-2 white-text">
                    <span class="card-stats-title">
                        <i class="large material-icons">add_alert</i> Pedidos de Empresas</span>
                    <h4 class="card-stats-number">18</h4>
                    <p class="card-stats-compare">+ 3%
                        <span class="deep-purple-text text-lighten-5">ultimo mês</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="card-widgets">
    <div class="row">
        <div class="col s12 m12 l4">
            <ul id="task-card" class="collection with-header">
                <li class="collection-header cyan">
                    <h4 class="task-card-title">My Task</h4>
                    <p class="task-card-date">March 26, 2015</p>
                </li>
                <li class="collection-item dismissable" style="touch-action: pan-y; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                    <input type="checkbox" id="task1">
                    <label for="task1" style="text-decoration: none;">Create Mobile App UI.
                        <a href="http://demo.geekslabs.com/materialize/v2.2/layout03/index.html#"
                            class="secondary-content">
                            <span class="ultra-small">Today</span>
                        </a>
                    </label>
                    <span class="task-cat teal">Mobile App</span>
                </li>
                <li class="collection-item dismissable" style="touch-action: pan-y; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                    <input type="checkbox" id="task2">
                    <label for="task2" style="text-decoration: none;">Check the new API standerds.
                        <a href="http://demo.geekslabs.com/materialize/v2.2/layout03/index.html#"
                            class="secondary-content">
                            <span class="ultra-small">Monday</span>
                        </a>
                    </label>
                    <span class="task-cat purple">Web API</span>
                </li>
                <li class="collection-item dismissable" style="touch-action: pan-y; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                    <input type="checkbox" id="task3" checked="checked">
                    <label for="task3" style="text-decoration: line-through;">Check the new Mockup of ABC.
                        <a href="http://demo.geekslabs.com/materialize/v2.2/layout03/index.html#"
                            class="secondary-content">
                            <span class="ultra-small">Wednesday</span>
                        </a>
                    </label>
                    <span class="task-cat pink">Mockup</span>
                </li>
                <li class="collection-item dismissable" style="touch-action: pan-y; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                    <input type="checkbox" id="task4" checked="checked" disabled="disabled">
                    <label for="task4" style="text-decoration: line-through;">I did it !</label>
                    <span class="task-cat cyan">Mobile App</span>
                </li>
            </ul>
        </div>
        <div class="col m12 l3" style="border: 2px solid #aba3a3; margin-top: 8px;margin-left: 60px;">
            <div id="bordered-table">
                <div class="row white-text" style="border-bottom: 2px solid #aba3a3; background-color: #aba3a3">
                    <div class="col s12 m12 l4 offset-l3">
                        <h4 class="">Empresas</h4>
                    </div>
                </div>
                <p></p>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <table class="bordered hoverable centered">
                            <thead>
                                <tr>
                                    <th data-field="nome">Nome</th>
                                    <th data-field="service">Serviço</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alvin</td>
                                    <td>Eclair</td>
                                </tr>
                                <tr>
                                    <td>Alan</td>
                                    <td>Jellybean</td>
                                </tr>
                                <tr>
                                    <td>Jonathan</td>
                                    <td>Lollipop</td>
                                </tr>
                                <tr>
                                    <td>Shannon</td>
                                    <td>KitKat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m12 l3" style="border:2px solid #dc5858; margin-top: 8px;margin-left: 80px;">
                <div id="bordered-table">
                    <div class="row white-text" style="border-bottom: 2px solid #dc5858; background-color: #dc5858">
                        <div class="col s12 m12 l4 offset-l4">
                            <h4 class="">VOs</h4>
                        </div>
                    </div>
                    <p></p>
                    <div class="row">
                        <div class="col s12 m12 l12">
                            <table class="bordered hoverable centered">
                                <thead>
                                    <tr>
                                        <th data-field="nome">Nome</th>
                                        <th data-field="service">Localização</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                    </tr>
                                    <tr>
                                        <td>Alan</td>
                                        <td>Jellybean</td>
                                    </tr>
                                    <tr>
                                        <td>Jonathan</td>
                                        <td>Lollipop</td>
                                    </tr>
                                    <tr>
                                        <td>Shannon</td>
                                        <td>KitKat</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
<!--card stats end-->`;
}

function make_Message(){
    return `<div id="profile-page-wall-share" class="row">
    <div class="col s12">
       <ul class="tabs tab-profile z-depth-1 light-blue" style="width: 100%;">
          <li class="tab col s6">
              <a class="white-text waves-effect waves-light active">
                  <i class="material-icons">edit</i> 
                  Mensagens privadas
              </a>
          </li>
          <li class="tab col s6">
              <a class="white-text waves-effect waves-light">
                  <i class="material-icons">message</i> 
                  Mensagens públicas
              </a>
          </li>
          <div class="indicator" style="right: 576px; left: 0px;"></div>
       </ul>
       <!-- UpdateStatus-->
       <div id="UpdateStatus" class="tab-content col s12  grey lighten-4">
          <div class="row">
             <div class="col s2">
                <img src="avatar.jpg" alt="" class="circle responsive-img valign profile-image-post">
             </div>
             <div class="input-field col s10">
                <textarea id="textarea" row="2" class="materialize-textarea"></textarea>
                <label for="textarea" class="">Nova mensagem</label>
             </div>
          </div>
          <div class="row">
             <div class="input-field col s4 offset-s5">
                       <i class="material-icons prefix pink-text">people</i>
                  <input type="text" id="autocomplete-input" class="input autocomplete">
                    <label for="autocomplete-input">Recetor</label>
              </div>
              <div class="input-field col s3">
                    <a class="waves-effect waves-light btn"><i class="material-icons left">send</i>Enviar</a>
              </div>
             </div>
          </div>
       </div>
       <!-- AddPhotos -->
       <div id="AddPhotos" class="tab-content col s12  grey lighten-4" style="display: none;">
          <div class="row">
             <div class="col s2">
                <img src="avatar.jpg" alt="" class="circle responsive-img valign profile-image-post">
             </div>
             <div class="input-field col s10">
                <textarea id="textarea" row="2" class="materialize-textarea"></textarea>
                <label for="textarea" class="">Share your favorites photos!</label>
             </div>
          </div>
          <div class="row">
             <div class="col s12 m6 share-icons">
                <a href="http://demo.geekslabs.com/materialize/v2.2/layout03/user-profile-page.html#"><i class="mdi-image-camera-alt"></i></a>
                <a href="http://demo.geekslabs.com/materialize/v2.2/layout03/user-profile-page.html#"><i class="mdi-action-account-circle"></i></a>
                <a href="http://demo.geekslabs.com/materialize/v2.2/layout03/user-profile-page.html#"><i class="mdi-hardware-keyboard-alt"></i></a>
                <a href="http://demo.geekslabs.com/materialize/v2.2/layout03/user-profile-page.html#"><i class="mdi-communication-location-on"></i></a>
             </div>
             <div class="col s12 m6 right-align">
                <!-- Dropdown Trigger -->
                <a class="dropdown-button btn" href="http://demo.geekslabs.com/materialize/v2.2/layout03/user-profile-page.html#" data-activates="profliePost2"><i class="mdi-action-language"></i> Public</a>
                <ul id="profliePost2" class="dropdown-content">
                   <li><a href="http://demo.geekslabs.com/materialize/v2.2/layout03/user-profile-page.html#!"><i class="mdi-action-language"></i> Public</a></li>
                   <li><a href="http://demo.geekslabs.com/materialize/v2.2/layout03/user-profile-page.html#!"><i class="mdi-action-face-unlock"></i> Friends</a></li>
                   <li><a href="http://demo.geekslabs.com/materialize/v2.2/layout03/user-profile-page.html#!"><i class="mdi-action-lock-outline"></i> Only Me</a></li>
                </ul>
                <!-- Dropdown Structure -->
                <a class="waves-effect waves-light btn"><i class="mdi-maps-rate-review left"></i>Post</a>
             </div>
          </div>
       </div>
    </div>`;
}

function make_VOs(){
    return `<div class="col s12 m12">
    <h5 class="header">Pedido 1</h5>
    <div class="card horizontal">
        <div class="row">
            <div class="card-content col-m12">
                <div class="col m6 card-image">
                    <img src="" />Imagem
                </div>
                <div class="col m6">
                    <p>Descrição</p>
                    <a class="card-action modal-trigger" id="ped1" href="#modal1">Link para a pagina do cliente</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m12">
    <h5 class="header">Pedido 2</h5>
    <div class="card horizontal">
        <div class="row">
            <div class="card-content col-m12">
                <div class="col m6 card-image">
                    <img src="" />Imagem
                </div>
                <div class="col m6">
                    <p>Descrição</p>
                    <a class="card-action modal-trigger" id="ped2" href="#modal1">Link para a pagina do cliente</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m12">
    <h5 class="header">Pedido 3</h5>
    <div class="card horizontal">
        <div class="row">
            <div class="card-content col-m12">
                <div class="col m6 card-image">
                    <img src="" />Imagem
                </div>
                <div class="col m6">
                    <p>Descrição</p>
                    <a class="card-action modal-trigger" id="ped3" href="#modal1">Link para a pagina do cliente</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="modal1" class="modal" style="display:none; top:5%; max-height: 90%!important;">
    <div class="modal-content">
        <div class="row">
            <i id='closeModal' class="small col m1 offset-m11 material-icons">clear</i>
        </div>
        <div class="card">
            <div class="row">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="server/db/images/imagem1.jpg">
                </div>
            </div>
            <div class="row">
                <div class="card-content">
                    <div class="row">
                        <span class="card-title activator grey-text text-darken-4">Nome do cliente</span>
                    </div>
                    <p></p>
                    <br>
                    <div class="row">
                        <button id="button1" class="btn blue darken-2 col m2 offset-m3">Aceitar</button>
                        <button id="button2" class="btn red darken-2 col m2 offset-m2">Rejeitar</button>
                    </div>
                </div>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Nome do cliente
                    <i class="material-icons right">close</i>
                </span>
                <p></p>
                <br>
                <div class="row">
                    <ul>
                        <li>
                            <span class="black-text">Email:</span>
                        </li>
                        <p></p>
                        <li>
                            <span class="black-text">Telefone:</span>
                        </li>
                        <p></p>
                        <li>
                            <span class="black-text">Localização:</span>
                        </li>
                        <p></p>
                        <li>
                            <span class="black-text">Data:</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>`;
}

function make_Empresas(){
    return `<div class="col s12 m12">
    <h5 class="header">Pedido 1</h5>
    <div class="card horizontal">
        <div class="row">
            <div class="card-content col-m12">
                <div class="col m6 card-image">
                    <img src="" />Imagem
                </div>
                <div class="col m6">
                    <p>Descrição</p>
                    <a class="card-action modal-trigger" id="ped1" href="#modal1">Link para a pagina da empresa</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m12">
    <h5 class="header">Pedido 2</h5>
    <div class="card horizontal">
        <div class="row">
            <div class="card-content col-m12">
                <div class="col m6 card-image">
                    <img src="" />Imagem
                </div>
                <div class="col m6">
                    <p>Descrição</p>
                    <a class="card-action modal-trigger" id="ped2" href="#modal1">Link para a pagina da empresa</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col s12 m12">
    <h5 class="header">Pedido 3</h5>
    <div class="card horizontal">
        <div class="row">
            <div class="card-content col-m12">
                <div class="col m6 card-image">
                    <img src="" />Imagem
                </div>
                <div class="col m6">
                    <p>Descrição</p>
                    <a class="card-action modal-trigger" id="ped3" href="#modal1">Link para a pagina da empresa</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="modal1" class="modal" style="display:none; top:5%; max-height: 90%!important;">
                                    <div class="modal-content">
                                    <div class="row"><i id='closeModal' class="small col m1 offset-m11 material-icons">clear</i></div>
                                        <div class="card">
                                            <div class="row">
                                                <div class="card-image waves-effect waves-block waves-light">
                                                    <img class="activator" src="server/db/images/imagem1.jpg">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="card-content">
                                                    <div class="row">
                                                        <span class="card-title activator grey-text text-darken-4">Nome da empresa</span>
                                                    </div>
                                                    <p></p>
                                                    <br>
                                                    <div class="row">
                                                        <button id="button1" class="btn blue darken-2 col m2 offset-m3">Aceitar</button>
                                                        <button id="button2" class="btn red darken-2 col m2 offset-m2">Rejeitar</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-reveal">
                                                <span class="card-title grey-text text-darken-4">Nome da empresa
                                                    <i class="material-icons right">close</i>
                                                </span>
                                                <p></p>
                                                <br>
                                                <div class="row">
                                                    <ul>
                                                        <li>
                                                            <span class="black-text">Email:</span>
                                                        </li>
                                                        <p></p>
                                                        <li>
                                                            <span class="black-text">Telefone:</span>
                                                        </li>
                                                        <p></p>
                                                        <li>
                                                            <span class="black-text">Localização:</span>
                                                        </li>
                                                        <p></p>
                                                        <li>
                                                            <span class="black-text">Nº Trabalhadores Disponíveis:</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
}
