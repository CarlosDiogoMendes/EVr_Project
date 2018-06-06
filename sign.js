function Enterprise (nome,email,password,number,location,range,workers,type){
    this.nome = nome;
    this.email = email;
    this.password = password;
    this.number = number;
    this.location = location;
    this.range = range;
    this.workers = workers;
    this.type = type;
}

function Client(first_name,last_name,username,email,password,number,m_number,morada) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.nome = first_name+' '+last_name;
    this.telefone = number;
    this.telemovel = m_number;
    this.morada = morada;
}

var type;

$('#button1').click(function(){
    $('#main').html(makeSignPageEnterprise());
    $('#register').click(function(){
        var nome = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        var number = document.getElementById('PhoneNumber').value;
        var location = document.getElementById('location').value;
        var range = document.getElementById('Range').value;
        var workers = document.getElementById('WorkersNumber').value;
        var type = checkOptions();
        var enterprise = new Enterprise(nome,email,pass,number,location,range,workers,type);
        console.log(enterprise);
    })
});

$('#button2').click(function(){
    $('#main').html(makeSignPageClient());
    $('#register').click(function(){
        var first_name = document.getElementById('first_name').value;
        var last_name = document.getElementById('last_name').value;
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        var number = document.getElementById('PhoneNumber').value;
        var m_number = document.getElementById('MobileNumber').value;
        var morada = document.getElementById('Morada').value;
        var cliente = new Client(first_name,last_name,username,email,pass,number,m_number,morada);
        var cliente_JSON = JSON.stringify(cliente);
        console.log(cliente_JSON);
        insertClient(cliente_JSON);
        signIn();
    })
});

function checkOptions(){
    var type='batata';
    if($('#Catering').is(':checked')) { type = "Catering"; }
    else if($('#Segurança').is(':checked')) { type = "Segurança"; }
    else if($('#Animaçao').is(':checked')) { type = "Animaçao"; }
    else if($('#Limpeza').is(':checked')) { type = "Limpeza"; }
    else if($('#Serviços').is(':checked')) { type = "Serviços"; }
    return type;
}

function insertClient(client) {
    var data_file = "http://localhost/evr/registar_cliente.php";
    var http_request = new XMLHttpRequest();
    
    http_request.onreadystatechange = function(){
    
        if (http_request.readyState == 4  ){
           // Javascript function JSON.parse to parse JSON data
          console.log(http_request.responseText.message);
        }
    }

    http_request.open("POST", data_file, true);
    http_request.send(client);
}

function signIn() {
    $(document).ready(function(){
        jQuery('.modal').modal();
    })

    $('#logIn').click(function(){
        var email = document.getElementById('emailModal').value;
        var pass = document.getElementById('passwordModal').value;
        console.log('email:'+ email + ' pass:'+pass);
        checkUser(email,pass);
    })
}

function checkUser(email,pass) {
    var data_file = "http://localhost/evr/autenticar_cliente.php";
    var http_request = new XMLHttpRequest();
    
    http_request.onreadystatechange = function(){
    
        if (http_request.readyState == 4  ){
           // Javascript function JSON.parse to parse JSON data
          alert(http_request.responseText.substring(13,44));
        }
    }

    http_request.open("POST", data_file, true);
    //console.log('{"email":"'+email+'", "password":"'+pass+'"}');
    http_request.send('{"email":"'+email+'", "password":"'+pass+'"}');
}

function loadJSONCountries(){
    var data_file = "http://localhost/evr/get_paises.php";
    var http_request = new XMLHttpRequest();
    
    http_request.onreadystatechange = function(){
    
       if (http_request.readyState == 4  ){
          // Javascript function JSON.parse to parse JSON data
          var jsonObj = JSON.parse(http_request.responseText);

          // jsonObj variable now contains the data structure and can
          // be accessed as jsonObj.name and jsonObj.country.
          document.getElementById("Name").innerHTML = jsonObj.name;
          document.getElementById("Country").innerHTML = jsonObj.country;
       }
    }
    
    http_request.open("GET", data_file, true);
    http_request.send();
 }