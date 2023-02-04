import Header from "../headerNav/header";
import "./style.css";
import landingVideo from '../../assets/landing.webm'
import git from '../../assets/git.png'
import insta from '../../assets/insta.png'
import youtube from '../../assets/youtube.png'
import twter from '../../assets/twter.png'


const HomeAnimated = () => {
  return (
    <>
      <Header />
      <main className="home-wrapper">
        <video className="landing-video" autoPlay loop muted>
          <source src={landingVideo} type="video/webm" />
        </video>
        <div className="home-footer">
          <div className="home-socials">
            <a href="https://github.com/TrueAmrit" >
              <img src={git} alt="GitHub" />
            </a>
            <a href="https://www.youtube.com/" >
              <img src={youtube} alt="YouTube" />
            </a>
            <a href="https://www.instagram.com/" >
              <img src={insta} alt="Instagram" />
            </a>
            <a href="https://twitter.com/" >
              <img src={twter} alt="Twitter" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
export default HomeAnimated;
