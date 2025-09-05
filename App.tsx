import { motion } from 'framer-motion'

export default function VaultHome() {
  return (
    <div style={{minHeight:'100vh', color:'#0b0f10', background:'white'}}>
      <header style={{position:'sticky', top:0, zIndex:40, backdropFilter:'blur(6px)', borderBottom:'1px solid #e5e7eb'}}>
        <div style={{maxWidth:1120, margin:'0 auto', padding:'0 24px', display:'flex', height:64, alignItems:'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <strong style={{letterSpacing:'-0.02em'}}>VAULT</strong>
          </div>
          <nav style={{display:'flex', gap:16}}>
            {['Solutions','How it works','Rates','For Brokers','Security','Help'].map((item)=>(
              <a key={item} href={'#'+item.toLowerCase().replace(/ /g,'')} style={{fontSize:14, color:'#374151', textDecoration:'none'}}>{item}</a>
            ))}
          </nav>
        </div>
      </header>
      <HeroSection />
      <SolutionsSection />
      <HowSection />
      <RatesSection />
      <BrokersSection />
      <SecuritySection />
      <FAQSection />
    </div>
  )
}

function Section({children, id, alt}:{children:any, id?:string, alt?:boolean}){
  return (
    <section id={id} style={{padding:'80px 0', background:alt?'#f9fafb':'white'}}>
      <div style={{maxWidth:1120, margin:'0 auto', padding:'0 24px'}}>
        {children}
      </div>
    </section>
  )
}

function HeroSection(){
  return (
    <Section>
      <div style={{display:'grid', gridTemplateColumns:'repeat(12,minmax(0,1fr))', gap:24, alignItems:'center'}}>
        <div style={{gridColumn:'span 6'}}>
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} style={{fontSize:44, fontWeight:800, lineHeight:1.05, letterSpacing:'-0.02em'}}>
            Financing that feels <span style={{display:'block'}}>simple, fast, and fair.</span>
          </motion.h1>
          <p style={{marginTop:12, fontSize:18, color:'#374151', maxWidth:560}}>
            Get approved in minutes, funded in hours. Transparent rates, no surprises, and support when you need it.
          </p>
        </div>
        <div style={{gridColumn:'span 6'}}>
          <HeroIllustration/>
        </div>
      </div>
    </Section>
  )
}

function HeroIllustration(){
  return (
    <figure className="relative aspect-video rounded-3xl overflow-hidden border">
      <img src="/vault-hero.png" alt="Vault hero" className="absolute inset-0 object-cover" style={{width:'100%', height:'100%'}}/>
    </figure>
  )
}

function H2({children}:{children:any}){ return <h2 style={{fontSize:32, fontWeight:800, letterSpacing:'-0.02em'}}>{children}</h2> }

function SolutionsSection(){
  return (
    <Section id="solutions" alt>
      <H2>Solutions built for brokers, vendors & borrowers</H2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,minmax(0,1fr))', gap:16, marginTop:24}}>
        {['Equipment Leasing','Business Financing','Mortgages'].map((title,i)=>(
          <div key={title} style={{border:'1px solid #e5e7eb', borderRadius:12, padding:16, background:'white', boxShadow:'0 1px 2px rgba(0,0,0,0.04)'}}>
            <h3 style={{fontSize:20, fontWeight:700, margin:'8px 0 4px'}}>{title}</h3>
            <ul style={{color:'#374151', margin:0, paddingLeft:18}}>
              {(i===0?['Wide range of equipment','Fast approvals','Flexible structures']:
                i===1?['$5k–$300k','Weekly payments','Funding in as little as 24h']:
                ['First & second','Residential & commercial','Alternative lending']).map(b=>(
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function HowSection(){
  return (
    <Section id="how">
      <H2>How it works</H2>
      <ol style={{marginTop:16, color:'#374151'}}>
        {['Apply in minutes','Get personalized offers','Fast funding'].map(s=>(
          <li key={s} style={{marginBottom:6}}>{s}</li>
        ))}
      </ol>
    </Section>
  )
}

function RatesSection(){
  return (
    <Section id="rates" alt>
      <H2>Honest rates, explained up front</H2>
      <p style={{color:'#374151'}}>We keep pricing transparent—no surprises.</p>
    </Section>
  )
}

function BrokersSection(){
  return (
    <Section id="forbrokers">
      <H2>Built for brokers and vendors</H2>
      <p style={{color:'#374151'}}>White‑label portals, clean docs, same‑day payouts.</p>
    </Section>
  )
}

function SecuritySection(){
  return (
    <Section id="security" alt>
      <H2>Security isn’t a feature. It’s the foundation.</H2>
      <p style={{color:'#374151'}}>Bank‑grade encryption, segregated accounts, SOC 2 processes.</p>
    </Section>
  )
}

function FAQSection(){
  return (
    <Section id="help">
      <H2>FAQs</H2>
      <details style={{padding:'12px 0', borderTop:'1px solid #e5e7eb'}}>
        <summary>Will checking my rate affect my credit score?</summary>
        <p style={{color:'#374151'}}>No. We use soft pulls for pre‑qualification.</p>
      </details>
      <details style={{padding:'12px 0', borderTop:'1px solid #e5e7eb'}}>
        <summary>How fast can I get funded?</summary>
        <p style={{color:'#374151'}}>As little as 24 hours after final approval.</p>
      </details>
      <details style={{padding:'12px 0', borderTop:'1px solid #e5e7eb', borderBottom:'1px solid #e5e7eb'}}>
        <summary>Are there prepayment penalties?</summary>
        <p style={{color:'#374151'}}>No prepayment penalties on most programs.</p>
      </details>
    </Section>
  )
}
