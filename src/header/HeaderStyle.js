import styled from 'styled-components'

export const HeaderWrap = styled.header`
    border-bottom:1px solid #dcdcdc;
    .inner { height:120px; }
    h1 {
        position:absolute; left:0; top:50%; transform: translateY(-50%); 
        a {
            font-size: 25px;letter-spacing:5px;font-weight: 500;
        }      
    }
    .login {
      position: absolute; right: 150px; top: 10px;
      color:blue;
    }
`


export const NavWrap = styled.nav`
   &.nav{ 
    position: absolute; right:0;  top:50% ; transform: translateY(-50%); 
    ul{
        display: flex;
        li {
            margin-left:100px; position:relative ;
            a {
                font-size:18px; font-weight: 500;
                transition:0.3s;
                &:hover {
                    color:tomato;
                }
            }
            &:last-child span{ 
                font-size:16px;
                border-radius:50% ;               
                display: block;
                position:absolute ;
                right:-20px; top:-5px; 
                width:20px; height:20px; 
                background-color:#000 ; color:#fff;
                text-align:center; line-height:18px ;
            }
        }
    }
}
`


export const TopMenu  = styled.ul`
    &.top-menu {
        position: absolute; right:0;  top:10px;
        display: flex;
        li {
            margin-left:25px;
            a {
                font-size:15px;                
            }
        }
    }
    

`