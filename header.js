export function createLandingHeader(){
    let headerHtml = `
                        <div id='left-div'>Resume Builder</div>
                        <div id='middle-div'>
                            <ul class='header-ul'>
                                <li>Features</li>
                                <li>Templates</li>
                                <li>Testiomonials</li>
                            </ul>
                        </div>
                        <div id='right-div'>
                            <button id='login-btn'>Login</button>
                            <button id='create-resume-btn'>Create Resume</button>
                        </div>
    
    `
    document.body.querySelector('header').innerHTML +=headerHtml;
}


export function landingPageDetails(){
    document.querySelector('#app').innerHTML=
    `<div class='landing-page-mainDiv'>
        <div class='left-deatails-div'>
            <div class='upper-div'>Stand out with a professionally designed resume</div>
            <div class='center-div'>By employing the best practices and innovative tech, Resume Builder boosts your chances of landing a better job – completely for free.</div>
            <div class='lower-div'>
                <button class='create-btn-resume'>Build Resume</button>
                <button class='no-registration'>No registration required</button>
            </div>
        </div>
        <div class='right-deatails-div'>
            <div class='Name-Heading'>
                <div class='imageDiv'>
                    <img src='./Ellips.png'>
                </div>
                <div class='upperPart'>
                    <div  class='namePart'>
                        <span class='name'>Jane Doe </span>
                        <span class='category'>Frontend Developer</span>
                    </div>
                    <div class='bioPart'>
                        <span class='bio'>Bio</span>
                        <span class=''>I'm A Frontend Developer with 3 years Experience in ReactJs and VueJs</span>
                    </div>
                </div>
                
            </div>
            <div class='workHistoryDiv'>
            <span class='workHistory'>Work History</span>
            <span class='cloud'>Cloud Engineer | India</span>
            <div>
                <span class=''>I Am Christian Chiemela</span>
                <span>A cloud Enginner , A american with the passion for creating stunning designs.
                        Senior Front-End Developer with 9 years of proven leadership and meaningfully contributions to teams of varying size and scope. With my results-driven mentality, I transformed my team at GitHub by seeking, learning, and teaching new, efficient technologies to make aggressive deadlines consistently achievable. Passionate about going the extra mile to ensure the customer is unquestionably satisfied with the product or service provided. With emphasis on scalable and well-documented code, I look forward to working collaboratively as well as spearheading independent projects at Accenture.
                </span>
            </div>
            </div>
        </div>
     </div>
    `
}