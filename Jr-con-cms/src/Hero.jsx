import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>contentful CMS</h1>
          <p>
            Single-origin coffee skateboard four loko, portland squid JOMO green
            juice kale chips bushwick. Four dollar toast ramps selfies viral,
            godard listicle hella chambray hell of forage 8-bit. Unicorn
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='women and the browser ' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
