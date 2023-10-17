import { useState } from 'react'
import './App.css'
import SearchBar from './searchBar'
import NavBar from './navBar'
import Film from './film'

function App() {
  const descri = [
    { titre: "coco",
      genre: "animation",
      synopsis:"Depuis déjà plusieurs générations, la musique est bannie dans la famille de Miguel. Un vrai déchirement pour le jeune garçon dont le rêve ultime est de devenir un musicien aussi accompli que son idole, Ernesto de la Cruz. Bien décidé à prouver son talent, Miguel, par un étrange concours de circonstances, se retrouve propulsé dans un monde étonnant et coloré lié aux célébrations des ancêtres. Là, il se lie d’amitié avec Hector, un gentil garçon mais un peu filou sur les bords. Ensemble, ils vont accomplir un voyage extraordinaire qui leur révèlera la véritable histoire qui se cache derrière celle de la famille de Miguel…",
      imgSrc: "./public/coco.jpg",
    },
    { titre: "gran turismo",
      genre: "action",
      synopsis: "Gran Turismo est inspiré de l'incroyable histoire vécue d'une invraisemblable bande d'infortunés – un amateur de jeu vidéo de classe ouvrière, un ex-pilote d'autos de course paumé et un idéaliste de l'industrie du sport motorisé. Ensemble, ils risquent tout pour percer dans le sport le plus prestigieux au monde. Gran Turismo est une captivante histoire et un feu roulant d'action qui prouvent que tout est possible lorsqu'on conduit avec l'énergie du désespoir.",
      imgSrc: "./public/gran turismo.jpg",
    },
    { titre: "barbie",
      genre: "comedie",
      synopsis: "Parallèlement au monde réel, il existe Barbie Land, un monde parfait où les poupées Barbie vivent joyeusement, persuadées d'avoir rendu les filles humaines heureuses. Mais un jour, une Barbie commence à se poser des questions et à devenir humaine. Sur les conseils d'une Barbie étrange, elle part pour le monde réel afin de retrouver la fille à laquelle elle appartenait afin de pouvoir retrouver sa perfection. Dans sa quête, elle est accompagnée par un Ken fou amoureux d'elle qui va également trouver un sens à sa vie dans le monde réel...",
      imgSrc: "./public/barbie.jpg",
    },
    { titre: "expendables 4",
      genre: "action",
      synopsis: "Armés de toutes les armes dont ils peuvent disposer, les Expendables sont la dernière ligne de défense du monde et l'équipe que l'on appelle lorsque toutes les autres options ne sont plus possibles. Le mercenaire Barney Ross et son équipe affrontent un marchand d'armes et son armée privée.",
      imgSrc: "./public/expendables4.jpg",
    },
    { titre: "top gun",
      genre: "action",
      synopsis: "Après avoir été l’un des meilleurs pilotes de chasse de l'Aéronavale américaine pendant plus de trente ans, Pete Mitchell continue à repousser ses limites en tant que pilote d'essai. Il refuse de monter en grade, car cela l’obligerait à renoncer à voler. Il est chargé de former un détachement de jeunes diplômés de l’école Top Gun pour une mission spéciale qu’aucun pilote n'aurait jamais imaginée. Lors de cette mission, Maverick rencontre le lieutenant Bradley “Rooster” Bradshaw, le fils de son défunt ami, le navigateur Nick “Goose” Bradshaw. Face à un avenir incertain, hanté par ses fantômes, Maverick va devoir affronter ses pires cauchemars au cours d’une mission qui exigera les plus grands sacrifices.",
      imgSrc: "./public/top gun.jpg",
    },
    { titre: "mission impossible",
      genre: "action",
      synopsis: "Ethan Hunt et son équipe de l’IMF se lancent dans leur mission la plus périlleuse à ce jour : traquer une effroyable nouvelle arme avant que celle-ci ne tombe entre de mauvaises mains et menace l’humanité entière. Le contrôle du futur et le destin du monde sont en jeu. Alors que les forces obscures de son passé ressurgissent, Ethan s’engage dans une course mortelle autour du globe. Confronté à un puissant et énigmatique ennemi, Ethan réalise que rien ne peut se placer au-dessus de sa mission - pas même la vie de ceux qu’il aime.",
      imgSrc: "./public/mission_impossible.jpg",
    },
    { titre: "alibi.com 2",
      genre: "comedie",
      synopsis: "Après avoir fermé son agence Alibi.com et promis à Flo qu'il ne lui mentirait plus jamais, la nouvelle vie de Greg est devenue tranquille, trop tranquille... Plus pour longtemps ! Lorsqu’il décide de demander Flo en mariage, Greg est au pied du mur et doit se résoudre à présenter sa famille. Mais entre son père escroc et sa mère ex-actrice de films de charme, ça risque fort de ruiner sa future union. Il n'a donc pas d'autre choix que de réouvrir son agence avec ses anciens complices pour un ultime Alibi et de se trouver des faux parents plus présentables.",
      imgSrc: "./public/alibi.com2.jpg",
    },
    { titre: "equalizer 3",
      genre: "action",
      synopsis:"Depuis qu'il a renoncé à sa vie d'assassin au service du gouvernement, Robert McCall peine à enterrer les démons de son passé et trouve un étrange réconfort en défendant les opprimés. Alors qu'il pense avoir trouvé un havre de paix dans le sud de l'Italie, il découvre que ses amis sont sous le contrôle de la mafia locale. Quand les évènements prennent une tournure mortelle, McCall sait exactement ce qu'il doit faire : protéger ses amis en s'attaquant directement à la pègre.",
      imgSrc:"./public/equalizer.jpg",
    },
    { titre: "scary movie 5",
      genre: "comedie",
      synopsis: "Jody et Dan, qui forment un jeune couple, emménagent avec leur bébé dans une maison où semblent se manifester d'étranges phénomènes. Ils vont faire appel à un médium... et au ballet pour faire la lumière sur cette malédiction.",
      imgSrc: "./public/scary_movie.jpg",
    },
    { titre: "le chat potté",
      genre: "animation",
      synopsis: "Le Chat Potté découvre que sa passion pour l'aventure et son mépris du danger ont fini par lui coûter cher : il a épuisé huit de ses neuf vies, et en a perdu le compte au passage. Afin de retomber sur ses pattes notre héros velu se lance littéralement dans la quête de sa vie. Il s'embarque dans une aventure épique aux confins de la Forêt Sombre afin de dénicher la mythique Etoile à vœu, seule susceptible de lui rendre ses vies perdues. Mais quand il ne vous en reste qu’une, il faut savoir faire profil bas, se montrer prudent et demander de l’aide. C’est ainsi qu’il se tourne vers son ancienne partenaire et meilleure ennemie de toujours : l’ensorcelante Kitty Pattes De Velours. Le Chat Potté et la belle Kitty vont être aidés dans leur quête, à leur corps bien défendant, par Perro, un corniaud errant et galleux à la langue bien pendue et d’une inaltérable bonne humeur.",
      imgSrc: "./public/chat_potté.jpg",
    },
    { titre: "krypto et les Super-Animaux",
      genre: " animation",
      synopsis: "Krypto, le super-chien de Superman, se trouve face à un défi immense : sauver son maître, enlevé par Lex Luthor et son maléfique cochon d’inde Lulu. Pour cela, il devra faire équipe avec une bande d’animaux au grand cœur mais plutôt maladroits.",
      imgSrc:"./public/krypto.jpg",
    },
    { titre:"bernie le dauphin",
      genre:"comedie",
    synopsis:"Un frère et une soeur découvrent sur la plage un dauphin brûlé par le soleil et décident de le soigner. Mais les deux enfants prennent connaissance d'un terrible plan qui pourrait détruire la plage et la maison de leur nouvel ami. Ils vont devoir empêcher ce terrible plan d'être mis à exécution.",
      imgSrc: "./public/bernie.jpg",
    },
    { titre: "mega ape",
      genre: "action",
      synopsis: "Un singe génétiquement muté s'échappe d'une installation top secrète et fait des ravages à Hollywood.",
      imgSrc: "./public/mega ape.jpg",
    },
    { titre: "moi moche et méchant",
      genre: "animation",
      synopsis: "Dans un charmant quartier résidentiel délimité par des clôtures de bois blanc et orné de rosiers fleurissants se dresse une bâtisse noire entourée d’une pelouse en friche. Cette façade sinistre cache un secret : Gru, un méchant vilain, entouré d’une myriade de sous‐fifres et armé jusqu’aux dents, qui, à l’insu du voisinage, complote le plus gros casse de tous les temps : voler la lune (Oui, la lune! )… Gru affectionne toutes sortes de sales joujoux. Il possède une multitude de véhicules de combat aérien et terrestre et un arsenal de rayons immobilisants et rétrécissants avec lesquels il anéantit tous ceux qui osent lui barrer la route… jusqu’au jour où il tombe nez à nez avec trois petites orphelines qui voient en lui quelqu’un de tout à fait différent : un papa. Le plus grand vilain de tous les temps se retrouve confronté à sa plus dure épreuve : trois fillettes prénommées Margo, Édith et Agnès.",
      imgSrc: "./public/moi moche et méchant.jpg",
    },
    { titre: "black panther",
      genre: "action",
      synopsis: "Après les événements qui se sont déroulés dans « Captain America : Civil War », T’Challa revient chez lui prendre sa place sur le trône du Wakanda, une nation africaine technologiquement très avancée. Mais lorsqu’un vieil ennemi resurgit, le courage de T’Challa est mis à rude épreuve, aussi bien en tant que souverain qu’en tant que Black Panther. Il se retrouve entraîné dans un conflit qui menace non seulement le destin du Wakanda, mais celui du monde entier…",
      imgSrc: "./public/black panther.jpg",
    },
    { titre: "fast and furious",
      genre: "action",
      synopsis: "La nuit tombée, Dominic Toretto règne sur les rues de Los Angeles à la tête d'une équipe de fidèles qui partagent son goût du risque, sa passion de la vitesse et son culte des voitures de sport lancées à plus de 250 km/h dans des rodéos urbains d'une rare violence. Ses journées sont consacrées à bricoler et à relooker des modèles haut de gamme, à les rendre toujours plus performants et plus voyants, à organiser des joutes illicites où de nombreux candidats s'affrontent sans merci sous le regard énamouré de leurs groupies. À la suite de plusieurs attaques de camions, la police de L.A. décide d'enquêter sur le milieu des street racers. Brian, un jeune policier, est chargé d'infiltrer la bande de Toretto, qui figure, avec celle de son rival Johnny Tran, au premier rang des suspects.",
      imgSrc: "./public/fast and furios.jpg",
    },
    { titre:" madagascar 2",
      genre: "animation",
      synopsis: "Après s’être échoué sur les rivages lointains de Madagascar, nos Newyorkais ont concocté un plan dément – si dément qu’il pourrait bien réussir ! Avec une discipline quasi militaire, les pingouins ont rafistolé une épave d’avion, et au terme d’un vol chaotique à souhait, l’improbable équipage a pu rallier les vastes plaines d’Afrique. Les anciens pensionnaires du zoo de Central Park rencontrent alors pour la première fois leurs familles respectives dans leur habitat naturel. Une occasion unique de renouer avec ses racines, mais aussi de mesurer le gouffre qui sépare la nature de la civilisation, le « continent noir » de la « jungle de béton ». De nouvelles aventures, encore plus palpitantes, attendent nos amis sur la terre de leurs ancêtres, mais le souvenir de New York reste présent en chacun d’eux. N’estce pas là que doit finalement se jouer leur avenir?",
      imgSrc: "./public/madagascar.jpg",
    },

  ];
  const [filteredGenre, setFilteredGenre] = useState(null);

  return (<div>
    <div className="header-container">
        <h1>Netfilms</h1>
        </div>
        <div className='navsearch'>
        <div className='navbar'>
          <NavBar onFilter={genre => setFilteredGenre(genre)} />
    </div>
        <div className='searchbar'>
          <SearchBar/>
    </div>
    
    </div>
    <div className="jaquette">
    {descri.filter(film => !filteredGenre || film.genre === filteredGenre).map((film, index) => <Film key={index} descri={film} />)}
    </div>
    
    


  </div>) 
}

export default App
