function make_Profile(){
    return `<div id="profile-page-wall-share">
    <div class="row">                 
      <div class="col s12">
          <ul class="tabs tab-profile z-depth-1 light-blue" style="width: 100%;">
              <li class="tab col s3 offset-m4" style="width: 33.3333%;">
                  <a class="white-text waves-effect waves-light active">
                      Perfil da Empresa
                  </a>
              </li>
              <div class="indicator" style="right: 0px; left: 0px;"></div>
          </ul>
      </div>
    </div>
    <p></p>
    <br>
    <div class="row">
        <div class="col m4 offset-m5" style="height: 150px; width: 150px; border: 1px solid grey">Imagem</div>
    </div>   
    <p></p>
    <div class="row">
        <div class="col m2 offset-m5"><button id="image" class="btn blue lighten-2">Mudar Imagem</button></div>
    </div> 
    <p></p>
    <br>
    <div class="row">
        <div class="input-field col m6">
            <i class="material-icons prefix">account_circle</i>
            <input id="nome" type="text" value="nome" class="autocomplete validate">    
            <label for="nome">Nome</label>                    
        </div>  
        <div class="input-field col m6">
            <i class="material-icons prefix">email</i>
            <input id="email" type="text" value="nome@hotmail.com" class="autocomplete validate">    
            <label for="email">Email</label>                    
        </div>
    </div>
    <div class="row">
        <div class="input-field col m6">
            <i class="material-icons prefix">phone</i>
            <input id="number" type="number" value="12344" class="autocomplete validate">    
            <label for="number">Telemóvel</label>                    
        </div>
        <div class="input-field col m6">
            <i class="material-icons prefix">location_on</i>
            <input id="location" value="Portugal" type="email" class="autocomplete validate"> 
            <label for="location">Localização</label>               
        </div>
    </div>
    <div class="row">
        <div class="input-field col m8 offset-m2">
            <i class="material-icons prefix">group</i>
            <input id="trab_disp" type="number" value="10" class="autocomplete validate">    
            <label for="trab_disp">Nº Trabalhadores Disponíveis</label>                    
        </div>
    </div>
    <p></p>
    <div class="row">
        <div class="col m2 offset-m5">
            <button id="register" class="btn blue lighten-2">Editar Perfil</button>
        </div>
    </div>
</div>`;
}

function make_Message(){
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

function make_Calendar(){
    return `<div class="container">
    <div class="section"></div>
      <div class="divider"></div>
      <div id="full-calendar">              
        <div class="row">
          <div class="col s12 m12 l12">
            <div id="calendar" class="fc fc-ltr fc-unthemed"><div class="fc-toolbar"><div class="fc-left"><div class="fc-button-group"><button type="button" class="fc-prev-button fc-button fc-state-default fc-corner-left"><span class="fc-icon fc-icon-left-single-arrow"></span></button><button type="button" class="fc-next-button fc-button fc-state-default fc-corner-right"><span class="fc-icon fc-icon-right-single-arrow"></span></button></div><button type="button" class="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right">today</button></div><div class="fc-right"><div class="fc-button-group"><button type="button" class="fc-month-button fc-button fc-state-default fc-corner-left fc-state-active">month</button><button type="button" class="fc-basicWeek-button fc-button fc-state-default">week</button><button type="button" class="fc-basicDay-button fc-button fc-state-default fc-corner-right">day</button></div></div><div class="fc-center"><h2>June 2018</h2></div><div class="fc-clear"></div></div><div class="fc-view-container" style=""><div class="fc-view fc-month-view fc-basic-view" style=""><table><thead class="fc-head"><tr><td class="fc-widget-header"><div class="fc-row fc-widget-header"><table><thead><tr><th class="fc-day-header fc-widget-header fc-sun">Sun</th><th class="fc-day-header fc-widget-header fc-mon">Mon</th><th class="fc-day-header fc-widget-header fc-tue">Tue</th><th class="fc-day-header fc-widget-header fc-wed">Wed</th><th class="fc-day-header fc-widget-header fc-thu">Thu</th><th class="fc-day-header fc-widget-header fc-fri">Fri</th><th class="fc-day-header fc-widget-header fc-sat">Sat</th></tr></thead></table></div></td></tr></thead><tbody class="fc-body"><tr><td class="fc-widget-content"><div class="fc-day-grid-container" style=""><div class="fc-day-grid"><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 94px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-other-month fc-past" data-date="2015-04-26"></td><td class="fc-day fc-widget-content fc-mon fc-other-month fc-past" data-date="2015-04-27"></td><td class="fc-day fc-widget-content fc-tue fc-other-month fc-past" data-date="2015-04-28"></td><td class="fc-day fc-widget-content fc-wed fc-other-month fc-past" data-date="2015-04-29"></td><td class="fc-day fc-widget-content fc-thu fc-other-month fc-past" data-date="2015-04-30"></td><td class="fc-day fc-widget-content fc-fri fc-past" data-date="2015-05-01"></td><td class="fc-day fc-widget-content fc-sat fc-past" data-date="2015-05-02"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-other-month fc-past" data-date="2015-04-26">26</td><td class="fc-day-number fc-mon fc-other-month fc-past" data-date="2015-04-27">27</td><td class="fc-day-number fc-tue fc-other-month fc-past" data-date="2015-04-28">28</td><td class="fc-day-number fc-wed fc-other-month fc-past" data-date="2015-04-29">29</td><td class="fc-day-number fc-thu fc-other-month fc-past" data-date="2015-04-30">30</td><td class="fc-day-number fc-fri fc-past" data-date="2015-05-01">1</td><td class="fc-day-number fc-sat fc-past" data-date="2015-05-02">2</td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td class="fc-event-container"><a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable" style="background-color:#9c27b0;border-color:#9c27b0"><div class="fc-content"> <span class="fc-title">All Day Event</span></div><div class="fc-resizer fc-end-resizer"></div></a></td><td></td></tr></tbody></table></div></div><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 94px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-past" data-date="2015-05-03"></td><td class="fc-day fc-widget-content fc-mon fc-past" data-date="2015-05-04"></td><td class="fc-day fc-widget-content fc-tue fc-past" data-date="2015-05-05"></td><td class="fc-day fc-widget-content fc-wed fc-past" data-date="2015-05-06"></td><td class="fc-day fc-widget-content fc-thu fc-past" data-date="2015-05-07"></td><td class="fc-day fc-widget-content fc-fri fc-past" data-date="2015-05-08"></td><td class="fc-day fc-widget-content fc-sat fc-past" data-date="2015-05-09"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-past" data-date="2015-05-03">3</td><td class="fc-day-number fc-mon fc-past" data-date="2015-05-04">4</td><td class="fc-day-number fc-tue fc-past" data-date="2015-05-05">5</td><td class="fc-day-number fc-wed fc-past" data-date="2015-05-06">6</td><td class="fc-day-number fc-thu fc-past" data-date="2015-05-07">7</td><td class="fc-day-number fc-fri fc-past" data-date="2015-05-08">8</td><td class="fc-day-number fc-sat fc-past" data-date="2015-05-09">9</td></tr></thead><tbody><tr><td class="fc-event-container" colspan="2"><a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable" style="background-color:#01579b;border-color:#01579b"><div class="fc-content"><span class="fc-time">12a</span> <span class="fc-title">Conference</span></div></a></td><td rowspan="2"></td><td rowspan="2"></td><td class="fc-event-container" colspan="3"><a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable" style="background-color:#e91e63;border-color:#e91e63"><div class="fc-content"> <span class="fc-title">Long Event</span></div><div class="fc-resizer fc-end-resizer"></div></a></td></tr><tr><td></td><td></td><td></td><td></td><td class="fc-event-container"><a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable" style="background-color:#ff1744;border-color:#ff1744"><div class="fc-content"><span class="fc-time">4p</span> <span class="fc-title">Repeating Event</span></div></a></td></tr></tbody></table></div></div><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 94px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-past" data-date="2015-05-10"></td><td class="fc-day fc-widget-content fc-mon fc-past" data-date="2015-05-11"></td><td class="fc-day fc-widget-content fc-tue fc-past" data-date="2015-05-12"></td><td class="fc-day fc-widget-content fc-wed fc-past" data-date="2015-05-13"></td><td class="fc-day fc-widget-content fc-thu fc-past" data-date="2015-05-14"></td><td class="fc-day fc-widget-content fc-fri fc-past" data-date="2015-05-15"></td><td class="fc-day fc-widget-content fc-sat fc-past" data-date="2015-05-16"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-past" data-date="2015-05-10">10</td><td class="fc-day-number fc-mon fc-past" data-date="2015-05-11">11</td><td class="fc-day-number fc-tue fc-past" data-date="2015-05-12">12</td><td class="fc-day-number fc-wed fc-past" data-date="2015-05-13">13</td><td class="fc-day-number fc-thu fc-past" data-date="2015-05-14">14</td><td class="fc-day-number fc-fri fc-past" data-date="2015-05-15">15</td><td class="fc-day-number fc-sat fc-past" data-date="2015-05-16">16</td></tr></thead><tbody><tr><td rowspan="5"></td><td rowspan="5"></td><td class="fc-event-container"><a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable" style="background-color:#2196f3;border-color:#2196f3"><div class="fc-content"><span class="fc-time">10:30a</span> <span class="fc-title">Meeting</span></div></a></td><td class="fc-event-container" rowspan="5"><a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable" style="background-color:#00bcd4;border-color:#00bcd4"><div class="fc-content"><span class="fc-time">7a</span> <span class="fc-title">Birthday Party</span></div></a></td><td rowspan="5"></td><td rowspan="5"></td><td class="fc-event-container" rowspan="5"><a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable" style="background-color:#aa00ff;border-color:#aa00ff"><div class="fc-content"><span class="fc-time">4p</span> <span class="fc-title">Repeating Event</span></div></a></td></tr><tr><td class="fc-event-container"><a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable" style="background-color:#ff5722;border-color:#ff5722"><div class="fc-content"><span class="fc-time">12p</span> <span class="fc-title">Lunch</span></div></a></td></tr><tr><td class="fc-event-container fc-limited"><a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable" style="background-color:#4caf50;border-color:#4caf50"><div class="fc-content"><span class="fc-time">2:30p</span> <span class="fc-title">Meeting</span></div></a></td><td class="fc-more-cell" rowspan="1"><div><a class="fc-more">+3 more</a></div></td></tr><tr class="fc-limited"><td class="fc-event-container"><a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable" style="background-color:#03a9f4;border-color:#03a9f4"><div class="fc-content"><span class="fc-time">5:30p</span> <span class="fc-title">Happy Hour</span></div></a></td></tr><tr class="fc-limited"><td class="fc-event-container"><a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable" style="background-color:#009688;border-color:#009688"><div class="fc-content"><span class="fc-time">8p</span> <span class="fc-title">Dinner</span></div></a></td></tr></tbody></table></div></div><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 94px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-past" data-date="2015-05-17"></td><td class="fc-day fc-widget-content fc-mon fc-past" data-date="2015-05-18"></td><td class="fc-day fc-widget-content fc-tue fc-past" data-date="2015-05-19"></td><td class="fc-day fc-widget-content fc-wed fc-past" data-date="2015-05-20"></td><td class="fc-day fc-widget-content fc-thu fc-past" data-date="2015-05-21"></td><td class="fc-day fc-widget-content fc-fri fc-past" data-date="2015-05-22"></td><td class="fc-day fc-widget-content fc-sat fc-past" data-date="2015-05-23"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-past" data-date="2015-05-17">17</td><td class="fc-day-number fc-mon fc-past" data-date="2015-05-18">18</td><td class="fc-day-number fc-tue fc-past" data-date="2015-05-19">19</td><td class="fc-day-number fc-wed fc-past" data-date="2015-05-20">20</td><td class="fc-day-number fc-thu fc-past" data-date="2015-05-21">21</td><td class="fc-day-number fc-fri fc-past" data-date="2015-05-22">22</td><td class="fc-day-number fc-sat fc-past" data-date="2015-05-23">23</td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 94px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-past" data-date="2015-05-24"></td><td class="fc-day fc-widget-content fc-mon fc-past" data-date="2015-05-25"></td><td class="fc-day fc-widget-content fc-tue fc-past" data-date="2015-05-26"></td><td class="fc-day fc-widget-content fc-wed fc-past" data-date="2015-05-27"></td><td class="fc-day fc-widget-content fc-thu fc-past" data-date="2015-05-28"></td><td class="fc-day fc-widget-content fc-fri fc-past" data-date="2015-05-29"></td><td class="fc-day fc-widget-content fc-sat fc-past" data-date="2015-05-30"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-past" data-date="2015-05-24">24</td><td class="fc-day-number fc-mon fc-past" data-date="2015-05-25">25</td><td class="fc-day-number fc-tue fc-past" data-date="2015-05-26">26</td><td class="fc-day-number fc-wed fc-past" data-date="2015-05-27">27</td><td class="fc-day-number fc-thu fc-past" data-date="2015-05-28">28</td><td class="fc-day-number fc-fri fc-past" data-date="2015-05-29">29</td><td class="fc-day-number fc-sat fc-past" data-date="2015-05-30">30</td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 98px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-past" data-date="2015-05-31"></td><td class="fc-day fc-widget-content fc-mon fc-other-month fc-past" data-date="2015-06-01"></td><td class="fc-day fc-widget-content fc-tue fc-other-month fc-past" data-date="2015-06-02"></td><td class="fc-day fc-widget-content fc-wed fc-other-month fc-past" data-date="2015-06-03"></td><td class="fc-day fc-widget-content fc-thu fc-other-month fc-past" data-date="2015-06-04"></td><td class="fc-day fc-widget-content fc-fri fc-other-month fc-past" data-date="2015-06-05"></td><td class="fc-day fc-widget-content fc-sat fc-other-month fc-past" data-date="2015-06-06"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-past" data-date="2015-05-31">31</td><td class="fc-day-number fc-mon fc-other-month fc-past" data-date="2015-06-01">1</td><td class="fc-day-number fc-tue fc-other-month fc-past" data-date="2015-06-02">2</td><td class="fc-day-number fc-wed fc-other-month fc-past" data-date="2015-06-03">3</td><td class="fc-day-number fc-thu fc-other-month fc-past" data-date="2015-06-04">4</td><td class="fc-day-number fc-fri fc-other-month fc-past" data-date="2015-06-05">5</td><td class="fc-day-number fc-sat fc-other-month fc-past" data-date="2015-06-06">6</td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div></div></div></td></tr></tbody></table></div></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function make_Opportunities(){
    return `<div class="col s12 m12">
    <h5 class="header">VO 1</h5>
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
      <h5 class="header">VO 2</h5>
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
        <h5 class="header">VO 3</h5>
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