import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/Layout";
import { APP_NAME, DOMAIN, FB_APP_ID } from '../../config';


const GameMasters = () => {
	const head = () => (
        <Head>
            <title>Game Master Blogs | {APP_NAME}</title>
            <meta
                name="description"
                content="Experience the best advice for new or veteran RPG Game Masters - host plan game night tabletop event convention GM DM referee judge storytelling"
            />
            <link rel="canonical" href={`${DOMAIN}/game-masters`} />
            <meta property="og:title" content={`Latest RPG Game Master Blogs | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Experience the best advice for new or veteran RPG Game Masters - host plan game night tabletop event convention GM DM referee judge storytelling"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/game-masters`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/images/game-masters.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/images/game-masters.jpg`} />
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
              	style={{backgroundImage: 'url(' + '/images/game-masters.jpg' + ')',
              		height: "200px",
              		backgroundSize: 'cover', 
              		width: '100%',  
              		backgroundPosition: 'center' 
               	}}>
               	<h1 className="img-text text-shadow">
                  GAME MASTERS
                </h1>
				
              </div>
            </header>
          </div>
          <div className="col-md-12 text-center">
          	<div>
				<Link href={"/categories/running-the-game"}>
			        <a className="btn btn-sm btn-info mr-1 ml-1 mt-2">
			          Running the Game
			        </a>
	      		</Link>
	      		<Link href={"/categories/campaigns"}>
			        <a className="btn btn-sm btn-info mr-1 ml-1 mt-2">
			          Campaigns
			        </a>
	      		</Link>
	      		<Link href={"/categories/adventures"}>
			        <a className="btn btn-sm btn-info mr-1 ml-1 mt-2">
			          Adventures
			        </a>
	      		</Link>
	      		<Link href={"/categories/treasure"}>
			        <a className="btn btn-sm btn-info mr-1 ml-1 mt-2">
			          Treasure
			        </a>
	      		</Link>
	      		<Link href={"/categories/monsters"}>
			        <a className="btn btn-sm btn-info mr-1 ml-1 mt-2">
			          Monsters
			        </a>
	      		</Link>
      		</div>

      		<div className="mt-2">	      		
	      		<Link href={"/tags/random-tables"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Random Tables
			        </a>
	      		</Link>
	      		<Link href={"/tags/maps"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Maps
			        </a>
	      		</Link>
      		</div>

          	<div>
		        <h4 className="bg-dark p-2 mt-3 text-white font-weight-bold text-center w-75 mx-auto">
                  Tier
                </h4>
    		</div>
      		<div className="mt-2">
      			<Link href={"/tags/low-levels"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Low Levels
			        </a>
	      		</Link>
	      		<Link href={"/tags/mid-levels"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Mid Levels
			        </a>
	      		</Link>
	      		<Link href={"/tags/high-levels"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          High Levels
			        </a>
	      		</Link>
	      		<Link href={"/tags/epic-levels"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Epic Levels
			        </a>
	      		</Link>
      		</div>

      		<div>
		        <h4 className="bg-dark p-2 mt-3 text-white font-weight-bold text-center w-75 mx-auto">
                  People
                </h4>
				
      		</div>
      		<div className="mt-2">
      			<Link href={"/tags/npcs"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          NPCs
			        </a>
	      		</Link>
	      		<Link href={"/tags/heroes"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Heroes
			        </a>
	      		</Link>
	      		<Link href={"/tags/villains"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Villains
			        </a>
	      		</Link>
	      		<Link href={"/tags/factions"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Factions
			        </a>
	      		</Link>
	      		<Link href={"/tags/deities"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Deities
			        </a>
	      		</Link>
      		</div>

      		<div>
		        <h4 className="bg-dark p-2 mt-3 text-white font-weight-bold text-center w-75 mx-auto">
                  Places
                </h4>
				
      		</div>
      		<div className="mt-2">
      			<Link href={"/tags/dungeons"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Dungeons
			        </a>
	      		</Link>
	      		<Link href={"/tags/wilderness"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Wilderness
			        </a>
	      		</Link>
      		</div>
      		<div className="mt-2">
      			<Link href={"/tags/hamlets"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Hamlets
			        </a>
	      		</Link>
	      		<Link href={"/tags/villages"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Villages
			        </a>
	      		</Link>
	      		<Link href={"/tags/towns"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Towns
			        </a>
	      		</Link>
	      		<Link href={"/tags/cities"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Cities
			        </a>
	      		</Link>
	      		<Link href={"/tags/metropolis"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Metropolis
			        </a>
	      		</Link>
	      	</div>
      		<div className="mt-2">
	      		<Link href={"/tags/provinces"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Provinces
			        </a>
	      		</Link>
	      		<Link href={"/tags/kingdoms"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Kingdoms
			        </a>
	      		</Link>
	      		<Link href={"/tags/continents"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Continents
			        </a>
	      		</Link>
	      		<Link href={"/tags/worlds"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Worlds
			        </a>
	      		</Link>
	      		<Link href={"/tags/planes-of-existence"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Planes of Existence
			        </a>
	      		</Link>
	      	</div>
      		

      		<div>
		        <h4 className="bg-dark p-2 mt-3 text-white font-weight-bold text-center w-75 mx-auto">
                  Things
                </h4>
				
      		</div>
      		<div className="mt-2">
      			<Link href={"/tags/traps"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Traps
			        </a>
	      		</Link>
	      		<Link href={"/tags/diseases"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Diseases
			        </a>
	      		</Link>
	      		<Link href={"/tags/poisons"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Poisons
			        </a>
	      		</Link>
      		</div>

      		<div>
      			<h4 className="bg-dark p-2 mt-3 text-white font-weight-bold text-center w-75 mx-auto">
                  Magic Items
                </h4>
				<Link href={"/tags/magic-items"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-2">
			          Magic Items
			        </a>
	      		</Link>
      		</div>
      		<div className="mt-2 mb-5">
      			<Link href={"/tags/armor"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Armor
			        </a>
	      		</Link>
	      		<Link href={"/tags/potions"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Potions
			        </a>
	      		</Link>
	      		<Link href={"/tags/rings"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Rings
			        </a>
	      		</Link>
	      		<Link href={"/tags/rods"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Rods
			        </a>
	      		</Link>
	      		<Link href={"/tags/scrolls"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Scrolls
			        </a>
	      		</Link>
	      		<Link href={"/tags/staffs"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Staffs
			        </a>
	      		</Link>
	      		<Link href={"/tags/wands"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Wands
			        </a>
	      		</Link>
	      		<Link href={"/tags/weapons"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Weapons
			        </a>
	      		</Link>
	      		<Link href={"/tags/wondrous-items"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Wondrous Items
			        </a>
	      		</Link>
	      		<Link href={"/tags/sentient-items"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Sentient Items
			        </a>
	      		</Link>
	      		<Link href={"/tags/artifacts"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Artifacts
			        </a>
	      		</Link>
      		</div>

          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default GameMasters;