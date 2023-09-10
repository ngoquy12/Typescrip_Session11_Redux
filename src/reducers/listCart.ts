import { ACT_ADD_CART } from "../constrains";

const storedData = localStorage.getItem("carts");
const initialState = storedData ? JSON.parse(storedData) : [];

type Action = {
  type: string;
  payload: any;
};

type Product = {
  product_id: number;
  product_name: string;
  image: string;
  price: number;
  description: string;
};

/**
 * Hàm kiêm tra vị trí của sản phẩm trong giỏ hàng
 * @param id id cần kiểm tra
 * @param array mảng chứa danh sách cart
 * @returns nếu như tìm thấy thì trả vị trí của bản ghi, nếu không thì trả ra -1
 */
const findIndexProduct = (id: number, array: []) => {
  const productIndex = array.findIndex((pro: Product) => pro.product_id === id);
  return productIndex;
};

export const listCart = (state = initialState, action: Action) => {
  console.log(action);

  switch (action.type) {
    case ACT_ADD_CART:
      const indexProduct = findIndexProduct(action.payload.product_id, state);
      // Nếu chưa tồn tại thì thêm vào
      if (indexProduct === -1) {
        // clone lại mảng cũ
        const newArray = [...state, { ...action.payload, quantity: 1 }];

        // Lưu dữ liệu lên local
        localStorage.setItem("carts", JSON.stringify(newArray));

        // Return mảng mới
        return newArray;
      } else {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng thì tăng số lượng
        // clone lại mảng cũ
        const updateCart = [...state];
        // Cập nhật lại quantity
        updateCart[indexProduct].quantity += 1;

        // Lưu dữ liệu lên local
        localStorage.setItem("carts", JSON.stringify(updateCart));

        // Return mảng mới
        return updateCart;
      }

    default:
      return state;
  }
};
