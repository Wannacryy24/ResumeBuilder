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
}function saveIntoObj() {
    // Get all input elements inside the form
    var inputs = document.querySelectorAll('.personalDetails input');
    
    // Initialize an empty string to build the resume data
    var data = '<div class="resumeDetails">';
    
    // Variable to hold name data
    var nameData = {};
    
    // Iterate over each input element
    inputs.forEach(function(input) {
        // Get the input id and value
        var id = input.id;
        var value = input.value;
        
        // Find the corresponding label text
        var label = document.querySelector(`label[for="${id}"]`);
        var labelText = label ? label.innerText : '';
        
        // Store the value in nameData if it's related to name
        if (id === 'fname' || id === 'lname') {
            nameData[id] = value;
        } else {
            // Add other input's data to the resume details
            if (value) {
                data += `<p><strong>${labelText}:</strong> ${value}</p>`;
            }
        }
    });
    
    // Add name data to the top of the resume details
    if (nameData.fname || nameData.lname) {
        data = `<div class="resumeDetails">
                    <h2>${nameData.fname || ''} ${nameData.lname || ''}</h2>` + data;
    }
    
    // Close the div tag
    data += '</div>';
    
    // Insert the HTML into the .renderResume div
    document.querySelector('.renderResume').innerHTML = data;
}
