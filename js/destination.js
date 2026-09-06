const places={"madang-town":{title:'Madang<br><em>Town.</em>',
    kicker:'DESTINATION · GATEWAY',
    intro:'The gateway to a province of ocean, culture and adventure.',
    heading:'Start here.',
    copy:'Explore the waterfront, local life, markets, history and nearby islands before heading farther into the province.',
    tags:['Culture','Ocean','History']
},
bilbil:{title:'Bilbil<br><em>Village.</em>',
        kicker:'DESTINATION · CULTURE',
        intro:'A place where craft and community tell a story.',
        heading:'Meet the makers.',
        copy:'Use this page to introduce Bilbil pottery, community-led experiences and the people who carry traditional knowledge forward.',
        tags:['Culture','Craft','Village']
    },
    balek:{title:'Balek<br><em>Nature.</em>',
        kicker:'DESTINATION · WILDLIFE',
        intro:'Forest, wildlife and natural springs.',
        heading:'Look closer.',
        copy:'A nature-focused destination page for wildlife, forest and geothermal features.',
        tags:['Wildlife','Nature','Forest']
    },
    karkar:{title:'Karkar<br><em>Island.</em>',
        kicker:'DESTINATION · ISLANDS',
        intro:'An island shaped by volcano, agriculture and ocean.',
        heading:'Island of fire.',
        copy:'Explore island landscapes, communities, agriculture and the relationship between land and sea.',
        tags:['Island','Culture','Nature']
    },
    'hansa-bay':{title:'Hansa<br><em>Bay.</em>',
        kicker:'DESTINATION · HISTORY',
        intro:'Ocean landscapes carrying stories of the past.',
        heading:'Remember the sea.',
        copy:'Connect coastal scenery and responsible heritage interpretation with the region’s WWII history and wreck sites.',
        tags:['History','Diving','Ocean']
    },
    'rai-coast':{title:'Rai<br><em>Coast.</em>',
        kicker:'DESTINATION · ADVENTURE',
        intro:'A wild coastline between mountains, rivers and villages.',
        heading:'Follow the coast.',
        copy:'A template for exploring the Rai Coast through nature, adventure, village experiences and responsible travel.',
        tags:['Adventure','Nature','Culture']
    }
};
const p=new URLSearchParams(location.search).get('place');
const d=places[p]||places['madang-town'];

document.querySelector('#detail-title').innerHTML=d.title;
document.querySelector('#detail-kicker').textContent=d.kicker;
document.querySelector('#detail-intro').textContent=d.intro;
document.querySelector('#detail-heading').textContent=d.heading;
document.querySelector('#detail-copy').textContent=d.copy;
document.querySelector('#detail-tags').innerHTML=d.tags.map(x=>`<span>${x}</span>`).join('');