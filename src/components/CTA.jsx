import { Link } from "react-router-dom";
const CTA = () => {
return (
    <section className="cta">
    <p className="cta-text">Have a project or work for me in mind? <br className="sm:block hidden"/>
    Let's build something together!</p>
    <Link to="/contact" className="btn">Let's Talk</Link>
    </section>
)
}

export default CTA;
