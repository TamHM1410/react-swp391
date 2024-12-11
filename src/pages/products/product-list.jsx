import { update_cart } from "../../apis/cart";
import useCart from "../../stores/cart-store";
import { useQueryClient } from "@tanstack/react-query";
const ProductList = ({ data = [] }) => {
  const { cart } = useCart();

  const queryClient = useQueryClient();

  const handleAddToCart = async (item) => {
    try {
      // Ensure cart_product is an array
      const cartProducts = cart?.cart_product || [];
      
      // Check if item already exists in cart
      const existingItemIndex = cartProducts.findIndex(
        cartItem => cartItem.stem_id._id === item._id
      );
  
      if (existingItemIndex !== -1) {
        // Update quantity of existing item
        cartProducts[existingItemIndex].quantity += 1;
      } else {
        // Add new item to cart
        cartProducts.push({
          stem_id: { _id: item._id },
          quantity: 1
        });
      }
  
      // Prepare payload for update
      const payload = cartProducts.map(product => ({
        quantity: product.quantity,
        stem_id: product.stem_id._id
      }));
  
      // Update cart
      console.log('payoad',payload)
      const res = await update_cart({
        cart_product:payload
      });
      
      // Invalidate cart queries
      queryClient.invalidateQueries(["carts"]);
  
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  return (
    <div className="w-full h-full p-5 sm:p-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {data.map((item, index) => {
          return (
            <>
              <div
                className="card bg-base-100 w-full sm:w-96 shadow-xl"
                key={index}
              >
                <figure>
                  <div className="carousel carousel-vertical rounded-box h-80 sm:h-96">
                    <div className="carousel-item h-full">
                      <img
                        src={item.thumb_image}
                        className="w-full h-full"
                        alt="not found"
                      />
                    </div>
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.stem_name}</h2>
                  <p>{item.stem_description}</p>
                  <div className="card-actions justify-between py-2 font-medium	text-red-600">
                    <button className="text-[20px]">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.stem_price)}
                    </button>
                    <button
                      className="btn btn-neutral"
                      onClick={() => handleAddToCart(item)}
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
