import styled from "styled-components";

export const IpadLi = styled.li`
 width: 100%;
 padding: 20px;
 max-width: 400px;
 height: 298px;

 .content {
  border-radius: 14px;
  border: 1px solid #a8a8a8;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 330px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
   1px 4px 6px rgba(0, 0, 0, 0.16);
 }
 .listItemTitle {
  font-size: 16px;
  text-align: center;
 }

 .imageWrapper {
  height: 130px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
 }

 .listItemImage {
  height: 100%;
 }
 .listItemImage:hover {
  cursor: pointer;
 }
 .colorsList {
  display: flex;
  list-style: none;
 }
 .priceTitle {
  text-align: center;
  font-size: 20px;
 }
 .withSalePrice {
  text-decoration: line-through;
  color: #dc143c;
 }
 .withoutSalePrice {
  font-weight: 600;
  color: #819ff5;
  font-size: 30px;
 }
 .options {
  display: flex;
  align-items: center;
 }
 .detailsButton {
  width: 50%;
  border-radius: 14px 0 0 14px;
  margin-right: 1px;
 }
 .addToCartButton {
  width: 50%;
  border-radius: 0 14px 14px 0;
  margin-right: 1px;
 }

 @media (min-width: 768px) {
  width: 50%;
 }

 @media (min-width: 1024px) {
  width: 25%;
 }
`;
