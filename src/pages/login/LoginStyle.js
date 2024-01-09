import styled from 'styled-components'


export const LoginWrap = styled.div`
 .inner { padding:100px 0 ; display:flex ; flex-direction:column; justify-content: center; align-items:center; height:650px; }
 h2 { font-size:30px; font-weight:700; margin-bottom:50px  }
 p {
    margin-bottom: 30px;
    label {
        display: block; width:110px;
    }
    input[type=email] , input[type=password]{
        margin-top:5px;
        width:450px; box-sizing: border-box;
        height:55px; padding:0 10px; 
    }
    
    &:last-child {
        margin-top:50px; text-align: center;
        button {
        width:250px; height:60px; background: #000; color:#fff; border:none;
        cursor: pointer;
    }
    }
 }   
`

export const LogoutWrap = styled.div`
     .inner { padding:100px 0 ; display:flex ; flex-direction:column; justify-content: center; align-items:center; height:600px; }
     h2 { font-size:30px; font-weight:700; margin-bottom:50px  }
     h3 { margin-bottom:30px; font-size:25px; font-weight:700;
        span {
            color:tomato
        }
     }
     p {
        margin-top:50px; text-align: center;
        button {
          width:250px; height:60px; background: #000; color:#fff; border:none; cursor: pointer;
        }
    }
` 

export const JoinWrap = styled.div`
 .inner { padding:100px 0 ; display:flex ; flex-direction:column; justify-content: center; align-items:center; height:750px; }
 h2 { font-size:30px; font-weight:700; margin-bottom:50px  }
 p {
    margin-bottom: 15px;
    label {
        display: block; width:110px;
    }
    input[type=email] , input[type=password], input[type=tel], input[type=text]{
        margin-top:5px;
        width:450px; box-sizing: border-box;
        height:55px; padding:0 10px;
    }
    
    &:last-child {
        margin-top:50px; text-align: center;
        button {
            width:200px; height:60px; background: #000; color:#fff; border:none;
            cursor: pointer;margin-left:5px; 
    }
    }
 }   
`