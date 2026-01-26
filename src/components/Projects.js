import styles from './Project.module.css'
import ProjCard from './ProjCard'
// import Cpsta fro
import TopicName from './TopicName';
import img1 from '../assets/dev1.png'
import img2 from '../assets/dev2.jpg'
import img3 from '../assets/dev3.png'
// import img4 from '../assets/dev4.png'

function Project() {
    return (

        <div className={styles.wrapper}>
            <TopicName title="Projects"></TopicName>
            <center>
                <ProjCard title={"Blogs Website"} image={img1} tags={["Web", "HTML", "CSS", "JS"]} info={"A simple Blogs made using the Hugo Framework."} links={[
                    { label: " GitHub", url: "https://github.com/..." },
                    { label: " Live", url: "https://..." }
                ]}></ProjCard>
                <ProjCard title={"PDF Toolkit"} image={img2} tags={["Python", "Kivy", "KivyMD", "Linux"]} info={"An all in one PDF Toolkit for debian based distros like ubuntu, mint."} links={[
                    { label: " GitHub", url: "https://github.com/..." },
                    { label: " Live", url: "https://..." }
                ]}></ProjCard>
                <ProjCard title={"Infinite Shooter"} image={img3} tags={["Python", "Pygame", "GameDev"]} info={"A 2d infinite shooter game made in python using pygame."} links={[
                    { label: " GitHub", url: "https://github.com/..." },
                    { label: " Live", url: "https://..." }
                ]}></ProjCard>
            </center>

        </div>
    )
}
export default Project;