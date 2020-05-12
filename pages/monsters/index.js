import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/Layout";
import { APP_NAME, DOMAIN, FB_APP_ID } from '../../config';

const Monsters = () => {
	const head = () => (
        <Head>
            <title>Monster Blogs | {APP_NAME}</title>
            <meta
                name="description"
                content="Battle the boss, champions, and minions!  Challenge players with new Monsters - by creature type / environment – tactics lair defenses morale loot"
            />
            <link rel="canonical" href={`${DOMAIN}/monsters`} />
            <meta property="og:title" content={`Latest RPG Monster Blogs | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Battle the boss, champions, and minions!  Challenge players with new Monsters - by creature type / environment – tactics lair defenses morale loot"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/monsters`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/images/monsters.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/images/monsters.jpg`} />
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
              	style={{backgroundImage: 'url(' + '/images/monsters.jpg' + ')',
              		height: "200px",
              		backgroundSize: 'cover', 
              		width: '100%',  
              		backgroundPosition: 'center' 
               	}}>
               	<h1 className="img-text text-shadow">
                  MONSTERS
                </h1>
				
              </div>
            </header>
            <section className="pt-3 pb-3 mr-5 ml-5 text-center">
				Need a quick monster of a specific type or from a certain environment?
				Just click the tag below that matches what kind of monster you are
				looking for!
			</section>
          </div>
          <div className="col-md-12 text-center mb-3">
			<div>
		        <h4 className="bg-dark p-2 mt-4 text-white font-weight-bold text-center w-75 mx-auto">
                  Monster Types
                </h4>
				<section className="pt-2 mx-auto text-center w-75">
	      		Many kinds of monsters can be classified into typologies based on 
	      		their common characteristics.
	      		<a 
	      			href="https://en.wikipedia.org/wiki/Monsters_in_Dungeons_%26_Dragons#Monster_types"
	      			target="_blank" 
					rel="noopener"
					className="sm-text"> Wikipedia entry</a>
      			</section>
      		</div>
      		<div className="mt-2">
      			<Link href={"/tags/aberrations"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Aberrations
			        </a>
	      		</Link>
	      		<Link href={"/tags/beasts"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Beasts
			        </a>
	      		</Link>
	      		<Link href={"/tags/celestials"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Celestials
			        </a>
	      		</Link>
	      		<Link href={"/tags/constructs"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Constructs
			        </a>
	      		</Link>
	      		<Link href={"/tags/dragons"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Dragons
			        </a>
	      		</Link>
	      		<Link href={"/tags/elementals"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Elementals
			        </a>
	      		</Link>
	      		<Link href={"/tags/fey"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Fey
			        </a>
	      		</Link>
	      		<Link href={"/tags/Fiends"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Fiends
			        </a>
	      		</Link>
	      		<Link href={"/tags/Giants"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Giants
			        </a>
	      		</Link>
	      		<Link href={"/tags/humanoids"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Humanoids
			        </a>
	      		</Link>
	      		<Link href={"/tags/monstrosities"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Monstrosities
			        </a>
	      		</Link>
	      		<Link href={"/tags/oozes"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Oozes
			        </a>
	      		</Link>
	      		<Link href={"/tags/plants"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Plants
			        </a>
	      		</Link>
	      		<Link href={"/tags/undead"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Undead
			        </a>
	      		</Link>
      		</div>
          
			<div>
				<h4 className="bg-dark p-2 mt-4 text-white font-weight-bold text-center w-75 mx-auto">
                  Environments
                </h4>
				<section className="pt-2 mx-auto text-center w-75">
	      		An environment is a natural unit consisting of all plants, animals 
	      		and micro-organisms in an area functioning together with all of the
	      		 non-living physical factors of the environment.
	      		<a 
	      			href="https://en.wikipedia.org/wiki/Natural_environment#Ecosystems"
	      			target="_blank" 
					rel="noopener"
					className="sm-text"> Wikipedia entry</a>
      			</section>
      		</div>
      		<div className="mt-2 mb-5">
      			<Link href={"/tags/arctic"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Arctic
			        </a>
	      		</Link>
	      		<Link href={"/tags/coastal"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Coastal
			        </a>
	      		</Link>
	      		<Link href={"/tags/desert"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Desert
			        </a>
	      		</Link>
	      		<Link href={"/tags/forest"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Forest
			        </a>
	      		</Link>
	      		<Link href={"/tags/grassland"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Grassland
			        </a>
	      		</Link>
	      		<Link href={"/tags/hill"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Hill
			        </a>
	      		</Link>
	      		<Link href={"/tags/mountain"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Mountain
			        </a>
	      		</Link>
	      		<Link href={"/tags/swamp"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Swamp
			        </a>
	      		</Link>
	      		<Link href={"/tags/underground"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Underground
			        </a>
	      		</Link>
	      		<Link href={"/tags/underwater"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Underwater
			        </a>
	      		</Link>
	      		<Link href={"/tags/urban"}>
			        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
			          Urban
			        </a>
	      		</Link>
      		</div>

          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default Monsters;