import {Container, Card, Row, Button } from 'react-bootstrap'
import STeamItem from './Components/TeamItem2'
import Main_picture from './Components/Main_picture'
import Main_contacts from './Components/Main_contacts'
import Main_publications from './Components/Main_publications'
import Main_conferences from './Components/Main_conferences'
import Main_publications_more_detailed from './Components/Main_publications_more_detailed'
import { motion } from "framer-motion"
import Zvonareva from "./images/team/Zvonareva.png"
import Krivorotko from "./images/team/Krivorotko.png"
import Zyatkov from "./images/team/Zyatkov.png"
import Sosnovskaya from "./images/team/Sosnovskaya.png"
import Neverov from "./images/team/Neverov.png"
import Petrakova from "./images/team/Petrakova.jpg"
import Kabanikhin from "./images/team/Kabanikhin.jpg"
import Footer from './Components/Footer'

const variants = {
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2}
  }),
  hidden: {
    opacity: 0,
    y: 100,
 },
}

const itemAnimation = {
  visible: custom => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2}
  }),
  hidden: {
    opacity: 0,
    x: -100,
 },
}

export function Main() {

  const posts = [
    {id: 1, wid: '9rem', name: 'Криворотько Ольга Игоревна',institution: 'Начальник научно-исследовательского отдела ММЦ ИМ СО РАН',  image: Krivorotko},
    {id: 2, wid: '8rem', name: 'Зятьков Николай Юрьевич', institution: 'Начальник инновационного отдела ММЦ ИМ СО РАН', image: Zyatkov},
    {id: 3, wid: '8rem', name: 'Кабанихин Сергей Игоревич', institution: 'Директор ММЦ ИМ СО РАН', image: Kabanikhin}
  ]
  return(
      <>
      <Main_picture />
        <Container >
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">Состав лаборатории</h4> </Card.Title>
          </Card>
          </motion.div>
          <motion.div  initial="hidden"
            animate="visible">
          <Container>
            <Row xs={1} md={2} className="justify-content-md-center" >
              {posts.map((post, index) =>
                  <STeamItem  initial="hidden" whileInView="visible" viewport={{amount: 0.05, once: true}}
                     custom={index + 1}
                    variants={variants} key = {post.id} post = {post}/>
              )}
            </Row>
          </Container>
          </motion.div>
          <motion.div initial="hidden"
          animate="visible" custom={3}
          variants={variants}>
          <Button href="/MainTeam" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Подробнее</b></div></Button>
        </motion.div>
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}} className="my-3"><hr />
          <h4 className="text-left mx-5 text-secondary">Kонтакты</h4>
            </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_contacts />
          </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}} className="my-3"><hr />
          <h4 className="text-left mx-5 text-secondary">Публикации</h4></motion.div>
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_publications />
            </motion.div>
            <motion.div initial="hidden"
          animate="visible" custom={3}
          variants={variants}>
          <Button href="/Main_publications_more_detailed" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Подробнее</b></div></Button>
            </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
        <Card className="text-center bg-secondary text-white my-3">
          <Card.Title> <h4 className="my-1 ">Конференции</h4> </Card.Title>
        </Card></motion.div>
        <motion.div initial="hidden"
           custom={2}
          variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_conferences /> </motion.div>
      </Container>
      <Footer />
    </>
          
)
}