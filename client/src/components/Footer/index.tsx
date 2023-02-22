import { SectionContainerFooter, FooterContent, BoxLink } from './style';
import { BsFolderFill, BsGithub, BsLinkedin } from 'react-icons/bs'

export const Footer = () => {
    return (
        <SectionContainerFooter >
            <FooterContent data-aos="fade-up">
                <h3 className="footer_title">&#169; Desenvolvido por Geovane Oliveira</h3>

                <BoxLink >

                <a href="https://www.linkedin.com/in/geovane-oliveira-69071a225/" target="_blank" rel="noopener noreferrer">

                <BsLinkedin />
                </a>
                <a href="https://github.com/GeovaneSO" target="_blank" rel="noopener noreferrer">
                    <BsGithub />

                </a>
                <a href="https://portifolio-2-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <BsFolderFill />
                </a>
                </BoxLink>
            </FooterContent>
        </SectionContainerFooter>
    )

}

