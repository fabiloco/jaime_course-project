document.addEventListener('DOMContentLoaded', () =>{
    
    const playBtn = document.querySelectorAll('.img-play');
    
    playBtn.forEach(btn => {
        btn.addEventListener('click', ()=>{
            if(btn.classList.contains('img-play1')) {
                Swal.fire({
                    html: `<iframe width="840" height="480" src="https://www.youtube.com/embed/yaqvkwifFWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    width: 896,
                    showConfirmButton: false,
                })
            } else if(btn.classList.contains('img-play2')) {
                Swal.fire({
                    html: `<iframe width="840" height="480" src="https://www.youtube.com/embed/wycJcr0knjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    width: 896,
                    showConfirmButton: false,
                })
            }
            
        });
    });

});