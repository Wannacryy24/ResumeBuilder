export function createResumeHeading(){
    var enterFirstDetails = document.getElementById('app');
    console.log(enterFirstDetails);
    enterFirstDetails.innerHTML=`
    <div class='wrapperDivForDetails'>    
        <div class='personalDetails'>
            <form>
                <div class='nameDiv'>
                    <div>
                        <label for="fname" class='color-grey'>First name</label>
                        <input type='text' id='fname' class='commonInputCss' name='fname' placeholder='eg: Mayank'></input>
                    </div>
                    <div>
                        <label for="lname" class='color-grey'>Last name</label>
                        <input type='text' id='lname' name='lname' class='commonInputCss' placeholder='eg: Verma'></input>
                    </div>    
                </div>
                
                <div class='cityCountryDiv'>
                    <div>
                        <label for="city" class='color-grey'>City</label>
                        <input type='text' id='city' name='lname' class='commonInputCss' placeholder='city'></input>
                    </div>
                    
                    <div>
                        <label for="country" class='color-grey'>Country</label>
                        <input type='text' id='country' name='country' class='commonInputCss' placeholder='Country'></input>
                    </div>
                </div>

                <div class='phoneEmailDiv'>
                    <div>
                        <label for="phone" class='color-grey'>Phone no</label>
                        <input type='text' id='phone' name='phone' class='commonInputCss' placeholder='Phone No'></input>
                    </div>
                    <div>
                        <label for="email" class='color-grey'>email</label>
                        <input type='text' id='email' name='email' class='commonInputCss' placeholder='xyz@abc.com'></input>
                    </div>
                </div>
            <form>    
        </div>    
        <div class='renderResume'>
        
        </div>
        
    </div>
    <button id='preview'>Preview</button>
    `;
    document.getElementById('preview').addEventListener('click',function(){
        saveIntoObj();
    })
}

function saveIntoObj(){
    var inputid = document.getElementById('fname').value;
    console.log(inputid);
 var data = `
            <div class='name'>
                <div class='nameList'><h1>${inputid}</h1></div>
                <div class='lastNameList'></div>
            </div>`
document.querySelector('.renderResume').innerHTML=data;
}