function makeSignPageEnterprise() {
    return ` <div><h4>Account Information</h4></div>  
    <br>
    <div class="row">
        <div class="input-field col m8">
            <i class="material-icons prefix">account_circle</i>
            <input placeholder="Name" id="name" type="text" class="validate">                     
        </div>
        <div class="input-field col m8">
            <i class="material-icons prefix">email</i>
            <input placeholder="Email" id="email" type="email" class="validate"> 
    </div>
        <div class="input-field col m6">
            <i class="material-icons prefix">fingerprint</i>
            <input placeholder="Password" id="password" type="password" class="validate">
        </div>
    </div>
    <div class="row">
        <div class="input-field col m6">
            <i class="material-icons prefix">phone</i>
            <input placeholder="Phone Number" id="PhoneNumber" type="number" class="validate">
    </div>
    </div>
    <div class="row">
        <div class="input-field col m6">
            <i class="material-icons prefix">location_on</i>
            <input placeholder="Location" id="location" type="text" class="validate">
        </div>
        <div class="input-field col m6">
            <input placeholder="Range of action" id="Range" type="number" class="validate">
        </div>    
    </div>
    <div class="row">
        <div class="input-field col m6">
            <i class="material-icons prefix">group</i>
            <input placeholder="Number of workers" id="WorkersNumber" type="number" class="validate">
    </div>
    <div class="row">
        <div class="col m8">
            <span class="">What do you offer:</span>
            <p></p>
            <form>
                <label>
                    <input type="radio" id="Catering" name="group" class="with-gap">
                    <span>Catering</span>
                </label>
                <label>
                    <input type="radio" id="Segurança" name="group" class="with-gap">
                    <span>Segurança</span>
                </label>
                <label>
                    <input type="radio" id="Animaçao" name="group" class="with-gap">
                    <span>Animação</span>
                </label>
                <label>
                    <input type="radio" id="Limpeza" name="group" class="with-gap">
                    <span>Limpeza</span>
                </label>
                <label>
                    <input type="radio" id="Serviços" name="group" class="with-gap">
                    <span>Serviços Técnicos</span>
                </label>
            </form>    
        </div>  
        
    </div>
    <div class="row">
        <div class="col m2">
            <button id="register" class="btn blue lighten-2">Register</button>
        </div>
    </div>
</div>`;
}

function makeSignPageClient() {
    return `<div><h4>Account Information</h4></div>  
            <br>
            <div class="row">
                <div class="input-field col m6">
                    <i class="material-icons prefix">account_circle</i>
                    <input placeholder="First Name" id="first_name" type="text" class="validate">                     
                </div>
                <div class="input-field col m6">
                    <input placeholder="Last Name" id="last_name" type="text" class="validate">                     
                </div>
            </div>    
            <div class="row">
                <div class="input-field col m6">
                    <i class="material-icons prefix">insert_emoticon</i>
                    <input placeholder="Username" id="username" type="text" class="validate">                     
                </div>
            </div>
            <div class="row">   
                <div class="input-field col m6">
                    <i class="material-icons prefix">email</i>
                    <input placeholder="Email" id="email" type="email" class="validate"> 
                </div>
            </div>
            <div class="row">   
                <div class="input-field col m6">
                    <i class="material-icons prefix">fingerprint</i>
                    <input placeholder="Password" id="password" type="password" class="validate">
                </div>
            </div>
            <div class="row">
                <div class="input-field col m6">
                    <i class="material-icons prefix">phone</i>
                    <input placeholder="Phone Number" id="PhoneNumber" type="number" class="validate">
                </div>
            </div>
            <div class="row">
                <div class="input-field col m6">
                    <i class="material-icons prefix">phone</i>
                    <input placeholder="Mobile Number" id="MobileNumber" type="number" class="validate">
                </div>
            </div>
            <div class="row">
                <div class="input-field col m6">
                    <i class="material-icons prefix">location_on</i>
                    <input placeholder="Morada" id="Morada" type="text" class="validate">
                </div>
            </div>        
            <div class="row">  
                <div class="col m2">
                    <button id="register" class="btn blue lighten-2 modal-trigger" href="#modal1">Register</button>
                </div>
            </div>`;
}