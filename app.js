const skills = document.querySelectorAll('.skills')
const skill_all = document.querySelector('.skill_all')

skills.forEach( skill => {
    
    skill.addEventListener('change', function(){

        let all_skill = document.querySelectorAll('.skills:checked')

        skill_arr = [];
        
        all_skill.forEach( data => {
            skill_arr.push(data.value)
        });
        
        let list = '';
        skill_arr.map( data => {
            list += `<li class="list-group-item">${data}</li>`
        });

        skill_all.innerHTML = list;

    })
    
})