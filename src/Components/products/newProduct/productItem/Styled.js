import styled from "styled-components";

export const ProductLi = styled.li`
max-width: 265px;
margin-bottom: 20px;
margin-right: 10px;
border-radius: 14px;
border: 1px solid #a8a8a8;
transform: scale(0.95);
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
  1px 4px 6px rgba(0, 0, 0, 0.16);

 &:not(:last-child){
 }
 &:hover{
   cursor: pointer;
   border: 1px solid #1890ff;
   transform: scale(1);
 }

 .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
  
  .title {
    font-size: 16px;
    text-align: center;
  }

 .imgWrapper {
    height: 130px;
    display: flex;
    justify-content: center;
    padding: 10px 0;

  .img {
    height: 100%;
  }
}
.price {
  text-align: center;
  font-size: 20px;

  .salePrice {
    text-decoration: line-through;
    color: #dc143c;
  }
  .withoutSalePrice {
    font-weight: 600;
    color:#1890ff;
    font-size: 20px;
  }
}
 .options {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .btnDetails {
      width: 50%;
      margin-right: 1px;
      border-radius: 14px 0 0 14px;
      color: white;
    }
    .BtnAddToCart {
      width: 50%;
      margin-right: 1px;
      border-radius: 0 14px 14px 0;
      color: white;
    }
  }
}
`;
