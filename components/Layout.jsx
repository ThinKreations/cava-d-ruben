import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import logo from "@/src/logo.png"

import styles from "@/styles/Home.module.css"
import components from "@/styles/Component.module.css"


export default function Layout({ children }) {
    const router = useRouter()

    return (<>
        <div className={styles.container}>
            <header className={components.header}>
                <div className={components.logo_container}>
                    <Image src={logo} className={components.logo} alt="Cava D'Rubén" />
                    <span style={{ 'fontSize': '30px' }}>Cava D'Ruben</span>
                </div>
                <div className={components.header_buttons}>
                    <button className={components.header_btn} onClick={() => router.push('/')}>{`[ Inicio ]`}</button>
                    <button className={components.header_btn} onClick={() => router.push('calendar')}>{`[ Calendario ]`}</button>
                    <button className={components.header_btn}>{`[ Cava Virtual ]`}</button>
                </div>
            </header>
            <div className={styles.inner_container}>
                {children}
            </div>
            <footer className={components.footer}>
                <span className={components.footer_content}>{`Guapiicsa 2026 | Juárez Castillo Rubén Gabriel · Nápoles Munguía José de Jesús · Rosas Valdez Axel Brandon · Segundo Vargas Josué · Soto Navarro Viviana · Terrones Martinez Jesús Jonathan | GitHub `}<Link href="https://github.com/ThinKreations/cava-d-ruben" className={styles.link} target="_blank">{`[Front]`}</Link> · <Link href="https://github.com/ElOsasInc/cava_pro_analytics-API-" className={styles.link} target="_blank">{`[Back]`}</Link></span>
            </footer>

        </div>
    </>

    )
}