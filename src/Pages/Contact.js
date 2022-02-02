import { useEffect } from "react"

export default function Contact() {
    useEffect(() => {
        document.title = "Contact"
    })
    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-description">Kamu dapat menghubungiku di bawah ini:</p>
            <ul>
                <li>WA: 085856196359</li>
                <li>Email: wahyu.budi.w.b33@gmail.com</li>
                <li><a href="https://instagram.com/lvxxyz" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
        </section>
    )
}