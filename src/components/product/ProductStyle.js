import styled from 'styled-components'


export const ProductSearchWrap = styled.div`
margin-bottom:30px; position:relative;
 form {
    display: flex;
    justify-content: space-between;
    p {        
        input[type=text] { width:350px; box-sizing:border-box; height:45px; padding:10px; border:1px solid #999; }
        button { width:100px; height:45px; vertical-align:top; }
        select { width:200px; height:45px; box-sizing:border-box; padding:10px;  border:1px solid #999; }
        span { margin-left:15px; cursor: pointer;}
    }
 }

`

export const ProductListWrap = styled.div`
    .cart-box { display: flex; flex-wrap: wrap;  
        article { width: 23%;height: 500px; border: 1px solid #999; padding: 20px; box-sizing: border-box; margin-bottom: 30px; text-align: center;margin-right: 37px;
            div {margin-bottom: 25px; }
            img { width: 100%;  }
            h3 {font-size: 16px; margin-bottom: 10px;}
            h4 {font-size: 20px; line-height: 1.3; font-weight: 300;margin-bottom: 20px; }
            p { width: 90%; margin: auto; display: flex; justify-content: space-between; align-items: center; margin-top: 10px;
                button { background: #333; padding: 8px 45px; vertical-align: middle; color:#fff;
                &.off { background: tomato; padding: 8px 45px; vertical-align: middle;  }
                span { font-size: 18px; }
                }
            }
            &:nth-child(4n) {margin-right: 0;}
        }
    }
`