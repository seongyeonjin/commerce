import { FooterWrap } from "./FooterStyle";

 
const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                <p>이용안내</p>
                <p>이용약관</p>
                <p>개인정보처리방침</p>
                <p>파트너쉽</p>
            </div>
        </FooterWrap>
    );
};

export default Footer;