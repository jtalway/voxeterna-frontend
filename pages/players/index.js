import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/Layout";
import { APP_NAME, DOMAIN, FB_APP_ID } from '../../config';


const Players = () => {
	const head = () => (
        <Head>
            <title>Player Blogs | {APP_NAME}</title>
            <meta
                name="description"
                content="Escape reality, unleash your imagination, defeat monsters, gain treasure, solve puzzles, use teamwork - min-maxer powergamer murderhobo fun socialize quest"
            />
            <link rel="canonical" href={`${DOMAIN}/players`} />
            <meta property="og:title" content={`Latest RPG Player Blogs | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Escape reality, unleash your imagination, defeat monsters, gain treasure, solve puzzles, use teamwork - min-maxer powergamer murderhobo fun socialize quest"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/players`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/images/players.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/images/players.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`}
             />
        </Head>
    );
  return (
    <React.Fragment>
    	{head()}
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-1"
              	style={{backgroundImage: 'url(' + '/images/players.jpg' + ')',
              		height: "200px",
              		backgroundSize: 'cover', 
              		width: '100%',  
              		backgroundPosition: 'center' 
               	}}>
               	<h1 className="img-text text-shadow">
                  PLAYERS
                </h1>
				
              </div>
            </header>
            <section className="mt-2 mr-5 ml-5 text-center">
				Each player controls a character, which is referred to as a player character or PC.
			</section>
          </div>
          <div className="col-md-12 text-center">
          	<div>
				<Link href={"/categories/characters"}>
			        <a className="btn btn-sm btn-info mr-1 ml-1 mt-2">
			          Characters
			        </a>
	      		</Link>
	      		<Link href={"/categories/playing-the-game"}>
			        <a className="btn btn-sm btn-info mr-1 ml-1 mt-2">
			          Playing the Game
			        </a>
	      		</Link>
      		</div>

      		<div className="mt-2">
      			<Link href={"/tags/backgrounds"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Backgrounds
			        </a>
	      		</Link>
	      		<Link href={"/tags/feats"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Feats
			        </a>
	      		</Link>
	      		<Link href={"/tags/equipment"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Equipment
			        </a>
	      		</Link>
	      		<Link href={"/tags/vehicles"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Vehicles
			        </a>
	      		</Link>
      		</div>

          	<div>
          		<h4 className="bg-dark p-2 mt-3 text-white font-weight-bold text-center w-75 mx-auto">
                  Races
                </h4>
				<Link href={"/tags/races"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-2">
			          Races
			        </a>
	      		</Link>
      		</div>
      		<div className="mt-2">
      			<Link href={"/tags/dwarfs"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Dwarfs
			        </a>
	      		</Link>
	      		<Link href={"/tags/elfs"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Elfs
			        </a>
	      		</Link>
	      		<Link href={"/tags/halflings"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Halflings
			        </a>
	      		</Link>
	      		<Link href={"/tags/humans"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Humans
			        </a>
	      		</Link>
	      		<Link href={"/tags/dragonborn"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Dragonborn
			        </a>
	      		</Link>
	      		<Link href={"/tags/gnomes"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Gnomes
			        </a>
	      		</Link>
	      		<Link href={"/tags/half-elfs"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Half-Elfs
			        </a>
	      		</Link>
	      		<Link href={"/tags/half-orcs"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Half-Orcs
			        </a>
	      		</Link>
	      		<Link href={"/tags/tieflings"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Tieflings
			        </a>
	      		</Link>
      		</div>
          
			<div>
				<h4 className="bg-dark p-2 mt-3 text-white font-weight-bold text-center w-75 mx-auto">
                  Classes
                </h4>
				<Link href={"/tags/classes"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-2">
			          Classes
			        </a>
	      		</Link>
	      		
      		</div>
      		<div className="mt-2">
      			<Link href={"/tags/barbarians"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Barbarians
			        </a>
	      		</Link>
	      		<Link href={"/tags/bards"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Bards
			        </a>
	      		</Link>
	      		<Link href={"/tags/clerics"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Clerics
			        </a>
	      		</Link>
	      		<Link href={"/tags/druids"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Druids
			        </a>
	      		</Link>
	      		<Link href={"/tags/fighters"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Fighters
			        </a>
	      		</Link>
	      		<Link href={"/tags/monks"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Monks
			        </a>
	      		</Link>
	      		<Link href={"/tags/paladins"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Paladins
			        </a>
	      		</Link>
	      		<Link href={"/tags/rangers"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Rangers
			        </a>
	      		</Link>
	      		<Link href={"/tags/rogues"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Rogues
			        </a>
	      		</Link>
	      		<Link href={"/tags/sorcerers"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Sorcerers
			        </a>
	      		</Link>
	      		<Link href={"/tags/warlocks"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Warlocks
			        </a>
	      		</Link>
	      		<Link href={"/tags/wizards"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Wizards
			        </a>
	      		</Link>
      		</div>

      		<div>
				<h4 className="bg-dark p-2 mt-3 text-white font-weight-bold text-center w-75 mx-auto">
                  Magic
                </h4>
				<Link href={"/tags/spells"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-2">
			          Spells
			        </a>
	      		</Link>
      		</div>
      		<div className="mt-2 mb-5">
      			<Link href={"/tags/abjuration"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Abjuration
			        </a>
	      		</Link>
	      		<Link href={"/tags/conjuration"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Conjuration
			        </a>
	      		</Link>
	      		<Link href={"/tags/divination"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Divination
			        </a>
	      		</Link>
	      		<Link href={"/tags/enchantment"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Enchantment
			        </a>
	      		</Link>
	      		<Link href={"/tags/evocation"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Evocation
			        </a>
	      		</Link>
	      		<Link href={"/tags/illusion"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Illusion
			        </a>
	      		</Link>
	      		<Link href={"/tags/necromancy"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Necromancy
			        </a>
	      		</Link>
	      		<Link href={"/tags/transmutation"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Transmutation
			        </a>
	      		</Link>
      		</div>

          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default Players;