<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-adam-svg wow footer-animation">
        <img
            src="../assets/adam-thinking.svg"
            alt="adam thinking"/>
      </div>
      <div class="footer-services wow footer-animation">
        <div class="footer-services-header">SERVICES & STACKS</div>
        <div class="footer-services-content">
          art direction, experience and interface design (ux-ui), graphic design, design systems and component
          libraries, branding and identities, motion design, illustration, and pretty much anything else I set my mind
          to.
        </div>
        <div class="footer-stacks">
          <div class="footer-stack">
            <div class="footer-stack-name">Design</div>
            <div class="footer-stack-science">Figma, Illustrator, Indesign, Photoshop, Sketch</div>
          </div>
          <div class="footer-stack">
            <div class="footer-stack-name">Development</div>
            <div class="footer-stack-science">CSS/SASS, Git, HTML, Javascript, Jekyll, Liquid, PHP, Wordpress theme &
              block development
            </div>
          </div>
          <div class="footer-stack">
            <div class="footer-stack-name">Other</div>
            <div class="footer-stack-science">Bodymovin/Lottie, Datawrapper, Mapbox</div>
          </div>
        </div>
      </div>
      <div class="footer-awards wow footer-animation">
        <div class="footer-awards-header">RECOGNITION</div>
        <div class="footer-award-info">
          <div><b>Information is Beautiful Awards</b></div>
          <div><a href="#">Politics & Global, Longlist</a>, 2018</div>
        </div>
        <div class="footer-award-info">
          <div><b>Information is Beautiful Awards</b></div>
          <div><a href="#">Politics & Global Shortlist</a>, 2019</div>
        </div>
      </div>
    </div>
    <footer class="footer-navigation">
      <div style="display: flex; align-items: end">
        <div class="footer-navigation-logo">tucker harris.</div>
        <nav class="footer-navigation-anchors">
          <div style="display: inline-block; vertical-align: top; color: #000; opacity: .6;">/</div>
          <a href="#">Home</a>
          <a href="#">Work</a>
          <a href="#">About</a>
        </nav>
      </div>
      <div class="footer-navigation-social-links">
        <div class="social-link">
          <img src="../assets/email.svg" alt="mail"/>
        </div>
        <div class="social-link">
          <img src="../assets/pinterest.svg" alt="pinterest"/>
        </div>
        <div class="social-link">
          <img src="../assets/linkedin.svg" alt="linkedin"/>
        </div>
        <div class="social-link">
          <img src="../assets/github.svg" alt="github"/>
        </div>
      </div>
    </footer>
    <div class="footer-copyright">
      ©2022 Tucker Harris. Design and code by yours truly ♡
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.footer-container {
  margin: 3.5rem auto 0;
  max-width: 1600px;
}

.footer-content {
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, .15);
  padding: 50px 0 100px;
}

.footer-adam-svg {
  padding-right: 4vw;
  flex: 1;
}

.footer-adam-svg img {
  width: 280px
}

.footer-services {
  padding-right: 4vw;
  flex: 3;
}

.footer-services-content {
  margin: 1rem 0 2rem;
  font-size: 22px;
  font-weight: 400;
}

.footer-stack {
  border-top: 1px solid rgba(0, 0, 0, .15);
  padding: 15px 0;
}

.footer-stack-name {
  display: inline-block;
  font-weight: 500;
  width: 150px;
}

.footer-stack-science {
  display: inline-block;
}

.footer-services-header {
  color: rgba(0, 0, 0, .4);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: .07em;
  text-transform: uppercase;
}

.footer-awards-header {
  color: rgba(0, 0, 0, .4);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: .07em;
  text-transform: uppercase;
}

.footer-awards {
  flex: 1;
}

.footer-awards a {
  display: inline;
  color: inherit;
  text-decoration: none;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3) calc(50% - 10px), transparent 20px, rgba(0, 0, 0, 0.15) calc(50% + 10px));
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: calc(200% + 20px) 2px;
  transition: 300ms background-position;
}

.footer-awards a:hover {
  background-position: 0% 100%;
}

.footer-award-info {
  margin-top: 1rem;
}

.footer-navigation {
  display: flex;
  justify-content: space-between;
}

.footer-navigation-logo {
  font-size: 28px;
  font-weight: 300;
  padding: 0 30px 4px 0;
}

.footer-navigation-anchors {

}

.footer-navigation-anchors a {
  display: inline-block;
  position: relative;
  color: #000;
  opacity: .6;
  text-decoration: none;
  text-transform: uppercase;
  padding-bottom: 5px;
  margin-right: 15px;
  overflow: hidden;
  transition: all 200ms ease-in-out;
}

.footer-navigation-anchors div:first-child {
  margin-right: 10px;
}

.footer-navigation-anchors a:hover {
  opacity: 1;
}

.footer-navigation-anchors a::before {
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background-color: #000;
  transition: all 200ms ease-in-out;
  content: "";
}

.footer-navigation-anchors a:hover::before {
  left: 0;
}
.footer-navigation-social-links {
  display: flex;
  padding-top: 6rem;
}
.social-link {
  margin-left: 20px;
  color: #000;
  opacity: .6;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;
}
.social-link:hover {
  opacity: 1;
}
.footer-copyright {
  font-size: 14px;
  color: #000;
  opacity: .6;
  margin-top: 30px;
  padding-bottom: 10px;
}

.footer-animation {
  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: .5s; /* don't forget to set a duration! */
}
</style>
