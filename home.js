const track=document.getElementById('gallery-track'),previous=document.getElementById('gallery-prev'),next=document.getElementById('gallery-next'),counter=document.getElementById('gallery-count');
if(track&&previous&&next&&counter){
 const cards=Array.from(track.querySelectorAll('.gallery-card'));
 const step=()=>cards[0].getBoundingClientRect().width+parseFloat(getComputedStyle(track).gap);
 const update=()=>{const index=Math.min(cards.length-1,Math.round(track.scrollLeft/step()));counter.textContent=`${String(index+1).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`;previous.disabled=track.scrollLeft<4;next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-4;};
 const move=direction=>track.scrollBy({left:direction*step(),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));track.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();move(event.key==='ArrowRight'?1:-1);}});track.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
}
