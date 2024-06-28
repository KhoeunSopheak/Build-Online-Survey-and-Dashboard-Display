       document.getElementById("form").addEventListener("submit",getSubmit);

        function getSubmit(event){
            event.preventDefault();
            let fullname=document.getElementById("fullname").value;
            let email=document.getElementById("putemail").value;
            let experince=document.getElementById("describe-ex").value; 
            let understand=document.getElementById("describe-understand").value;
            let activity=document.getElementById("describe-activity").value;
            let skill=document.getElementById("skill").value;
            let topic=document.getElementById("topic").value;
            let suggestions=document.getElementById("suggestions").value;
            let share=document.getElementById("share").value;

            
            console.log(fullname);
            console.log(email);
            console.log(experince);
            console.log(understand);
            console.log(activity);
            console.log(skill);
            console.log(topic);
            console.log(suggestions);
            console.log(share);

            let grade =document.querySelector('[type="radio"][name="grade"]:checked').value;
            let school =document.querySelector('[type="radio"][name="school"]:checked').value;
            let interest =document.querySelector('[type="radio"][name="interest"]:checked').value;
            let experience =document.querySelector('[type="radio"][name="experience"]:checked').value;
            let section2q1 =document.querySelector('[type="radio"][name="radio-section2-q1"]:checked').value;
            let section2q3 =document.querySelector('[type="radio"][name="radio-section2-q3"]:checked').value;
            let section3q2 =document.querySelector('[type="radio"][name="radio-section3-q2"]:checked').value;
            let section3q3 =document.querySelector('[type="radio"][name="radio-section3-q3"]:checked').value;
            let section3q4 =document.querySelector('[type="radio"][name="radio-section3-q4"]:checked').value;

            console.log(grade);
            console.log(school);
            console.log(interest);
            console.log(experience);
            console.log(section2q1);
            console.log(section2q3);
            console.log(section3q2);
            console.log(section3q3);
            console.log(section3q4);

            // let checkbox =document.querySelector('[type="checkbox"][name="checkbox"]:checked').value;
            // let checkbox1 =document.querySelector('[type="checkbox"][name="checkbox1"]:checked').value;
            // let checkbox2 =document.querySelector('[type="checkbox"][name="checkbox2"]:checked').value;
            var checkbox =document.getElementsByName("checkbox");
                for (var i = 0; i < checkbox.length; i++) {
                  let resutl ="";
                    if (checkbox[i].checked === true) {
                      resutl += checkbox[i].value;
                    }
                    console.log('====>',resutl);
                }

            var checkbox1 =document.getElementsByName("checkbox1");
                for (var i = 0; i < checkbox1.length; i++) {
                     let resutl1 ="";
                    if (checkbox1[i].checked === true) {
                       resutl1 +=checkbox1[i].value;
                    }
                    console.log('====>',resutl1);
                }    
            var checkbox2 =document.getElementsByName("checkbox2");
                for (var i = 0; i < checkbox2.length; i++) {
                  let resutl2 ="";
                    if (checkbox2[i].checked === true) {
                       resutl2 +=checkbox2[i].value;
                    }
                    console.log('====>',resutl2);
                }
                let answers=[];
                for(let i =1;i <= 21;i++){
                  answers.push({
                    fullname:fullname,
                    email:email,
                    question_id: i,
                    answer:[""],
                    created_by: "sopheakkhoeun", 
                  })   
               }
                  answers[0].answer =[fullname];
                  answers[1].answer =[email];
                  answers[2].answer =[grade];
                  answers[3].answer =[school];
                  answers[4].answer =[interest];
                  answers[5].answer =[experience];
                  answers[6].answer =[experince];
                  answers[7].answer =[checkbox];
                  answers[8].answer =[section2q1];
                  answers[9].answer =[understand];
                  answers[10].answer =[section2q3];
                  answers[11].answer =[activity];
                  answers[12].answer =[checkbox1];
                  answers[13].answer =[section3q2];
                  answers[14].answer =[section3q3];
                  answers[15].answer =[section3q4];
                  answers[16].answer =[checkbox2];
                  answers[17].answer =[skill];
                  answers[18].answer =[topic];
                  answers[19].answer =[suggestions];
                  answers[20].answer =[share];
                 saveData(answers);

               window.location.href='./pages/feedback/index.html';
              } 
              function saveData(data) {
                fetch('https://wmad-survey-backend.vercel.app/api/form-answers/submit', {
                  method: 'POST',
                  body: JSON.stringify({
                    answers: data
                  }),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
                  },
                })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  return response.json();
                })
                .then(json => {
                  console.log(json);
                })
                .catch(error => {
                  console.error('There was a problem with the fetch operation:', error);
                });
              }
              
                   
                
                
                
                
              
            
              
               
            
                

      

      
