import styled from "styled-components";

export const CartListWrap = styled.div`

    .cart-list { 
        width: 100%;
        article { 
            display: flex; border: 1px solid #dedede; align-items: center; justify-content: space-between;padding: 10px; font-size: 20px; width: 100%;
            p {
                input[type=checkbox] {width: 20px;height: 20px;margin-left: 30px;}
            }
            img { width: 120px; }
            strong {font-size: 16px;color: #6e6e6e;}
            div { 
                display: flex; width: 60%;align-items: center;
                h3 {margin-right: 40px;width: 60%;font-size: 16px;font-weight: 500;}
                span {font-size: 16px;margin-left: 30px;font-weight: 600;}
                p {
                    font-size: 16px;
                    i {font-size:18px;width: 30px;height:30px;margin:0 20px;cursor: pointer;}
                }
            }
            button { 
                width: 120px; height: 50px;margin-top:0; transition: 0.3s; border-radius: 10px;background-color: #fff;color: #6e6e6e;border: 1px solid #aaa;margin-right: 30px;

                &:hover {background: #571F1F; color:#fff}
            }
            &:nth-child(2n){background-color: #eee;}
        }
    }
    .cart-bottom { 
        margin-top: 50px; display: flex; font-size: 18px;
        p {
            strong { margin-right: 20px; }
            span {margin-right: 17px;} 
        }
    } 
    button { margin-top: 30px; width: 200px; height: 40px; margin-right: 20px;border-radius: 5px;border: 1px solid #a7a7a7;background-color: #fff;
        &:hover {border-color: #D39247;color: #D39247;}
    }
`
export const CartEmptyWrap = styled.div`
    text-align: center; margin-top: 200px;width: 100%;border: 1px solid #aaa;height: 300px;padding: 50px;box-sizing: border-box;
    .inner {}
    h4 {font-size: 20px; margin-bottom: 100px;margin-bottom: 0;}   
    p { font-size: 100px;margin-top: 20px;color: #333;}
`