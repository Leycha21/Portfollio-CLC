document.addEventListener('DOMContentLoaded', function(){
    links.addEventListener ('click',function(e){
        e.preventDefault();
        const target=document.querySelector(this.getAttribute('href'))
        if (target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        };
    });
    window.addEventListener('scoll',()=> {
        const fills=document.querySelector('.progress-fill');
        fills.forEach(fill=> {
            const width=fill.getAttribute('style').match(/\d+/)[0]
            fill.style.width=width + '%';
        });
    });
    const contactMeBtn=document.getElementById('contactMeBtn');
    const yourEmailAdress='leychachris28@gmail.com';
    if(contactMeBtn){
        contactMeBtn.addEventListener('click', function(){
           const mailtoLink ='mailto:'+ yourEmailAdress+ '?subject=Offre de partenariat suite a votre CV';
           window.location.href=mailtoLink;
           console.log('Ouverture du client email pour:'+ yourEmailAdress);
        }); 
    }
})
