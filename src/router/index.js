import {Router} from "express"
const router= Router()

router.get('/', (req,res) => res.render('index',{title: 'William Villacrez - GIS Analyst'}));
router.get('/about', (req,res) => res.render('about',{title: 'About me'}));
router.get('/skills', (req,res) => res.render('skills',{title: 'Skills'}));
router.get('/curriculum', (req,res) => res.render('curriculum',{title: 'Curriculum'}));
router.get('/proyects', (req,res) => res.render('curriculum',{title: 'Proyectos'}));
router.get('/contact', (req,res) => res.render('curriculum',{title: 'Contact'}));

export default router