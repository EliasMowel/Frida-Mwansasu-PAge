import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="scroll-progress" aria-hidden="true"><span></span></div>
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Frida Mwansasu home">FM<span>.</span></a>
    <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    <a class="header-cta" href="mailto:hello@fridamwansasu.com">Request a consultation <span>↗</span></a>
  </header>
  <main id="top">
    <section class="hero section-wrap"><div class="hero-copy"><p class="eyebrow">Legal practitioner <span class="dot"></span> Dar es Salaam</p><h1>Clarity in<br><em>every case.</em></h1><p class="hero-intro">Thoughtful counsel, careful preparation, and a steady advocate when the details matter most.</p><a class="text-link" href="#work">Explore areas of practice <span>↓</span></a></div><div class="hero-art" aria-label="Portrait of Frida Mwansasu" role="img"><div class="sun-disc"></div><div class="portrait-frame"><div class="portrait-image"></div></div><p class="art-note">Professional<br>profile<br><span>FM / 2026</span></p></div><div class="hero-stamp">FM<br><span>COUNSEL</span></div></section>
    <section class="ticker" aria-label="Legal services"><div class="ticker-track">TRUSTED COUNSEL <span>✦</span> CLEAR ADVICE <span>✦</span> STRONG ADVOCACY <span>✦</span> TRUSTED COUNSEL <span>✦</span></div></section>
    <section class="intro section-wrap" id="about"><p class="section-label">[ 01 — Professional profile ]</p><div class="intro-grid"><h2>Good counsel<br>begins with<br><em>listening.</em></h2><div class="intro-body"><p>I'm Frida, a legal practitioner committed to helping individuals and organisations make informed decisions with confidence.</p><p>My approach is practical, precise, and grounded in a clear understanding of each client's circumstances.</p><a class="text-link" href="mailto:hello@fridamwansasu.com">Read my profile <span>↗</span></a></div></div></section>
    <section class="work section-wrap" id="work"><div class="work-heading"><p class="section-label">[ 02 — Areas of practice ]</p><a class="text-link" href="mailto:hello@fridamwansasu.com">Discuss your matter <span>↗</span></a></div><div class="project-grid"><a class="project project-large" href="#contact"><div class="project-visual visual-red"><span class="project-word">ADVISORY</span><span class="project-detail">Practical guidance for important decisions</span></div><div class="project-meta"><span>01 / Legal advisory</span><span>01</span></div></a><a class="project project-small" href="#contact"><div class="project-visual visual-yellow"><span class="project-word small-word">CIVIL</span><span class="project-detail">Careful representation, clearly explained</span></div><div class="project-meta"><span>02 / Civil matters</span><span>02</span></div></a><a class="project project-small project-offset" href="#contact"><div class="project-visual visual-blue"><span class="project-word small-word">CORP.</span><span class="project-detail">Sound legal foundations for business</span></div><div class="project-meta"><span>03 / Corporate counsel</span><span>03</span></div></a></div></section>
    <section class="services section-wrap"><p class="section-label">[ 03 — How I can help ]</p><div class="services-list"><div><span>01</span><h3>Legal<br>advisory</h3><p>Clear, considered guidance to help you understand your options and next steps.</p></div><div><span>02</span><h3>Dispute<br>resolution</h3><p>Strategic representation focused on protecting your interests and finding a way forward.</p></div><div><span>03</span><h3>Business<br>counsel</h3><p>Practical support for agreements, risk, compliance, and confident business decisions.</p></div></div></section>
    <section class="contact section-wrap" id="contact"><div class="contact-copy"><p class="section-label">[ 04 — Begin a conversation ]</p><h2>Let's discuss<br>what matters<br><em>to you.</em></h2></div><div class="contact-action"><p>For a confidential first conversation, get in touch and share a brief outline of your matter.</p><a class="email-link" href="mailto:hello@fridamwansasu.com">Request a consultation <span>↗</span></a><div class="socials"><a href="#contact">LinkedIn</a><a href="#contact">Professional profile</a></div></div></section>
  </main>
  <footer class="site-footer"><span>© 2026 Frida Mwansasu</span><span>Built with intention <b>✳</b></span><a href="#top">Back to top ↑</a></footer>
`

const navLinks = [...document.querySelectorAll('nav a')]
const observedSections = [...document.querySelectorAll('main > section[id]')]
const progressBar = document.querySelector('.scroll-progress span')

const updateProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
  progressBar.style.transform = `scaleX(${scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0})`
}

window.addEventListener('scroll', updateProgress, { passive: true })
updateProgress()

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`))
  })
}, { rootMargin: '-35% 0px -55% 0px' })

observedSections.forEach((section) => sectionObserver.observe(section))

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('is-visible')
    observer.unobserve(entry.target)
  })
}, { threshold: 0.12 })

document.querySelectorAll('.intro, .work, .services, .contact, .project').forEach((element) => {
  element.classList.add('reveal')
  revealObserver.observe(element)
})
