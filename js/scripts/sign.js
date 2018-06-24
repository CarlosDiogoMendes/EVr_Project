function Member(email,password,nome,telefone,pais,cidade,localidade,numTrabalhadores,zonaOperacao,tipo){
    this.email = email;
    this.password = password;
    this.nome = nome;
    this.telefone = telefone;
    this.pais = pais;
    this.cidade = cidade;
    this.localidade = localidade;
    this.numTrabalhadores = numTrabalhadores;
    this.zonaOperacao = zonaOperacao;
    this.tipo = tipo;
}

function Client(first_name,last_name,username,email,password,number,m_number,address) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.nome = first_name+' '+last_name;
    this.telefone = number;
    this.telemovel = m_number;
    this.address = address;
}

var type;

$('#button1').click(function() {
    $('#main').html(makeSignPageMember());
    $('#register').click(function() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var nome = document.getElementById('name').value;
        var telefone = document.getElementById('phoneNumber').value;
        var pais = document.getElementById('country').value; //TODO
        var cidade = document.getElementById('city').value; //TODO
        var localidade = document.getElementById('location').value;
        var numTrabalhadores = document.getElementById('workersNumber').value;
        var zonaOperacao = document.getElementById('range').value;
        var tipo = checkOptions();
        var member = new Member(email,password,nome,telefone,pais,cidade,localidade,numTrabalhadores,zonaOperacao,tipo);
        var member_JSON = JSON.stringify(member);
        console.log(member_JSON);
        insertMember(member_JSON);
        signIn();
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
        var address = document.getElementById('Address').value;
        var cliente = new Client(first_name,last_name,username,email,pass,number,m_number,address);
        var cliente_JSON = JSON.stringify(cliente);
        console.log(cliente_JSON);
        insertClient(cliente_JSON);
        signIn();
    })
});

function checkOptions(){
    //var type='batata';
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
    
    http_request.onreadystatechange = function() {
        if (http_request.readyState == 4) {
           // TODO Javascript function JSON.parse to parse JSON data
           response= JSON.parse(http_request.responseText);
           console.log(response.message);
            M.toast({html: response.message})
        }
    }

    http_request.open("POST", data_file, true);
    http_request.send(client);
}

function insertMember(member) {
    var data_file = "http://localhost/evr/registar_membro.php";
    var http_request = new XMLHttpRequest();
    
    http_request.onreadystatechange = function() {
        if (http_request.readyState == 4) {
            // TODO Javascript function JSON.parse to parse JSON data
            response= JSON.parse(http_request.responseText);
            console.log(response.message);
            M.toast({html: response.message})
        }
    }

    http_request.open("POST", data_file, true);
    http_request.send(member);
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
        //location.href = "www.yoursite.com";
    })
}

function checkUser(email,pass) {
    var data_file = "http://localhost/evr/autenticar_cliente.php";
    var http_request = new XMLHttpRequest();
    
    http_request.onreadystatechange = function(){
    
        if (http_request.readyState == 4  ){
           // Javascript function JSON.parse to parse JSON data
           response= JSON.parse(http_request.responseText);
           console.log(response);
            M.toast({html: response.message});
            if(response.errorCode === ''){
                location.href = "Userpage.html";
            }
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
          // TODO Javascript function JSON.parse to parse JSON data
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