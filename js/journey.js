document.querySelector('#journey-form').addEventListener('submit',e=>{e.preventDefault();
    const days=+document.querySelector('#days').value;
    const interests=[...document.querySelectorAll('input:checked')].map(x=>x.value);
    const chosen=interests.length?interests:['Ocean','Culture'];
    const places=['Madang Town','Bilbil','Balek','Karkar Island','Hansa Bay','Rai Coast','Madang Town'];
    const out=document.querySelector('#days-output');
    out.innerHTML=Array.from({length:days},(_,i)=>{const interest=chosen[i%chosen.length];
        const place=places[i%places.length];
        return `<div class="day-card"><b>Day ${i+1}</b>
        <div><h3>${place}</h3><p>${interest} · Discover at your own pace · Confirm current local access and operator details before travel.</p></div></div>`}).join('');
        document.querySelector('#itinerary-title').textContent=`${days} days · ${chosen.join(' + ')}`;
        document.querySelector('#itinerary').classList.remove('hidden');
        document.querySelector('#itinerary').scrollIntoView({behavior:'smooth'});
    });