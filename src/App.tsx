import { motion } from 'framer-motion'

export default function VaultHome() {
  return (
    <div style={{minHeight:'100vh', color:'#0b0f10', background:'white'}}>
      <header style={{position:'sticky', top:0, zIndex:40, borderBottom:'1px solid #e5e7eb'}}>
        <div style={{maxWidth:1120, margin:'0 auto', padding:'0 24px', display:'flex', height:64, alignItems:'center', justifyContent:'space-between'}}>
          <strong>VAULT</strong>
          <nav style={{display:'flex', gap:16}}>
            {['Solutions','How it works','Rates','For Brokers','Security','Help'].map((item)=>(
              <a key={item} href={'#'+item.toLowerCase().replace(/ /g,'')} style={{fontSize:14, color:'#374151', textDecoration:'none'}}>{item}</a>
            ))}
          </nav>
        </div>
      </header>
      <section style={{padding:'80px 0'}}>
        <div style={{maxWidth:1120, margin:'0 auto', padding:'0 24px', display:'grid', gridTemplateColumns:'repeat(12,minmax(0,1fr))', gap:24, alignItems:'center'}}>
          <div style={{gridColumn:'span 6'}}>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} style={{fontSize:44, fontWeight:800, lineHeight:1.05}}>
              Financing that feels <span style={{display:'block'}}>simple, fast, and fair.</span>
            </motion.h1>
          </div>
          <div style={{gridColumn:'span 6'}}>
            <figure style={{position:'relative', aspectRatio:'16/9', borderRadius:'1.5rem', overflow:'hidden', border:'1px solid #e5e7eb'}}>
              <img src="/vault-hero.png" alt="Vault hero" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
            </figure>
          </div>
        </div>
      </section>
    </div>
  )
}
