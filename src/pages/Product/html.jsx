import { useNavigate } from "react-router-dom";

const Html = ({ addToCart, product }) => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="container px-5 mx-auto">
          <div className="flex items-center gap-4 justify-between">
            <h2 className="text-2xl font-semibold mb-4">Products</h2>
            <button
              onClick={() => navigate("/product/add")}
              className="cursor-pointer bg-purple-400 hover:opacity-90 text-[#fff] rounded-lg px-4 py-1"
            >
              Add Product
            </button>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {product?.map((item) => (
              <div key={item.id} className="border border-gray-200 shadow-lg rounded-xl p-2">
                <div className="w-full h-[150px] border-gray-200 border rounded-lg mb-2">
                  <img
                    src="https://picsum.photos/id/237/200/300"
                    alt="img"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-1">
                  <h4 className="font-semibold text-lg leading-tight">{item.title}</h4>
                  <p className="text-gray-500 mb-2 text-sm">{item.description}</p>
                  <div>
                    <button
                      onClick={()=>addToCart(item)}
                      className="cursor-pointer bg-purple-400 hover:opacity-90 text-[#fff] rounded-lg px-4 py-1 w-full"
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Html;
