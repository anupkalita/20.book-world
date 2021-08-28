const inputValue = document.querySelector('#input-value');
const arrow = document.querySelector('#author-content');

inputValue.addEventListener("keypress", loadData); 

function loadData(e){
    if(e.key === 'Enter'){

        const xhr = new XMLHttpRequest();

        xhr.open('GET',`https://openlibrary.org/search/authors.json?q=${inputValue.value}`,true);

        xhr.onload = function(){
            if(this.status === 200){
                let data = JSON.parse(this.responseText);
                let output="";
                data.docs.forEach(function(item){
                    output += `
                        <li class="author-name"><span>${item.name} <i class="fas fa-chevron-down"></i></span>
                        <ul class="author-details">
                            Author Details
                            <li>Birth Date: ${item.birth_date}</li>
                            <li>Top Work: ${item.top_work}</li>
                            <li>Top Books: ${item.work_count}</li>
                        </ul>
                        </li>
                    `
                })
                document.getElementById('author-content').innerHTML = output;
                inputValue.value="";
            }
        }

        xhr.send();
    }

    
    e.preventDefault;
}

    arrow.addEventListener('click', function(e){
        if(e.target.classList.contains('fa-chevron-down')){
            console.log(e.target.parentElement.nextElementSibling.classList);

            e.target.parentElement.nextElementSibling.classList.toggle("show");
        }

    })
 