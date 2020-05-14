import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { APP_NAME, DOMAIN, FB_APP_ID } from '../config';

const Index = ({ router }) => {
    const head = () => (
        <Head>
            <title>{APP_NAME} Homepage | {APP_NAME}</title>
            <meta
                name="description"
                content={`Create a free RPG blog!  ${APP_NAME}: a multi-user SEO blogging web app focused on the best fresh crunch content for role-playing games – old and new`}
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`${APP_NAME} Homepage | ${APP_NAME}`} />
            <meta
                property="og:description"
                content={`Create a free RPG blog!  ${APP_NAME}: a multi-user SEO blogging web app focused on the best fresh crunch content for role-playing games – old and new`}
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/images/rpg-dice.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/images/rpg-dice.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`}
             />
        </Head>
    );
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <article className="overflow-hidden mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <a href="/blogs"><img 
                                    src="/images/logo.png"
                                    alt="Vox Eterna logo"
                                    className="img img-fluid"
                                /></a>
                            </div>
                        </div>
                        
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center pt-3 pb-5">
                                <p className="lead">
                                    Blogs and discussions on all things
                                    related to Fantasy Role-Playing Games (FRPGs)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: 'url(' + '/images/players.jpg' + ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">Players</h2>
                                    </div>
                                    <div className="back lp-lt text-center">
                                        <Link href="/players">
                                            <a>
                                                <h3 className="h1"> Players</h3>
                                            </a>
                                        </Link>
                                        <p>
                                            Controls a character in the fictional world of the game
                                             and acts as a protagonist in the story.
                                            <br/>
                                            <a href="https://en.wikipedia.org/wiki/Player_character" 
                                                target="_blank" 
                                                rel="noopener" className="sm-text">
                                                Wikipedia entry
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: 'url(' + '/images/game-masters.jpg' + ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">Game Masters</h2>
                                    </div>
                                    <div className="back lp-lt text-center">
                                        <Link href="/game-masters">
                                            <a>
                                                <h3 className="h1">Game Masters</h3>
                                            </a>
                                        </Link>
                                        <p>
                                            Presents the fictional 
                                            setting, arbitrates the results of character actions, and 
                                            maintains the narrative flow.
                                            <br />
                                            <a href="https://en.wikipedia.org/wiki/Gamemaster" target="_blank" rel="noopener" className="sm-text">Wikipedia entry</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: 'url(' + '/images/monsters.jpg' + ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">Monsters</h2>
                                    </div>
                                    <div className="back lp-lt text-center">
                                        <Link href="/monsters">
                                            <a>
                                                <h3 className="h1">Monsters</h3>
                                            </a>
                                        </Link>
                                        <p>
                                            Monsters are generally the antagonists which players must
                                             fight and defeat to progress in the game.
                                            <br />
                                            <a href="https://en.wikipedia.org/wiki/Monsters_in_Dungeons_%26_Dragons" target="_blank" rel="noopener" className="sm-text">Wikipedia entry</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </Layout>
        </React.Fragment>
    );
};

export default withRouter(Index);