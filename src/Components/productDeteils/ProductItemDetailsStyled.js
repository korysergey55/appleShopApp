import styled from "styled-components";

export const ProductItem = styled.div`
 width: 100%;
 max-width: 500px;
 padding: 20px;

 .itemContainer {
  border-radius: 14px;
  border: 1px solid #a8a8a8;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
 
  .title {
    font-size: 16px;
    text-align: center;
  }
  .imageWrapper {
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

    .sale {
      text-decoration: line-through;
      color: #dc143c;
    }
    .withoutSale {
      font-weight: 600;
      color: #819ff5;
      font-size: 30px;
    }
  }
  .options {
    display: flex;
    align-items: center;

    .addToCart {
      width: 50%;
      border-radius: 7px;
      margin-right: 10px;
    }
    .bayNow {
      width: 50%;
      border-radius: 7px;
      margin-right: 10px;
    }
  }
}
 `
