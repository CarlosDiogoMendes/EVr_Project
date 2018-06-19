function makeMessages(){
    return `<div id="profile-page-wall-share" class="row">
    <div class="col s12">
       <ul class="tabs tab-profile z-depth-1 light-blue" style="width: 100%;">
          <li class="tab col s3" style="width: 33.3333%;">
              <a class="white-text waves-effect waves-light active">
                  <i class="material-icons">edit</i> 
                  Mensagens privadas
              </a>
          </li>
          <li class="tab col s3" style="width: 33.3333%;">
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

function make_newVO(){
    return `<div id="profile-page-wall-share">
    <div class="row">                 
      <div class="col s12">
          <ul class="tabs tab-profile z-depth-1 light-blue" style="width: 100%;">
              <li class="tab col s3 offset-m4" style="width: 33.3333%;">
                  <a class="white-text waves-effect waves-light active">
                      <i class="material-icons">edit</i> 
                      Criar nova VO
                  </a>
              </li>
              <div class="indicator" style="right: 576px; left: 0px;"></div>
          </ul>
      </div>
    </div>
    <p></p>
    <br>
    <div class="row">
      <div class="input-field col m8 offset-m2">
          <i class="material-icons prefix">account_circle</i>
          <input id="nome" type="text" class="autocomplete validate">    
          <label for="nome">Nome</label>                    
      </div>
      <div class="input-field col m8 offset-m2">
          <i class="material-icons prefix">location_on</i>
          <input id="location" type="email" class="autocomplete validate"> 
          <label for="location">Localização</label>               
      </div>
      <div class="input-field col m8 offset-m2">
          <i class="material-icons prefix">calendar_today</i>
          <input id="Data" type="date" class="autocomplete validate">    
          <!--label for="Data">Data</label-->                    
      </div>
    </div>
    <p></p>
    <div class="row">
        <div class="col m2 offset-m5">
            <button id="register" class="btn blue lighten-2">Submeter VO</button>
        </div>
    </div>
</div>`;
}

function make_newTask(){
    return `<div id="profile-page-wall-share">
    <div class="row">                 
      <div class="col s12">
          <ul class="tabs tab-profile z-depth-1 light-blue" style="width: 100%;">
              <li class="tab col s3 offset-m4" style="width: 33.3333%;">
                  <a class="white-text waves-effect waves-light active">
                      <i class="material-icons">edit</i> 
                      Criar nova Tarefa
                  </a>
              </li>
              <div class="indicator" style="right: 576px; left: 0px;"></div>
          </ul>
      </div>
    </div>
    <p></p>
    <br>
    <div class="row">
      <div class="input-field col m8 offset-m2">
          <i class="material-icons prefix">account_circle</i>
          <input id="nome" type="text" class="autocomplete validate">    
          <label for="nome">Nome da Tarefa</label>                    
      </div>
      <div class="input-field col m8 offset-m2">
          <i class="material-icons prefix">account_circle</i>
          <input id="nomeVO" type="text" class="autocomplete validate">    
          <label for="nomeVO">VO associada</label>                    
      </div>
      <div class="input-field col m8 offset-m2">
          <i class="material-icons prefix">calendar_today</i>
          <input id="Data" type="date" class="autocomplete validate">    
          <!--label for="Data">Data</label-->                    
      </div>
    </div>
    <p></p>
    <div class="row">
        <div class="col m2 offset-m5">
            <button id="register" class="btn blue lighten-2">Submeter Tarefa</button>
        </div>
    </div>
</div>`;
}

function make_listEnterprises(display1,display2,display3,display4){
    return `<div class="row">
    <div class="col m1"><p></p>Filtro</div>
    <ul class="col m11 light-blue">
        <li class="col m3" id="loc">
            <a class="white-text waves-effect waves-light active dropdown-menu" data-activates="Localizações">
                <span>Localização<i class="material-icons right">arrow_drop_down</i></span>          
            </a>

            <ul id="Localizações" class="dropdown-content dropdown-horizontal-list" style="position: absolute; top: 178px; left: 530px; opacity: 1; display: ${display1};">
                <li id='myTasks'><a  class="cyan-text">Lisboa</a></li>
                <li id='myVO'><a  class="cyan-text">Madrid</a></li>
                <li id='myMessages'><a  class="cyan-text">Amsterdam</a></li>
            </ul>
        </li>
       
        
        <li class="col m3" id="serv">
            <a class="white-text waves-effect waves-light active dropdown-menu" data-activates="Serviços">
                <span>Serviços<i class="material-icons right">arrow_drop_down</i></span>              
            </a>
        </li>

        <ul id="Serviços" class="dropdown-content dropdown-horizontal-list" style="position: absolute; top: 178px; left: 720px; opacity: 1; display: ${display2};">
            <li id='myTasks'><a  class="cyan-text">Catering</a></li>
            <li id='myVO'><a  class="cyan-text">Limpeza</a></li>
            <li id='myMessages'><a  class="cyan-text">Segurança</a></li>
         </ul>

        <li class="col m3" id="disp">
            <a class="white-text waves-effect waves-light active dropdown-menu" data-activates="Disponibilidades">
                <span>Disponibilidade<i class="material-icons right">arrow_drop_down</i></span>                         
            </a>
        </li>

        <ul id="Disponibilidades" class="dropdown-content dropdown-horizontal-list" style="position: absolute; top: 178px; left: 940px; opacity: 1; display: ${display3};">
            <li id='myTasks'><a  class="cyan-text">2018</a></li>
            <li id='myVO'><a  class="cyan-text">2019</a></li>
            <li id='myMessages'><a  class="cyan-text">2020</a></li>
         </ul>

        <li class="col m3" id="trab">
            <a class="white-text waves-effect waves-light active dropdown-menu" data-activates="Trabalhadores">
                <span>Trabalhadores<i class="material-icons right">arrow_drop_down</i></span>                     
            </a>
        </li>

        <ul id="Trabalhadores" class="dropdown-content dropdown-horizontal-list" style="position: absolute; top: 178px; left: 1130px; opacity: 1; display: ${display4};">
            <li id='myTasks'><a  class="cyan-text">+10</a></li>
            <li id='myVO'><a  class="cyan-text">+20</a></li>
            <li id='myMessages'><a  class="cyan-text">+30</a></li>
         </ul>

        <div class="indicator" style="right: 576px; left: 0px;"></div>
    </ul>
 </div>
 
 <div class="row">
    <h5 class="header">Empresa 1</h5>
  <div class="card horizontal">
    <div class="row">
        <div class="col m6 card-image">
            <img src="" />Imagem
        </div>
        <div class="card-content col-m4">
          <p>Descrição</p>
        </div>
    </div>
    <div class="row card-action">
      <div class=" col m4 offset-m8">
        <a href="#">Link para a pagina da empresa</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
      <h5 class="header">Empresa 2</h5>
      <div class="card horizontal">
        <div class="row">
            <div class="col m6 card-image">
                <img src="" />Imagem
            </div>
            <div class="card-content col-m4">
              <p>Descrição</p>
            </div>
        </div>
        <div class="row card-action">
          <div class=" col m4 offset-m8">
            <a href="#">Link para a pagina da empresa</a>
          </div>
        </div>
    </div>
</div>
<div class="row">
      <h5 class="header">Empresa 3</h5>
      <div class="card horizontal">
        <div class="row">
            <div class="col m6 card-image">
                <img src="" />Imagem
            </div>
            <div class="card-content col-m4">
              <p>Descrição</p>
            </div>
        </div>
        <div class="row card-action">
          <div class=" col m4 offset-m8">
            <a href="#">Link para a pagina da empresa</a>
          </div>
        </div>
      </div>
    </div>
 </div>`;
}

function make_listPartners(){
    return ` <div class="col s12 m12">
    <h5 class="header">Parceiro 1</h5>
    <div class="card horizontal">
      <div class="row">
      <div class="card-content col-m12">
      <div class="col m6 card-image">
          <img src="" />Imagem
      </div>
      <div class="col m6">
          <p>Descrição</p>
          <a class="card-action" href="#">Link para a pagina da empresa</a>
      </div>
    </div>
      </div>
    </div>
  </div>
  <div class="col s12 m12">
      <h5 class="header">Parceiro 2</h5>
      <div class="card horizontal">
        <div class="row">
        <div class="card-content col-m12">
        <div class="col m6 card-image">
            <img src="" />Imagem
        </div>
        <div class="col m6">
            <p>Descrição</p>
            <a class="card-action" href="#">Link para a pagina da empresa</a>
        </div>
      </div>
        </div>
      </div>
    </div>
    <div class="col s12 m12">
        <h5 class="header">Parceiro 3</h5>
        <div class="card horizontal">
          <div class="row">
          <div class="card-content col-m12">
          <div class="col m6 card-image">
              <img src="" />Imagem
          </div>
          <div class="col m6">
              <p>Descrição</p>
              <a class="card-action" href="#">Link para a pagina da empresa</a>
          </div>
        </div>
          </div>
        </div>
      </div>`;
}

function make_listFestivals(){
    return `<div class="col s12 m12">
    <h5 class="header">Festival 1</h5>
    <div class="card horizontal">
      <div class="row">
          <div class="col m6 card-image">
              <img src="" />Imagem
          </div>
          <div class="card-content col-m4">
            <p>Descrição</p>
          </div>
      </div>
      <div class="row card-action">
        <div class=" col m4 offset-m8">
          <a href="#">Link para o festival</a>
        </div>
      </div>
    </div>
  </div>
  <div class="col s12 m12">
      <h5 class="header">Festival 2</h5>
      <div class="card horizontal">
        <div class="row">
            <div class="col m6 card-image">
                <img src="" />Imagem
            </div>
            <div class="card-content col-m4">
              <p>Descrição</p>
            </div>
        </div>
        <div class="row card-action">
          <div class=" col m4 offset-m8">
            <a href="#">Link para o festival</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m12">
        <h5 class="header">Festival 3</h5>
        <div class="card horizontal">
          <div class="row">
              <div class="col m6 card-image">
                  <img src="" />Imagem
              </div>
              <div class="card-content col-m4">
                <p>Descrição</p>
              </div>
          </div>
          <div class="row card-action">
            <div class=" col m4 offset-m8">
              <a href="#">Link para o festival</a>
            </div>
          </div>
        </div>
      </div>`;
}