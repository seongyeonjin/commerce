import styled from 'styled-components'

export const NoticeListWrap  = styled.div` 

.noticeTable { width: 100%; 
    caption { position:absolute; left:0; top:0; text-indent:-9999px}
    .num { width: 10%; }
    .title { width: auto; }
    .date { width: 15%; }
    th,  td{ height: 45px; vertical-align: middle; 
        border: 1px solid #999; }
    th { border-bottom: none; font-weight: 700; }   
    td{ text-align: center;
        &:nth-child(2){ text-align: left; padding-left: 20px; } 
    }  

} 

`

export const NoticeDetailWrap = styled.div` 
    .inner { padding:100px 0 }
    h2 { font-size:30px; font-weight:700; margin-bottom:50px }

    .con {  font-size: 20px; line-height: 1.7; border-top:1px solid #999 ;
        border-bottom:1px solid #999 ;
             margin-bottom: 20px; padding: 20px 0; 
       h3 {
        font-size: 20px; font-weight: 500 ; padding-bottom: 15px;  border-bottom:1px solid #dcdcdc ; margin-bottom: 15px 
       }
       .txt {
        font-size:18px; margin-bottom: 15px;
        height:300px;white-space:pre-line;
       }
       .date { font-size: 16px }
    }
    button {  width: 200px; height: 50px; background: #000; color:#fff; cursor: pointer; border:none ; }
`